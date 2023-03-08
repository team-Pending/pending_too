const { AuthenticationError } = require('apollo-server-express');
const { Product } = require('../models');
const User = require('../models/User');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { GraphQLError } = require('graphql');

const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';

const resolvers = {
	Query: {
		user: async (parent, args, context) => {
			//added for sake of testing without login
			context.user = true;
			if (context.user) {
				const user = await User.find();

				return user;
			}

			throw new AuthenticationError('Not logged in');
		},
		// Laura added to pull adminUser info
		adminUser: async (_, __, context) => {
			//added for sake of testing without login
			context.adminUser = true;
			const user = await User.find();
			return user;
			// throw new AuthenticationError('Not logged in');
		},

		adminProduct: async (_, __, context) => {
			//added for sake of testing without login
			context.adminProduct = true;
			const product = await Product.find();
			return product;
			// throw new AuthenticationError('Not logged in');
		},

		product: async (parent, args, context) => {
			//added for sake of testing without login
			context.product = true;
			if (context.product) {
				const product = await Product.find();

				return product;
			}

			throw new AuthenticationError('Not logged in');
		},
		products: async (parent, args, context) => {
			return Product.find({ productName: { $regex: args.name, $options: 'i' } });
		},
		singleUser: async (parent, { email }) => {
			const user = await User.findOne({ email: email });
			console.log(user);
			if (!user) {
				throw new GraphQLError('User does not exist!', {
					extensions: {
						code: AUTHENTICATION_ERROR,
					},
				});
			}
			return  user ;
		},
	},
	Mutation: {
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new GraphQLError('User does not exist!', {
					extensions: {
						code: AUTHENTICATION_ERROR,
					},
				});
			}
			const isPasswordCorrect = await user.isCorrectPassword(password);
			if (!isPasswordCorrect) {
				throw new GraphQLError('Incorrect Password!', {
					extensions: {
						code: AUTHENTICATION_ERROR,
					},
				});
			}
			const token = signToken({
				email: email,
			});
			return { token };
		},

		addUser: async (parent, { username, firstName, lastName, email, password }) => {
			const checkUser = await User.findOne({ email });
			if (checkUser) {
				console.log('email already exists');
				throw new GraphQLError('A user with this email already exists!', {
					extensions: {
						code: AUTHENTICATION_ERROR,
					},
				});
			} else {
				const newUser = await new User({
					email: email,
					username: username,
					firstName: firstName,
					lastName: lastName,
					password: password,
				});
				await newUser.save();
			}
			const token = signToken({
				email: email,
			});
			return { token };
		},
	},
};

module.exports = resolvers;
