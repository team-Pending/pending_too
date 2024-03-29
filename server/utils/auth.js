const  jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRATION } = require('../config');

module.exports = {
	authMiddleware: function ({ req }) {
	  // allows token to be sent via req.body, req.query, or headers
	  let token = req.body.token || req.query.token || req.headers.authorization;
	
	  // ["Bearer", "<tokenvalue>"]
	  if (req.headers.authorization) {
		token = token.split(' ').pop().trim();
	  }
	
	  if (!token) {
		return req;
	  }
	
	  try {
		const { data } = jwt.verify(token, JWT_SECRET);
		req.user = data;
	  } catch (error){

		console.log('Invalid token', error);
	  }
	
	  return req;
	},
	signToken: function ({ email }) {
		const payload = { email };
		return jwt.sign({ data: payload }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
	},
};

// const jwt = require('jsonwebtoken');

// const secret = 'mysecretsshhhhh';
// const expiration = '2h';

// module.exports = {
//   signToken: function ({ firstName, email, _id }) {
//     const payload = { firstName, email, _id };

//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },
// };
