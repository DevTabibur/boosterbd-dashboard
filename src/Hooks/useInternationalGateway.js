import React, { useEffect, useState } from 'react'

const useInternationalGateway = () => {

    const [getInternationalGateway, setGetInternationalGateway] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/api/v1/top-up/international-payment-gateway`;
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
                    setGetInternationalGateway(data?.data)
                }
            })
    }, [])
    return [getInternationalGateway]
}

export default useInternationalGateway