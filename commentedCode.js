// CLIENT:

// client/src/components/account/LoginForm.jsx line 16:
    // const { data, loading } = useQuery(QUERY_GET_USER, {
	// 	variables: { email: email },
	// });

// client/src/components/admin/admin.css line 7:
    /* flex-direction: column; */
    // line 45: 
            /* justify-content: space-around; */
            // line 16:        
             /* background: rgb(244, 101, 36); */

// clinet/src/components/admin/ProductList.jsx lines 56-58:
{/* <td className="contain">Item: <br />
                        <section key={product.s3key} style={{ backgroundImage: `url('http://localhost:3001/api/s3/${product.s3key}')` }} />
                        </td> */}
                // line 58:
                 {/* <td>Description: <br />{product.productDescription}</td> */}
                //  line 59-60:
                {/* <td className="container">Quantity: <br />{product.quantity}</td> */}
                        {/* <td className="contain">image: <br />{product.image}</td> */}

// // clinet/src/components/admin/UserList.jsx line 73:
                            {/* <button type="submit">DELETE</button> */}

// client/src/components/Cart/index.jsx line 6:
    // import useAuth from '../../utils/auth';

// Client/src/components/placeholderData/Placeholder.jsx line 28:
     {/* <button onClick={() => {handleClick()}}>hello there</button> */}

// Client/src/components/shopCard/ShopCard.jsx line 23:
{/* <button className="remove-from-cart">Remove from cart</button> */}

// client/src/utils/s3.jsx line 15+:
// Uploads file to s3
// export const uploadFile = async () => {
//     const fileStream = fs.createReadStream(file.path);
//     const command = new PutObjectCommand({
//         Bucket: bucketName,
// 		Body: fileStream,
// 		Key: file.filename,
//     });

//     try {
//       const response = await client.send(command);
//       console.log(response);
//     } catch (err) {
//       console.error(err);
//     }
//   };

// client/src/app.css line 13:
    /* outline: 2px solid lime; */

// client/src/app.jsx line 21:
	//credentials: 'include'

// SERVER:

// server/controllers/emailController.js line 2:
// const { transporter } = require('../config/nodeMailer');
// line 4: 
// const emailAddress = process.env.EMAIL_ADDRESS;

// server/schemas/resolvers.js line 4:
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
// line 43: 
      // throw new AuthenticationError('Not logged in');
// line 49:
      // throw new AuthenticationError('Not logged in');
// line 61+: 
// products: async (parent, args, context) => {
    //   return Product.find({
    //     productName: { $regex: args.name, $options: "i" },
    //   });
    // },

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
    // line 136: 
            // await checkUser.products.push(newProduct._id);
// line 173+: 
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

    // server/schemas/typeDefs.js line 110:
//    updateUser(firstName: String, lastName: String, email: String, password: String, isAdmin: Boolean): User

// server/utils/auth.js line 34+:
// const jwt = require('jsonwebtoken');

// const secret = 'mysecretsshhhhh';
// const expiration = '2h';

// module.exports = {
//   signToken: function ({ firstName, email, _id }) {
//     const payload = { firstName, email, _id };

//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },
// };

