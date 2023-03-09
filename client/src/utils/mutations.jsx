import { gql } from '@apollo/client';

export const ADD_ORDER = gql`
	mutation addOrder($products: [ID]!) {
		addOrder(products: $products) {
			purchaseDate
			products {
				_id
				name
				description
				price
				quantity
				category {
					name
				}
			}
		}
	}
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($products: [ID]!) {
    addProduct(products: $products)
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct(
    $productId: ID!) {
      deleteProduct(Id: $productId){
        id
        productName
      }
    }
  `;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser(
    $userId: ID!) {
      deleteUser(Id: $userId){
        success
        message
      }
    }
  `;

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;
