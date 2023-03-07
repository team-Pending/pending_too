import { gql } from "@apollo/client";


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
  {
    user {
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
export const QUERY_ADMINUSER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      isAdmin
    }
  }
`;

export const QUERY_ADMINPRODUCT = gql`
  {
    product {
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
query SearchProduct ($name: String) {
  products(name: $name) {
    category
    productDescription
    id
    productName
    price
  }
}

`;