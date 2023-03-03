import React from "react";
import useAuth from "../custom-hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const { currentUser } = useAuth();

    return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

// Example code to pull auth from useAuth
// import { useAuth } from './useAuth';

// function MyComponent() {
//   const authData = useAuth();

//   if (!authData) {
//     return <div>You are not logged in</div>;
//   }

//   return (
//     <div>
//       Welcome, {authData.username}!
//     </div>
//   );
// }
