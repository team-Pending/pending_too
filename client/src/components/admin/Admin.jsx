import React from "react";
import UserList from "./UserList";
import ProductList from "./ProductList";

function Admin(props) {

    return (
        <div className="admin">
            <div className="admin__container">
                <h1>Welcome to Admin Page</h1>
                <UserList user={props.user} />
                <ProductList products={props.products} />>
            </div>
        </div>
    );
}

export default Admin;