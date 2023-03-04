import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../components/Cart/index";

// Need to import Home, Shop, ProductDetails, Cart, Checkout
import Home from "../components/Home";
import Shop from "../components/ShopCard/ShopCard";
// import Cart from "../components/Cart";
import ProductDetails from "../components/ProductItem";
// import Checkout from "";
// import Login from "";
// import Signup from "";
import ProtectedRoute from "./ProtectedRoute";

import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Admin from "../admin/Admin";
import Users from "../admin/Users";

const Routers = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="users" />} /> */}
            {/* <Route path="users" element={<Users />} /> */}
            {/* <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<ProductDetails />} /> */}
            {/* <Route path="cart" element={<Cart />} /> */}

            <Route path="/*" element={<ProtectedRoute />}>
                {/* <Route path="checkout" element={<Checkout />} /> */}
                <Route path="admin" element={<Admin />} />
                <Route path="admin/all-products" element={<AllProducts />} />
                <Route path="admin/add-products" element={<AddProducts />} />
                <Route path="admin/users" element={<Users />} />
            </Route> 

            {/* <Route path="login" element={<Login />} /> */}
            {/* <Route path="signup" element={<Signup />} /> */}
        </Routes>
    )
}
export default Routers;