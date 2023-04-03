import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Container, Row, Col } from "reactstrap";
import { DELETE_USER } from "../../utils/queries";
import "./admin.css"

const QUERY_ADMIN_USER = gql`
{
    user {
            _id
            username
            firstName
            lastName
            email
            isAdmin
            }
        }
`;

function UserList() {
    const { loading, error, data } = useQuery(QUERY_ADMIN_USER);
    const [deleteUser] = useMutation(DELETE_USER);
    console.log(error);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const userList = data.user.map((user, index) => ({
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
    }));

    async function handleDelete(_id) {
        try {
          const { data } = await deleteUser({
            variables: { _id },
          });
          if (data.deleteUser.success) {
            console.log(`User with id ${_id} deleted successfully`);
          } else {
            console.error(`Failed to delete user with id ${_id}: ${data.deleteUser.message}`);
          }
        } catch (error) {
          console.error(error);
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
                                        <td className="contain">Username: <br />{user.username}</td>
                                        <td className="contain">First Name: <br />{user.firstName}</td>
                                        <td className="contain">Last Name: <br />{user.lastName}</td>
                                        <td className="contain">Email: <br />{user.email}</td>
                                        <td className="contain">Is Admin: <br />{user.isAdmin ? 'Yes' : 'No'}</td>
                                        <td className="contain"><button onClick={() => handleDelete (user.id)} type="submit">DELETE</button></td>
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

export default UserList;