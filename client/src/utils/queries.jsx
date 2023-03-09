import { gql } from '@apollo/client';

export const QUERY_ALL_PRODUCT = gql`
	{
		product {
			_id
			productName
			productDescription
			category
			reviews
			rating
			price
			s3key
			category {
				name
			}
		}
	}
`;

export const QUERY_CATEGORIES = gql`
	{
		categories {
			_id
			name
		}
	}
`;

export const QUERY_CHECKOUT = gql`
	query getCheckout($product: [ID]!) {
		checkout(product: $product) {
			session
		}
	}
`;

export const QUERY_PRODUCT = gql`
	query getProduct($category: ID) {
		product(category: $category) {
			_id
			productName
			productDescription
			price
			quantity
			fileType
			category {
				_id
			}
		}
	}
`;

export const QUERY_USER = gql`
	{
		user {
			_id
			firstName
			lastName
			email
			isAdmin
			orders {
				_id
				purchaseDate
				product {
					_id
					productName
					productDescription
					category
					price
					fileType
				}
			}
		}
	}
`;

export const QUERY_GET_USER = gql`
	query SingleUser($email: String) {
		user(email: $email) {
			firstName
			lastName
			email
			orders {
				_id
				purchaseDate
				product {
					_id
					productName
					productDescription
					price
					quantity
					fileType
				}
			}
		}
	}
`;
export const QUERY_ADMIN_USER = gql`
	query AminUser($name: String) {
		user(name: $name) {
			_id
			firstName
			lastName
			email
			isAdmin
		}
	}
`;

export const QUERY_ADMIN_PRODUCT = gql`
	query AdminProduct($name: String) {
		product(name: $name) {
			_id
			productName
			productDescription
			price
			quantity
			fileType
			category {
				_id
				name
			}
		}
	}
`;

export const QUERY_SEARCH_PRODUCT = gql`
	query SearchProduct($name: String) {
		products(name: $name) {
			category
			productDescription
			id
			productName
			price
			s3key
		}
	}
`;

export const DELETE_USER = gql`
	mutation deleteUser($userId: ID!) {
		deleteUser(userId: $userId) {
			successd
			message
		}
	}
`;
