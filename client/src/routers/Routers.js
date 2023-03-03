import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../components/Cart/index";

// Need to import Home, Shop, ProductDetails, Cart, Checkout
// import Home from "";
// import Shop from "";
// import ProductDetails from "";
// import Checkout from "";
// import Login from "";
// import Signup from "";
// import ProtectedRoute from "",

import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />

            <Route path="/*" element={<ProtectedRoute />}>
                <Route path="checkout" element={<Checkout />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="dashboard/all-products" element={<AllProducts />} />
                <Route path="dashboard/add-product" element={<AddProducts />} />
                <Route path="dashboard/users" element={<Users />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
        </Routes>
    )
}
export default UNSAFE_DataRouterStateContext;