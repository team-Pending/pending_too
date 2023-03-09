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
	mutation addProduct(
		$email: String!
		$productName: String!
		$productDescription: String!
		$price: Float!
		$s3Key: String!
	) {
		addProduct(
			email: $email
			productName: $productName
			productDescription: $productDescription
			price: $price
			s3Key: $s3Key
		) {
			success
			message
		}
	}
`;

export const DELETE_PRODUCT = gql`
	mutation deleteProduct($productId: ID!) {
		deleteProduct(Id: $productId) {
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
    $_id: ID!) {
      deleteUser(_id: $_id){
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
