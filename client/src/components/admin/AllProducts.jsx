import React from "react"; //6.9k (gzipped: 2.75)
import { Container, Row, Col } from "reactstrap";

//  import database here from here we decide to hide it.
import { idbPromise } from "../utils/helpers";

// import where we are holding docs to delete from here
// import { doc, deleteDoc } from "";

import useGetData from "../custom-hooks/useGetData";
import { toast } from "react-toastify";

const AllProducts = () => {
    const { data: productsData, loading } = useGetData("products");

    const deleteProduct = async id => {
        await deletDoc(doc(idbPromise, "products", id))
        toast.success("Deleted!");
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loading ? <h4>Loading.....</h4> :
                                        productsData.map(item => (
                                            <tr key={item.id}>
                                                <td></td>
                                                <td><img src={item.imgUrl} alt="" /></td>
                                                <td>{item.title}</td>
                                                <td>{item.category}</td>
                                                <td>${item.price}</td>
                                                <td>
                                                    <button onClick={()=>{deleteProduct(item.id);
                                                    }} className="btn btn-danger">
                                                        Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default AllProducts;