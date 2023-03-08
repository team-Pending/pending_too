import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Container, Row, Col } from "reactstrap";
// import { QUERY_ADMIN_USER } from "../../utils/queries";
import { DELETE_USER } from "../../utils/queries";
import "./admin.css"

const QUERY_ADMIN_USER = gql`
{
    user {
            _id
            userName
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

    const userList = data.user.map((user, index) => ({
        id: user.id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
    }));

    async function deleteUser(userId) {
        try {
            const { data } = await client.mutate({
                mutation: DELETE_USER,
                variables: { userId },
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
                        <div className="user__box">
                            <h2>User List</h2>
                            {userList.map((user, index) => (
                                <table key={index}>
                                    <tbody>
                                    <tr className="user__id">
                                        <td className="contain">ID: <br />{user.id}</td>
                                        <td className="contain">Username: <br />{user.userName}</td>
                                        <td className="contain">First Name: <br />{user.firstName}</td>
                                        <td className="contain">Last Name: <br />{user.lastName}</td>
                                        <td className="contain">Email: <br />{user.email}</td>
                                        <td className="contain">Is Admin: <br />{user.isAdmin ? 'Yes' : 'No'}</td>
                                        <td className="contain"><button onClick={deleteUser} type="submit">DELETE</button></td>
                                    </tr>
                                    </tbody>
                                </table>
                            ))}
                            {/* <button type="submit">DELETE</button> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default UserList;