import React, { useState } from 'react'
import { limitUpdateDB } from '../../Database/limitUpdateDB';

const LimitUpdate = () => {
    const [showBulk, setShowBulk] = useState(false);
    const [showShort, setShowShort] = useState(false);
    return (
        <>
            <div className="grid md:grid-cols-1 my-0 mx-10">
                <div className="flex justify-between mt-10">
                    <div className="w-[19px] h-[15px]">
                        <input type="checkbox" className="w-full h-full" />
                    </div>

                    <div className="md:flex block items-center btn-group-lmt">
                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    onClick={() => {
                                        showBulk ? setShowBulk(false) : setShowBulk(true);
                                    }}
                                    type="button"
                                    className="text-[14.27px] border font-medium px-[20px] py-[9px] border-[#7A8489] rounded-md"
                                >
                                    Bulk Action
                                </button>
                            </div>

                            {showBulk && (
                                <div
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex={-1}
                                >
                                    <div className="py-1" role="none">
                                        <a
                                            href="#"
                                            className="text-gray-700 block px-4 py-2 text-sm"
                                            role="menuitem"
                                            tabIndex={-1}
                                            id="menu-item-0"
                                        >
                                            Deleted
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-700 block px-4 py-2 text-sm"
                                            role="menuitem"
                                            tabIndex={-1}
                                            id="menu-item-1"
                                        >
                                            Hold
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-700 block px-4 py-2 text-sm"
                                            role="menuitem"
                                            tabIndex={-1}
                                            id="menu-item-1"
                                        >
                                            Approve
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <button className="text-[14.27px] border font-medium px-[20px] py-[9px] border-[#7A8489] rounded-md">
                            All Ad Accounts
                        </button>

                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    onClick={() => {
                                        showShort ? setShowShort(false) : setShowShort(true);
                                    }}
                                    type="button"
                                    className="text-[14.27px] border font-medium px-[20px] py-[9px] border-[#7A8489] rounded-md"
                                >
                                    SortBy
                                </button>
                            </div>

                            {showShort && (
                                <div
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex={-1}
                                >
                                    <div className="py-1" role="none">
                                        <a
                                            href="#"
                                            className="text-gray-700 block px-4 py-2 text-sm"
                                            role="menuitem"
                                            tabIndex={-1}
                                            id="menu-item-0"
                                        >
                                            Balance
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-700 block px-4 py-2 text-sm"
                                            role="menuitem"
                                            tabIndex={-1}
                                            id="menu-item-1"
                                        >
                                            Status
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-700 block px-4 py-2 text-sm"
                                            role="menuitem"
                                            tabIndex={-1}
                                            id="menu-item-1"
                                        >
                                            Payment Method
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button className="text-[14.27px] border font-medium px-[20px] py-[9px] border-[#7A8489] rounded-md">
                            Type & Enter
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full  mt-10 font-normal">
                        <thead className="text-white">
                            <tr className="text-black flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 font-medium">
                                <th className=" text-left text-[#717D82]">
                                    <div className="w-[15px] h-[15px]">
                                        <input type="checkbox" className="w-full h-full" />
                                    </div>
                                </th>
                                <th className="p-3 text-left text-[#717D82]">Name</th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Ad Account Name
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Current Amount
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Pending Amount
                                </th>

                                <th className="p-3 text-left text-[#717D82]">
                                    Payment Amount
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Payment Method
                                </th>
                                <th className="p-3 text-left text-[#717D82]">Status</th>

                                <th className="p-3 text-left text-[#717D82]">Action</th>
                            </tr>
                        </thead>
                        {/* dynamic table data */}
                        {limitUpdateDB.map((limit, i) => {
                            return (
                                <tbody key={i}>
                                    <TableRow limit={limit} />
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </div>
        </>
    )
}

export default LimitUpdate;


const TableRow = ({ limit }) => {
    const {
        name,
        adAccountName,
        currentAmount,
        pendingAmount,
        paymentMethod,
        status,
    } = limit;
    return (
        <>
            <tr className="flex md:flex-row flex-no wrap sm:table-row mb-2 sm:mb-0 text-[14px]">
                <td className="text-[#464F53] text-center">
                    <div className="w-[15px] h-[15px]">
                        <input type="checkbox" className="w-full h-full" />
                    </div>
                </td>

                <td className="text-[#464F53]   font-normal   p-3 truncate">{name}</td>
                <td className="text-[#464F53]   font-normal   p-3 ">{adAccountName}</td>
                <td className="text-[#464F53]   font-normal   p-3 ">
                    ${currentAmount}
                </td>
                <td className="text-[#464F53]   font-normal   p-3 ">
                    ${pendingAmount}
                </td>
                <td className="text-[#464F53]   font-normal   p-3 ">
                    ${pendingAmount}
                </td>
                <td className="text-[#464F53]   font-normal   p-3 ">{paymentMethod}</td>
                <td className="text-center">
                    <button className="bg-[#C3BE47] font-semibold text-black text-[12px] rounded-lg p-2">
                        Pending
                    </button>
                </td>
                <td>
                    <div className="flex  overflow-hidden">
                        <button className="bg-[#C34747] rounded-tl-md rounded-bl-lg font-semibold text-black text-[12px]  py-2 px-3">
                            Hold
                        </button>
                        <button className="bg-[#26C536] rounded-tr-md border-l rounded-br-lg font-semibold text-black text-[12px]  p-2">
                            Approve
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};