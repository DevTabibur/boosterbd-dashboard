import React, { useState } from 'react'

const useCheckVerify = () => {
    const [verifyUser, setVerifyUser] = useState(false)
    const [verifyLoading, setVerifyLoading] = useState(false)
    return (
        <div>useCheckVerify</div>
    )
}

export default useCheckVerify