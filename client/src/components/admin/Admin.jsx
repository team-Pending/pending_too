import React from "react";
import UserList from "./UserList";
import ProductList from "./ProductList";

function Admin(props) {
   
    return (
        <div>
            <h1>Welcome to Admin Page</h1>
            <UserList user={props.user} />
            <ProductList products={props.products} />
        </div>
    );
}

export default Admin;