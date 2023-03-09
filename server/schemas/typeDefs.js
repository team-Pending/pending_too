const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    cart: [String]
    isAdmin: Boolean
    seller: Boolean
    username: String
    password: String
    orders: [Order]
  }

	type Order {
		_id: ID
		purchaseDate: String
		product: [Product]
	}

	type Auth {
		token: ID!
		user: [User]
	}

	type Product {
		id: ID
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
		userid: [User]
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

	type Checkout {
		session: ID
	}

	type Query {
		user: [User!]!
		singleUser(email: String): User!
		me: User
		adminUser: [User!]!
		product: [Product!]!
		adminProduct: [Product!]!
		products(name: String): [Product!]!
	}



	type Mutation {
		login(email: String!, password: String!): Auth

		addUser(
			username: String!
			firstName: String!
			lastName: String!
			email: String!
			password: String!
		) : Auth

		addOrder(products: [ID]!): Order

		updateUser(firstName: String, lastName: String, email: String, password: String): User

    addProduct(
      id: ID
      productName: String
      productDescription: String
      price: Float
      category: String
      reviews: String
      rating: Int
      fileType: String
      s3key: String
      thumbsUp: Int
      thumbsDown: Int
    ): User

    updateProduct(_id: ID!, quantity: Int!): Product
    deleteProduct(productId: ID!): Product
	deleteUser(_id: ID!): User
  }

  type DeleteUserResponse {
    success: Boolean!
    message: String!
  }
  type DeleteProductResponse {
    success: Boolean!
    message: String!
  }
`;

module.exports = typeDefs;
//    updateUser(firstName: String, lastName: String, email: String, password: String, isAdmin: Boolean): User