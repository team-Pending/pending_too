import React from "react";
import AdminNav from "../../admin/AdminNav";
import { useLocation } from "react-router-dom";

const Layout = () => {

    const location = useLocation()

    return (
        <>

        {
            {location.pathname.startsWith('/dashboard') ? <AdminNav /> :<Header />} 
        }
        </>
    )
}