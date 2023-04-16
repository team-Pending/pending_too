const { AuthenticationError } = require('apollo-server-express');
const { Category, Order, Product, User } = require('../models');
const { signToken } = require('../utils/auth');
const { GraphQLError } = require('graphql');

const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      context.user = true;
      if (context.user) {
        const user = await User.find();

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    singleUser: async (parent, args, context) => {
      const user = await User.findOne({
        email: args.email,
      });
      if (!user) {
        throw new GraphQLError('User does not exist!', {
          extensions: {
            code: AUTHENTICATION_ERROR,
          },
        });
      }
      return user;
    },
    me: async (parent, args, context) => {
      const user = await User.findOne({
        email: context.user.email,
      });
      return user;
    },
    adminUser: async (_, __, context) => {
      context.adminUser = true;
      const user = await User.find();
      return user;
    },

    adminProduct: async (_, __, context) => {
      context.adminProduct = true;
      const product = await Product.find();
      return product;
    },
    // return Product.find({productName: { $regex : args.name, $options: 'i'}});
    product: async (parent, args, context) => {
      context.product = true;
      if (context.product) {
        console.log(args);
        if (args.productName === '') {
          const product = await Product.find();
          return product;
        } else {
          return Product.find({ productName: { $regex: args.productName, $options: 'i' } });
        }

      }

      throw new AuthenticationError('Not logged in');
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

    addProduct: async (
      parent,
      { email, productName, productDescription, price, s3key },
      context
    ) => {
      var checkUser = await User.findOne({ email });
      if (!checkUser) {
        throw new GraphQLError('This user does not exist', {
          extensions: {
            code: AUTHENTICATION_ERROR,
          },
        });
      } else {
        var newProduct = await new Product({
          email: email,
          productName: productName,
          productDescription: productDescription,
          price: price,
          s3key: s3key,
        });
        await newProduct.save();
        var updateUser = await User.findOneAndUpdate(
          { email },
          { $push: { products: newProduct } },
          { new: true }
        ).exec();
        await updateUser.save();
        return { success: true, message: 'I think you added a new Product' };
      }
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError('Must be logged in');
    },

    deleteUser: async (parent, args, context) => {
      if (context.user) {
        const result = await User.deleteOne({ _id: context.user._id });
        if (result.deletedCount === 1) {
          return { success: true, message: 'User deleted successfully' };
        }
        return { success: false, message: 'User not found' };
      }
      throw new AuthenticationError('Must be logged in');
    },

    deleteProduct: async (parent, args, context) => {
      if (context.product) {
        const result = await Product.deleteOne({ _id: context.product._id });
        if (result.deletedCount === 1) {
          return { success: true, message: 'Product deleted successfully' };
        }
        return { success: false, message: 'Product not found' };
      }
      throw new AuthenticationError('Must be logged in');
    },
  },
};

module.exports = resolvers;
