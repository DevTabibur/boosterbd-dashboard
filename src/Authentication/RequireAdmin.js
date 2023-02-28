import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useActiveUser from "../Hooks/useActiveUser";


const RequireAdmin = () => {
    const location = useLocation();
    const [activeUser, isLoading] = useActiveUser();
    const [admin, adminLoading] = useAdmin(activeUser);

    // do not delete adminLoading, then it'll return admin falsy value
    if (adminLoading) {
        return <Loader />;
    }

    if (!activeUser || !admin) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default RequireAdmin;