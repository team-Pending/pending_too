import React from "react";
import UserList from "./UserList";
import ProductList from "./ProductList";
import "./admin.css"

function Admin(props) {

    return (
        <div className="admin">
            <div className="admin__container">
                <h1>Welcome to Admin Page</h1>
                <UserList user={props.user} />
                <ProductList product={props.product} />
            </div>
        </div>
    );
}

export default Admin;