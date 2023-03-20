import React, { useEffect, useState } from 'react'

const useGetInternetBanking = () => {
    const [getInternetBanking, setGetInternetBanking] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/api/v1/top-up/internet-banking`;
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
                    setGetInternetBanking(data?.data)
                }
            })
    }, [])
    return [getInternetBanking]
}

export default useGetInternetBanking