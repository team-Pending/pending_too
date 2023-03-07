const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		firstName: String
		lastName: String
		email: String
		isAdmin: Boolean
		orders: [Orders]
	}
	type Orders {
		_id: ID
		purchaseDate: String
		product: [Product]
	}

	type Auth {
		token: ID!
		user: User
	}

	type Product {
		id: ID
		name: String
		description: String
		category: String
		price: Float
		image: String
		thumbsUp: Int
		thumbsDown: Int
	}

	type Query {
		user: [User!]!
		adminUser: [User!]!
		product: [Product!]!
		adminProduct: [Product!]!
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
