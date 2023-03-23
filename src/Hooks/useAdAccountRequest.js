import React, { useEffect, useState } from 'react'

const useAdAccountRequest = () => {
    const [adAccounts, setAdAccounts] = useState([])
    useEffect(() => {
        const url = `https://boosterbd-server.onrender.com/api/v1/ad-account`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log('data get', data)
                if (data.code === 200) {
                    setAdAccounts(data?.data)
                }

            })
    }, [])
    return [adAccounts]
}

export default useAdAccountRequest