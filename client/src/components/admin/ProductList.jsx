import React from "react";
import { useQuery, gql } from "@apollo/client";
// import { QUERY_PRODUCTS } from "../../utils/queries";
import { Container, Row, Col } from "reactstrap";
import "./admin.css"

const QUERY_PRODUCTS = gql`
query getProducts($category: ID) {
  products(category: $category) {
      id
      title
      price
      category
      thumbsUp
      thumbsDown
    }
  }
`;


function ProductList() {
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const productList = data.product.map((product) => ({
    id: product.id,
    name: product.title,
    price: product.price,
    category: product.category,
    thumbsUp: product.thumbsUp,
    thumbsDown: product.thumbsDown,
  }));

  return (
    <section>
      <Container>
        <Row>
          <Col className="lg-3">
            <div className="product__box">
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProductList;