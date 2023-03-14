import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useActiveUser from "../Hooks/useActiveUser";
import Loader from '../components/Loader/Loader.jsx'
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

const RequireUser = () => {
    const location = useLocation();
    const [verifyUser, setVerifyUser] = useState([]);
    const [verifyLoading, setVerifyLoading] = useState(false);
    const getToken = localStorage.getItem("accessToken");
    // const getTokenDecoded = JSON.parse(getToken);

    // console.log('getToken', getToken)

    useEffect(() => {
        if (getToken !== null && getToken !== undefined) {
            const decoded = jwt_decode(getToken);
            const id = decoded.id;
            // const response = await fetch(url)
            const url = `http://localhost:5000/api/v1/user/register/${id}`;
            fetch(url, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log('RequireUser', data)
                    if (data.code === 403 || data.code === 401 || data.code === 400) {
                        return Swal.fire({
                            title: data?.status,
                            text: data?.message,
                            icon: "error",
                        });
                    } else {
                        // console.log("inside active user hooks", data);
                        setVerifyUser(data?.data);
                    }
                });
        }
    }, []);
    // [verifyUser, getToken]);

    // it is necessary for rendering the element with loader
    if (verifyLoading) {
        return <Loader />;
    }
    if (!verifyUser || !getToken) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return <Outlet />;
};

export default RequireUser;