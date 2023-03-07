import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Container, Row, Col } from "reactstrap";
// import { QUERY_ADMINUSER } from "../../utils/queries";
import "./admin.css"

const QUERY_ADMINUSER = gql`
query getUser($category: ID) {
    user(category: $category) {
            _id
            firstName
            lastName
            email
            isAdmin
            }
        }
`;

const UserList = () => {

    const { loading, error, data } = useQuery(QUERY_ADMINUSER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const userList = data.user.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
    }));

    return (

        <section>
            <Container>
                <Row>
                    <Col className="lg-3">
                        <div className="user__box">
                            <h2>User List</h2>
                            {userList.map((user) => (
                                <tr key={user.id}>
                                    <td>ID: {user.id}</td>
                                    <td>First Name: {user.firstName}</td>
                                    <td>Last Name: {user.lastName}</td>
                                    <td>Email: {user.email}</td>
                                    <td>Admin: {user.Admin ? 'Yes' : 'No'}</td>
                                </tr>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default UserList;