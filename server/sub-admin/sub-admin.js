// // Import required packages and modules
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');

// // Define Mongoose model for sub-admin data
// const subAdminSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   isAdmin: { type: Boolean, default: false },
// });

// const SubAdmin = mongoose.model('SubAdmin', subAdminSchema);

// // Create new router for sub-admin functionality
// const subAdminRouter = express.Router();

// // Define middleware for JWT authentication
// function authenticateJWT(req, res, next) {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//     const token = authHeader.split(' ')[1];
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//       if (err) {
//         return res.sendStatus(403);
//       }

//       req.user = user;
//       next();
//     });
//   } else {
//     res.sendStatus(401);
//   }
// }

// // Define sub-admin route that requires authenticaqtion and permissions
// subAdminRouter.get('/', authenticateJWT, (req, res) => {
//   if (req.user.role !== 'sub-admin') {
//     return res.sendStatus(403);
//   }
//   SubAdmin.find({}, (err, subAdmins) => {
//     if (err) {
//       return res.sendStatus(500);
//     }
//     res.json(subAdmins);
//   });
// });

// // Add sub-admin router to main app
// const app = express();
// app.use('/sub-admin', subAdminRouter);

// // define an endpoint for user authentication
// app.post('/api/authenticate', async (req, res) => {
//     const { email, password } = req.body;
//     //find the user with the given email
//     const user = await User.findOne({ email });
//     // if the user doesn't exist, send a 401 Unauthorized user response
//     if (!user) {
//         return res.status (401).send({ message: 'Invalid email or password' });
//     }
//     //validate the user's password
//     const isValidPassword = await bcrypt.compare(password, user.password);

//     // if the password is invalid, send a 401 Unathorized response
//     if (!isValidPassword) {
//         return res.status(401).send({ message: 'Invalid email or password' });
//     }
//     //generate a JSON Web Token (JWT)
//     const token = jwt.sign({ userId: user._id }, 'my-secret-key');

//     // send the JWT to the clent
//     res.send({ token });
// });

// // Connect to MongDB using Mongoose
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/MediaPhile', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   app.listen(3001, () => {
//     console.log('Server started on port 3001');
//   });
// })

// .catch(err => console.log(err));

// module.exports = mongoose.connection;
