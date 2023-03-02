const { Product, Review } = require('../models');

const productController = {
  // get all products
  getProducts(req, res) {
    Product.find()
      .select('-__v')
      .then((dbProductData) => {
        res.json(dbProductData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get single product by id
  getSingleProduct(req, res) {
    Product.findOne({ _id: req.params.productId })
      .select('-__v')
      .populate('reviews')
      .then((dbProductData) => {
        if (!dbProductData) {
          return res.status(404).json({ message: 'No product with this id!' });
        }
        res.json(dbProductData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create a new product
  createProduct(req, res) {
    Product.create(req.body)
      .then((dbProductData) => {
        res.json(dbProductData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update a product
  updateProduct(req, res) {
    Product.findOneAndUpdate(
      { _id: req.params.productId },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    )
      .then((dbProductData) => {
        if (!dbProductData) {
          return res.status(404).json({ message: 'No product with this id!' });
        }
        res.json(dbProductData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // delete product
  deleteProduct(req, res) {
    Product.findOneAndDelete({ _id: req.params.productId })
      .then((dbProductData) => {
        if (!dbProductData) {
          return res.status(404).json({ message: 'No product with this id!' });
        }

        // Get ids of product's `reviews` and delete them all
        return Review.deleteMany({ _id: { $in: dbProductData.reviews } });
      })
      .then(() => {
        res.json({ message: 'Product and associated reviews deleted!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = productController;