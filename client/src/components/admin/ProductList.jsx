import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Container, Row, Col } from "reactstrap";
import { DELETE_PRODUCT } from "../../utils/queries";
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
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  console.log(error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const productList = data.product.map((product) => ({
    id: product.id,
    productName: product.productName,
    price: product.price,
    category: product.category,
    thumbsUp: product.thumbsUp,
    thumbsDown: product.thumbsDown,
  }));

      async function handleDelete(id) {
        try {
            const { data } = await deleteProduct({
                variables: { productId: id },
            });
            console.log(data); // handle success response
        } catch (error) {
            console.error(error); // handle error
        }
    }

  return (
    <section>
      <Container>
        <Row>
          <Col className="lg-3">
            <div className="product__box">
              <h2>Product List</h2>
              {productList.map((product) => (
                <table key={product.id}>
                  <tbody>
                    <tr className="product__id">
                      <td className="contain">ID: <br />{product.id}</td>
                      <td className="contain">Name: <br />{product.productName}</td>
                      {/* <td>Description: <br />{product.productDescription}</td> */}
                      <td className="contain">Price: <br />{product.price}</td>
                      {/* <td className="container">Quantity: <br />{product.quantity}</td> */}
                      <td className="contain">fileType: <br />{product.fileType}</td>
                      <td className="contain">Category: <br />{product.category}</td>
                      <td className="contain">Review: <br />{product.thumbs ? 'Yes' : 'No'}</td>
                      <td className="contain"><button onClick={() => handleDelete(product.id)} type="submit">DELETE</button></td>
                    </tr>
                  </tbody>
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