const { AuthenticationError } = require('apollo-server-express');
const { Product } = require('../models');
const User = require('../models/User');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const {GraphQLError} = require("graphql");

const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";

const resolvers = {
	Query: {
		user: async (parent, args, context) => {
			if (context.user) {
				const user = await User.findById(context.user._id).populate({
					path: 'orders.products',
					populate: 'category',
				});

				user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

				return user;
			}

			throw new AuthenticationError('Not logged in');
		},

		// Laura added to pull product info as well as user
		products: async (parent, args, context) => {
			context.product = true
			if (context.product) {
				const product = await Product.findById(context.product._id).populate({
					path: 'orders.product',
					populate: 'category',
				});

				product.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

				return product;
			}

			throw new AuthenticationError('Not logged in');
		},
	},
	Mutation: {
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			if(!user) {
				throw new GraphQLError("User does not exist!", {
					extensions: {
						code: AUTHENTICATION_ERROR,
					},
				} )
			}
			const isPasswordCorrect = await user.isCorrectPassword (password);
			if(!isPasswordCorrect) {
				throw new GraphQLError("Incorrect Password!", {
					extensions: {
						code: AUTHENTICATION_ERROR,
					},
			});
		}
			const token = signToken({ email: user.email });
			return { token };
		},
	},
};

module.exports = resolvers;
// Mutation: {
//   addUser: async (parent, args) => {
//     const user = await User.create(args);
//     const token = signToken(user);

//     return { token, user };
//   },
//   updateUser: async (parent, args, context) => {
//     if (context.user) {
//       return await User.findByIdAndUpdate(context.user._id, args, {
//         new: true,
//       });
//     }

//     throw new AuthenticationError("Not logged in");
//   },
//   login: async (parent, { email, password }) => {
//     const user = await User.findOne({ email });

//     if (!user) {
//       throw new AuthenticationError("Incorrect credentials");
//     }

//     const correctPw = await user.isCorrectPassword(password);

//     if (!correctPw) {
//       throw new AuthenticationError("Incorrect credentials");
//     }

//     const token = signToken(user);

//     return { token, user };
//   },
// },
