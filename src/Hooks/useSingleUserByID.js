import React, { useEffect, useMemo, useState } from "react";

const useSingleUserByID = (id) => {
  const [singleUser, setSingleUser] = useState([]);
  const store = useMemo(() => {
    if (id !== undefined) {
      const url = `https://boosterbd-server.onrender.com/api/v1/user/register/${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // console.log("single user is founded", data);
          setSingleUser(data?.data);
        });
    }
  }, [id]);
  return [singleUser];
};

export default useSingleUserByID;
