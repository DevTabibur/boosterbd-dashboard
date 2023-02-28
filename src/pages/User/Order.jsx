import React from 'react'

const Order = () => {
    return (
        <>
            <section className="mt-24">
                <div className='overflow-x-auto'>
                    <table className="w-full  p-6 rounded-lg mt-10 font-normal">
                        <thead className="text-white w-full">
                            <tr className="text-black w-full flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 h-[59.99px]">
                                <th className="p-3 h-full border-2 text-left text-[#717D82] ">
                                    <input type="checkbox" className=" w-full" />
                                </th>
                                <th className=" border-2 p-3 text-left text-[#717D82]">
                                    User
                                </th>
                                <th className="p-3  text-center border-2 text-[#717D82]">
                                    Order ID
                                </th>
                                <th className="p-3 text-center  border-2 text-[#717D82]">
                                    Service/Price
                                </th>
                                <th className="p-3 text-center border-2 text-[#717D82]">
                                    Link/QTY
                                </th>
                                <th className="p-3 text-center  border-2 text-[#717D82]">
                                    Counter / Api Response
                                </th>
                                <th className="p-3 text-center  border-2 text-[#717D82]">
                                    Status
                                </th>
                                <th className="p-3 text-center  border-2 text-[#717D82]">
                                    Order at
                                </th>
                                <th className="p-3 text-center  border-2 text-[#717D82]">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="flex-1 sm:flex-none">
                            <tr className="flex md:flex-row flex-no wrap sm:table-row mb-2 sm:mb-0">
                                <TableRow />
                            </tr>


                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Order;

const TableRow = ({ data }) => {
    return (

        <>
            <td className="text-[#464F53]  border-2 font-normal  p-3">
                <input type="checkbox" className="p-2 w-full" />
            </td>
            <td className="text-[#464F53]  border-2 font-normal  p-3">user</td>
            <td className="text-[#464F53] text-center  border-2 font-normal  p-3">
                45453
            </td>
            <td className="text-[#464F53]  border-2 font-normal p-3">
                <div className="flex flex-col items-center py-1">
                    <h5>Facebook Page Likes (23k)</h5>
                    <div className="hr my-3"></div>
                    <p className="text-[#465EED]">Price : 0.21 USD</p>
                </div>
            </td>
            <td className="text-[#464F53]  border-2 font-normal p-3">
                <div className="flex flex-col items-center py-1">
                    <h5>
                        <a className="text-[#465EED]" href="/">
                            https://examplewebsite.com
                        </a>
                    </h5>
                    <div className="hr my-3"></div>
                    <p>Quantity: 100</p>
                </div>
            </td>
            <td className="text-[#464F53]  border-2 font-normal p-3">
                <div className="flex flex-col items-center py-1">
                    <h5 className="text-[#47C363]">Start Counter: 0</h5>
                    <h5 className="text-[#C34747]">Remainings: 5</h5>
                    <div className="hr my-3"></div>
                    <p className="text-[#465EED]">Quantity less then minimal 100</p>
                </div>
            </td>
            <td className="border-2 px-5 text-center">
                <button className="bg-[#3ABAF4] px-6 py-1 rounded-md text-[12px] text-white">
                    Buy
                </button>
            </td>
            <td className="border-2"></td>
            <td className="border-2"></td>
        </>
    );
};