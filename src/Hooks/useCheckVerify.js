import React, { useEffect, useState } from 'react'

const useCheckVerify = (id) => {
    const [verifyUser, setVerifyUser] = useState(false)
    const [verifyLoading, setVerifyLoading] = useState(false)

    useEffect(() => {
        if (id !== undefined && id !== null) {
            setVerifyLoading(true)
            const url = `https://boosterbd-server.onrender.com/api/v1/user/register/${id}`;
            fetch(url, {
                method: "GET",
                headers: {
                    'content-type': "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('check verify user single user', data)
                    setVerifyLoading(false)
                    setVerifyUser(data?.data)
                })
        }
    }, [id])


    return [verifyUser, verifyLoading]
}

export default useCheckVerify;