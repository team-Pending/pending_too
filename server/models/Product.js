const { ObjectId } = require('mongoose').Types;
const { Schema, model } = require('mongoose');

const productSchema = new Schema({
	productName: {
		type: String,
		trim: true,
	},
	productDescription: {
		type: String,
		trim: true,
	},
	price: {
		type: Number,
		required: true,
		default: 0,
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
	},
	reviews: [
		{
			type: String,
		},
	],
	rating: {
		type: Number,
	},
	fileType: {
		type: String,
	},
	s3key: {
		type: String,
		required: false,
	},
});

const Product = model('Product', productSchema);

module.exports = Product;
