const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		firstName: String
		lastName: String
		email: String
		isAdmin: Boolean
	}

	type Auth {
		token: ID!
		user: User
	}

	type Products {
		id: ID
		title: String
		category: String
		price: Float
		thumbsUp: Int
		thumbsDown: Int
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
