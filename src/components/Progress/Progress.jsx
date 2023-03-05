import React from 'react'

const Progress = ({ progress }) => {
    return (
        <>
            <div class="w-full bg-neutral-800 ">
                <div
                    class="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                    style={{ width: `${progress}` }}>
                    {progress}
                </div>
            </div>
        </>
    )
}

export default Progress