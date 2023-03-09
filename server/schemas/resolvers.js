const { AuthenticationError } = require("apollo-server-express");
const { Category, Order, Product, User } = require("../models");
const { signToken } = require("../utils/auth");
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { GraphQLError } = require("graphql");

const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      //added for sake of testing without login
      console.log("you searched a user");
      context.user = true;
      if (context.user) {
        const user = await User.find();

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    singleUser: async (parent, args, context) => {
      console.log("you searched for a single user");
      const user = await User.findOne({
        email: args.email,
      });
      console.log(user);
      if (!user) {
        throw new GraphQLError("User does not exist!", {
          extensions: {
            code: AUTHENTICATION_ERROR,
          },
        });
      }
      return user;
    },
    me: async (parent, args, context) => {
      console.log("you searched for a yourself", context.user);
      const user = await User.findOne({
        email: context.user.email,
      });
      return user;
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

      throw new AuthenticationError("Not logged in");
    },
    products: async (parent, args, context) => {
      return Product.find({
        productName: { $regex: args.name, $options: "i" },
      });
    },
    // order: async (parent, { _id }, context) => {
    //   if (context.user) {
    // 	const user = await User.findById(context.user._id).populate({
    // 	  path: 'orders.products',
    // 	  populate: 'category'
    // 	});

    // 	return user.orders.id(_id);
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ products: args.products });
    //   const line_items = [];

    //   const { products } = await order.populate('products');

    //   for (let i = 0; i < products.length; i++) {
    // 	const product = await stripe.products.create({
    // 	  name: products[i].name,
    // 	  description: products[i].description,
    // 	  images: [`${url}/images/${products[i].image}`]
    // 	});

    // 	const price = await stripe.prices.create({
    // 	  product: product.id,
    // 	  unit_amount: products[i].price * 100,
    // 	  currency: 'usd',
    // 	});

    // 	line_items.push({
    // 	  price: price.id,
    // 	  quantity: 1
    // 	});
    //   }

    //   const session = await stripe.checkout.sessions.create({
    // 	payment_method_types: ['card'],
    // 	line_items,
    // 	mode: 'payment',
    // 	success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    // 	cancel_url: `${url}/`
    //   });

    //   return { session: session.id };
    // }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new GraphQLError("User does not exist!", {
          extensions: {
            code: AUTHENTICATION_ERROR,
          },
        });
      }
      const isPasswordCorrect = await user.isCorrectPassword(password);
      if (!isPasswordCorrect) {
        throw new GraphQLError("Incorrect Password!", {
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

    addUser: async (
      parent,
      { username, firstName, lastName, email, password }
    ) => {
      console.log("Hit add User");
      const checkUser = await User.findOne({ email });
      if (checkUser) {
        console.log("email already exists");
        throw new GraphQLError("A user with this email already exists!", {
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
      console.log("Hit add Product");
      var checkUser = await User.findOne({ email });
      if (!checkUser) {
        console.log("User does not exist");
        throw new GraphQLError("This user does not exist", {
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
        console.log("you saved a new product", newProduct);
        var updateUser = await User.findOneAndUpdate(
          { email },
          { $push: { product: newProduct } }
        );
        await updateUser.save();
        console.log();
        return { success: true, message: "I think you added a new Product" };
      }
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Must be logged in");
    },

    deleteUser: async (parent, args, context) => {
      if (context.user) {
        const result = await User.deleteOne({ _id: context.user._id });
        if (result.deletedCount === 1) {
          return { success: true, message: "User deleted successfully" };
        }
        return { success: false, message: "User not found" };
      }
      throw new AuthenticationError("Must be logged in");
    },

    deleteProduct: async (parent, args, context) => {
      if (context.product) {
        const result = await Product.deleteOne({ _id: context.product._id });
        if (result.deletedCount === 1) {
          return { success: true, message: "Product deleted successfully" };
        }
        return { success: false, message: "Product not found" };
      }
      throw new AuthenticationError("Must be logged in");
    },

    // addOrder: async (parent, { products }, context) => {
    //   console.log(context);
    //   if (context.user) {
    //     const order = new Order({ products });

    //     await User.findByIdAndUpdate(context.user._id, {
    //       $push: { orders: order },
    //     });

    //     return order;
    //   }

    //   throw new AuthenticationError("Must be logged in");
    // },
  },
};

module.exports = resolvers;
