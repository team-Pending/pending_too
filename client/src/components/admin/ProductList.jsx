import React from "react";
import { useQuery, gql } from "@apollo/client";
// import { QUERY_ADMINPRODUCT } from "../../utils/queries";
import { Container, Row, Col } from "reactstrap";
import "./admin.css"

const QUERY_ADMINPRODUCT = gql`
 {
  product {
    id
    productName
    category
    price
    thumbsUp
    thumbsDown
  }
}
`;


function ProductList() {
  const { loading, error, data } = useQuery(QUERY_ADMINPRODUCT);
  console.log(error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const productList = data.product.map((product) => ({
    id: product.id,
    productName: product.productName,
    price: product.price,
    // productDescription: product.productDescription,
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
                  <td>Name: {product.productName}</td>
                  {/* <td>Description: {product.productDescription}</td> */}
                  <td>Price: {product.price}</td>
                  <td>Quantity: {product.quantity}</td>
                  <td>fileType: {product.fileType}</td>
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