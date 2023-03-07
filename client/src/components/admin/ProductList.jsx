import React from "react";
import { useQuery, gql } from "@apollo/client";
// import { QUERY_ADMIN_PRODUCT } from "../../utils/queries";
import { Container, Row, Col } from "reactstrap";
import "./admin.css"

const QUERY_ADMIN_PRODUCT = gql`
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
  const { loading, error, data } = useQuery(QUERY_ADMIN_PRODUCT);
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
                <table>
                <tr key={product.id} className="product__id">
                  <td className="unit">ID: {product.id}</td>
                  <td className="unit">Name: {product.productName}</td>
                  {/* <td>Description: {product.productDescription}</td> */}
                  <td className="unit">Price: {product.price}</td>
                  <td className="unit">Quantity: {product.quantity}</td>
                  <td>fileType: {product.fileType}</td>
                  <td className="unit">Category: {product.category}</td>
                  <td className="unit">Review: {product.thumbs ? 'Yes' : 'No'}</td>
                  <button type="submit">DELETE</button>
                </tr>
                </table>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProductList;