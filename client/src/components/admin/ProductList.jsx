import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_PRODUCTS = gql`
  query {
    product {
      id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

function ProductList() {
    const { loading, error, data } = useQuery (QUERY_PRODUCTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const productList = data.product.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: product.quatity,
        image: product.image, 
        category: product.category,
    }));

    return (
        <div>
            <h2>Product List</h2>
            {productList.map((product) => (
                <tr key={product.id}>
                    <td>ID: {product.id}</td>
                    <td>Name: {product.name}</td>
                    <td>Description: {product.description}</td>
                    <td>Price: {product.price}</td>
                    <td>Quantity: {product.quantity}</td>
                    <td>Image: {product.image}</td>
                    <td>Category: {product.category}</td>
                    <td>Review: {product.thumbs ? 'Yes' : 'No'}</td>
                </tr>
            ))};
        </div>
    );
}

export default ProductList;