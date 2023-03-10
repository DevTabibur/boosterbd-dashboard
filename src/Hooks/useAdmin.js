import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const navigate = useNavigate();
    // console.log('user', user._id)

    useEffect(() => {
        const id = user?._id;
        if (id !==undefined) {
            const url = `http://localhost:5000/api/v1/user/register/admin/${id}`;
            fetch(url, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log("check admin hooks inside", data.data.role);
                    if (data.data?.role === "admin") {
                        setAdmin(true);
                        setAdminLoading(false);
                    } else {
                        setAdmin(false);
                    }
                });
        }
    }, [user, navigate]);
    return [admin, adminLoading];
};

export default useAdmin;