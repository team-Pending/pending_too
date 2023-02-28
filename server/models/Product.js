const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

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
   reviews: [{
     type: String,
   }],
  rating: {
    type: Number,
  },
   key: {
    type: String,
    required: true
   },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;