import React from "react";
import { useQuery, gql } from "@apollo/client";
// import { QUERY_USER } from "../../utils/queries";
// import AdminNav from "./AdminNav";
// import Routers from "../routers/Routers";


import { Container, Row, Col } from "reactstrap";

// Laura adding query hook to fetch user data
function Admin() {
const GET_USER = gql`
    query GetUser {
        user {
            _id
            firstName
            lastName
            email
            isAmin
        }
    }
`;

const GET_PRODUCT = gql`
    query GetProduct {
        products {
            id
            name
            category
            price
            thumbsUp
            thumbsDown
        }
    }
`


    const { loading: userLoading, data: userData, error: userError } = useQuery(GET_USER);
    const { loading: productLoading, data: productData, error: productError } = useQuery(GET_PRODUCT);

    if (userLoading || productLoading) {
        return <p>Loading...</p>
    }
    if (userError || productError) {
        return <p>Error</p>
    }

    return (
        <div>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.user.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1>Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>ThumbsUp</th>
                        <th>ThumbsDown</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.product.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.thumbsUp}</td>
                            <td>{product.thumbsDown}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;