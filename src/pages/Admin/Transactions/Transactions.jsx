
import { useState } from "react";
import { transactionData } from "../../../Database/transactionData";

const Transactions = () => {
    const approveOrder = (id) => {
        alert(id);
    };
    const cancelOrder = (id) => {
        alert(id);
    };
    const completedOrder = (id) => {
        alert(id);
    };
    return (
        <div className="mt-24">
            <div className="grid md:grid-cols-1 my-0 mx-4 ">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full  mt-10 font-normal">
                        <thead className="text-white">
                            <tr className="text-black flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left text-[#717D82]">Date</th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Transaction ID
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Description
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Payment Method
                                </th>
                                <th className="p-3 text-left text-[#717D82]">Remark</th>

                                <th className="p-3 text-left text-[#717D82]">Amount</th>
                                <th className="p-3 text-left text-[#717D82]">Charge</th>
                                <th className="p-3 text-left text-[#717D82]">Action</th>
                            </tr>
                        </thead>

                        {/* dynamic data for table body */}
                        {transactionData.map((data, i) => {
                            return (
                                <tbody key={i} className="">
                                    <TableRow
                                        data={data}
                                        approveOrder={approveOrder}
                                        cancelOrder={cancelOrder}
                                        completedOrder={completedOrder}
                                    />
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Transactions;

const TableRow = ({ data, approveOrder, cancelOrder, completedOrder }) => {
    const {
        orderTime,
        transactionID,
        description,
        paymentMethod,
        remark,
        amount,
        charge,
    } = data;
    return (
        <>
            <tr className="flex md:flex-row flex-no-wrap sm:table-row mb-2 sm:mb-0">
                <td className="text-[#464F53] font-normal  p-3">{orderTime}</td>
                <td className="text-[#464F53] font-normal   p-3 truncate">
                    {transactionID}
                </td>
                <td className=" text-[#464F53] font-normal  p-3 ">{description}</td>
                <td className=" text-[#464F53] font-normal  p-3 ">{paymentMethod}</td>
                <td className="   p-3 text-green-500 font-bold">
                    <button className="bg-black px-2 py-1 rounded-md text-[12px] text-white">
                        {remark}
                    </button>
                </td>
                <td className=" p-3 text-[#FF6A6A]">{amount}</td>
                <td className="text-[#464F53] font-normal p-3 ">{charge}</td>

                <td className="   p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer flex items-center">
                    <button
                        onClick={() => approveOrder(transactionID)}
                        className="bg-[#7A8489] px-2 py-1 rounded-md text-[12px] text-white"
                    >
                        Approve
                    </button>
                    <button
                        onClick={() => cancelOrder(transactionID)}
                        className="bg-[#C34747] mx-2 px-2 py-1 rounded-md text-[12px] text-white"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => completedOrder(transactionID)}
                        className="bg-[#47C363] px-2 py-1 rounded-md text-[12px] text-white"
                    >
                        Completed
                    </button>
                </td>
            </tr>
        </>
    );
};
