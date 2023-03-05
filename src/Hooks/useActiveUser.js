import React, { useEffect, useState, useMemo } from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
// import Loader from "@/Components/Shared/Loader/Loader";
import Swal from "sweetalert2";

const useActiveUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getToken = localStorage.getItem("accessToken");
    // console.log('getToken', getToken)
    // const getTokenDecoded = JSON.parse(getToken);
    // console.log('getTokenDecoded', getTokenDecoded)
    setIsLoading(true);
    if (getToken !== null && getToken !== undefined) {
      const decoded = jwt_decode(getToken);
      const id = decoded.id;
      // console.log('id', id)

      if (id !== undefined) {
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
            setIsLoading(false);
            if (data.code === 403 || data.code === 401 || data.code === 400) {
              return Swal.fire({
                title: data?.status,
                text: data?.message,
                icon: "error",
              });
            } else {
              setActiveUser(data?.data);
            }
          });
      }
    }
  }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return [activeUser, isLoading];
};

export default useActiveUser;
