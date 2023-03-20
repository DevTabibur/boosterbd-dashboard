import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import useActiveUser from "../Hooks/useActiveUser";
import useAdmin from "../Hooks/useAdmin";


const RequireAdmin = () => {
    const location = useLocation();
    const [activeUser, isLoading] = useActiveUser();
    const [admin, adminLoading] = useAdmin(activeUser);
    // console.log('requireAdmin', activeUser, admin)


    // do not delete adminLoading, then it'll return admin falsy value
    if (adminLoading) {
        return <Loader />;
    }

    if (!activeUser || !admin) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <Outlet />;

};

export default RequireAdmin;