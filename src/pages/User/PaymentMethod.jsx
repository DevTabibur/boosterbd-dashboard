import React from 'react'

const PaymentMethod = () => {
    return (
        <>
            <div className='mt-24'>
                <div className="px-10 mt-6 lg:flex  items-center justify-between">
                    <h1 className="text-[40px]">Mobile Banking</h1>
                    <h1 className="text-[26px]">Add Another Account</h1>
                </div>
                <section className="main-right p-7 grid lg:grid-cols-2 grid-cols- grid-cols-2 gap-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
            </div>
        </>
    )
}

export default PaymentMethod;


const Card = ({ name, number, fee }) => {
    return (
        <div className="shadow-lg p-5 rounded-lg bg-[#FFF8F8]">
            <div className="flex justify-between items-center">
                <h1 className="text-[28.27px]">{name ? name : "Bkash (Marchent)"} </h1>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                </label>
            </div>
            <div className="hr my-2 bg-black"></div>

            <div className="mt-3">
                <label htmlFor="">Number</label>
                <input
                    type="text"
                    className=" border-gray-700 w-full border-2 mt-2 rounded-md px-3 py-1 mb-5"
                    defaultValue={number ? number : "01348343437"}
                />

                <label htmlFor="" className="">
                    Fee
                </label>
                <input
                    type="text"
                    className=" border-gray-700 w-full border-2 mt-2 rounded-md px-3 py-1 mb-5"
                    defaultValue={fee ? fee : "3%"}
                />
            </div>
        </div>
    );
};