import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const useGetCash = () => {
    const [getCash, setGetCash] = useState([])
    useEffect(() => {
        const url = `https://boosterbd-server.onrender.com/api/v1/top-up/cash`;
        fetch(url, {
            method: "GET",
            headers: {
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log('cash top-up get', data.data)
                if (data.code === 400) {
                    Swal.fire({
                        title: data.status,
                        text: data?.error,
                        icon: "error"
                    })
                }
                else {
                    setGetCash(data?.data)
                }
            })
    }, [])
    return [getCash]
}

export default useGetCash