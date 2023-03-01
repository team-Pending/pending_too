const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  productName: {
    type: String,
    trim: true
  },
  productDescription: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
   reviews: [
    {
     type: String
   },
],
  rating: {
    type: Number
  },
  fileType: {
    type: RegExp
  },
   key: {
    type: String,
    required: true
   },
});

const Product = model('Product', productSchema);

module.exports = Product;