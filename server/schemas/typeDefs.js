const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    isAmin: Boolean
  }

  type Auth {
    token: ID
    user: User
  }

  // laura added for sort feature in admin page
  type Products {
    id: ID
    title: String
    category: String
    price: Float
    thumbsUp: Int
    thumbsDown: int
  }

  type Query {
    user: [User!]!
    products: [Product!]!
  }

  # type Mutation {
  #   addUser(firstName: String!, lastName: String!, email: String!, password: String! isAdmin: Boolean!): Auth
  #   updateUser(firstName: String, lastName: String, email: String, password: String, isAdmin: Boolean): User
  #   login(email: String!, password: String!): Auth
  # }
`;

module.exports = typeDefs;
