const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		firstName: String
		lastName: String
		email: String
    cart: String
		isAdmin: Boolean
    seller: Boolean
    username: String
    password: String
		orders: [Orders]
	}

	type Orders {
		_id: ID
		purchaseDate: String
		products: [Products]
	}

	type Auth {
		token: ID!
		user: [User]
	}

	type Products {
		_id: ID
		productName: String
		productDescription: String
		category: String
    reviews: String
    rating: Int
		price: Float
		fileType: String
    s3key: String
		thumbsUp: Int
		thumbsDown: Int
	}

  type Review {
    _id: ID
    reviewText: String
    createdAt: String
    userId: String
    productId: String
  }

  type Category {
    _id: ID
    categoryName: String
  }

	type Query {
		user: [User!]!
		products: [Products!]!
	}

	type Mutation{
		login(email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;
//  type Mutation {
//    addUser(firstName: String!, lastName: String!, email: String!, password: String! isAdmin: Boolean!): Auth
//    updateUser(firstName: String, lastName: String, email: String, password: String, isAdmin: Boolean): User
//   login(email: String!, password: String!): Auth
//  }
