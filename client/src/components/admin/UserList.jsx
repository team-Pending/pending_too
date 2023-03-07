import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Container, Row, Col } from "reactstrap";
// import { QUERY_ADMIN_USER } from "../../utils/queries";
import "./admin.css"

const QUERY_ADMIN_USER = gql`
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

function UserList() {

    const { loading, error, data } = useQuery(QUERY_ADMIN_USER);
    console.log(error);
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
                                <table>
                                <tr key={user.id} className="user__id">
                                    {/* <td>ID: {user.id}</td> */}
                                    <td className="unit">First Name: {user.firstName}</td>
                                    <td className="unit">Last Name: {user.lastName}</td>
                                    <td className="unit">Email: {user.email}</td>
                                    <td className="unit">Is Admin: {user.isAdmin ? 'Yes' : 'No'}</td>
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

export default UserList;