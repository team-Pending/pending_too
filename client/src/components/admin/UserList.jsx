import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_GET_USER = gql`
    query {
        user {
            firstName
            lastName
            orders {
                _id
                purchaseDate
                products {
                    _id
                    name
                    description
                    price
                    quantity
                    image
                }
            }
        }
    }
`;

function UserList() {
    const { loading, error, data } = useQuery(QUERY_GET_USER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const userList = data.user.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        admin: user.admin,
    }));

    return (
        <div>
            <h2>User List</h2>
            {userList.map((user) => (
                <div key={user.id}>
                    <p>ID: {user.id}</p>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Email: {user.email}</p>
                    <p>Admin: {user.Admin ? 'Yes' : 'No'}</p>
                </div>
            ))}
        </div>
    ); 
}

export default UserList;