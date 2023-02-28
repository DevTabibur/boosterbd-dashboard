import React, { useState } from 'react'

const Claim = () => {
    const [showBulk, setShowBulk] = useState(false);
    const [showShort, setShowShort] = useState(false);
    return (
        <div className='container mx-auto px-4 mt-24'>

            <div className="flex justify-between mt-10">
                <div className="w-[19px] h-[15px]">
                    <input type="checkbox" className="w-full h-full" />
                </div>

                <div className="md:flex items-center btn-group-lmt">
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                onClick={() => {
                                    showBulk ? setShowBulk(false) : setShowBulk(true);
                                }}
                                type="button"
                                className="text-[14.27px] border font-medium px-[20px] py-[9px] border-[#7A8489] rounded-md flex"
                            >
                                Bulk Action
                                <svg
                                    className="-mr-1 ml-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
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
                                className="text-[14.27px] border font-medium px-[20px] py-[9px] border-[#7A8489] flex rounded-md"
                            >
                                SortBy
                                <svg
                                    className="-mr-1 ml-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
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
                                        Sort By Name
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-700 block px-4 py-2 text-sm"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="menu-item-1"
                                    >
                                        Sort By Ammount
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-700 block px-4 py-2 text-sm"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="menu-item-1"
                                    >
                                        Sort By 4
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


            <table className="w-full  bg-gray-200 px-4 rounded-lg  mt-[26px]">
                <thead className="text-white px-4">
                    <tr className="text-black  sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 font-medium">
                        <th className=" text-left text-[#717D82]">
                            <div className="w-[15px] h-[15px]">
                                <input type="checkbox" className="w-full h-full" />
                            </div>
                        </th>
                        <th className="p-3 text-left text-[#717D82]">Name</th>
                        <th className="p-3 text-left text-[#717D82]">
                            Account Name
                        </th>
                        <th className="p-3 text-left text-[#717D82]">Ad Acount ID</th>
                        <th className="p-3 text-left text-[#717D82]">Claim Amount</th>
                        <th className="p-3 text-left text-[#717D82]">Return Method</th>

                        <th className="p-3 text-left text-[#717D82]">Status</th>
                    </tr>
                </thead>
                <tbody className="flex-1 sm:flex-none">
                    <TableRow />
                    <TableRow />
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}

export default Claim;


const TableRow = ({ data }) => {
    const [showReject, setShowReject] = useState(false);
    return (
        <tr className=" sm:table-row mb-2 sm:mb-0 text-[14px]">
            <td className="text-[#464F53] text-center">
                <div className="w-[15px] h-[15px]">
                    <input type="checkbox" className="w-full h-full" />
                </div>
            </td>
            <td className="text-[#464F53]   font-normal   p-3 truncate">Ibrahim</td>
            <td className="text-[#464F53]   font-normal   p-3 ">Nell Akash</td>

            <td className="text-[#464F53]   font-normal   p-3 ">343dgftg3</td>
            <td className="text-[#464F53]   font-normal   p-3 ">$5456</td>
            <td className="text-[#464F53]   font-normal   p-3 ">Balance</td>
            <td className="text-center">
                <button className="bg-[#C3BE47] font-semibold text-black text-[12px] rounded-lg p-2">
                    Pending
                </button>
            </td>
            {/* <td>
                <div className="flex ">
                    <div className="relative inline-block text-left ">
                        <div>
                            <button
                                onClick={() => {
                                    showReject ? setShowReject(false) : setShowReject(true);
                                }}
                                className="bg-[#C34747] rounded-tl-md rounded-bl-lg font-semibold text-black text-[12px]  py-2 px-3 flex"
                            >
                                Reject
                                <svg
                                    className="-mr-1 ml-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>

                        {showReject && (
                            <div
                                className="absolute z-50 right-0  mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabIndex={-1}
                            >
                                <div className="py-1" role="none">
                                    <a
                                        href="#"
                                        className="text-gray-700 block hover:bg-slate-200 px-4 py-2 text-sm"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="menu-item-0"
                                    >
                                        Amount not Meched
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-700 hover:bg-slate-200 block px-4 py-2 text-sm"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="menu-item-1"
                                    >
                                        Insufficial Balance
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-700 hover:bg-slate-200 block px-4 py-2 text-sm"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="menu-item-1"
                                    >
                                        Wrong Information
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                    <button className="bg-[#26C536] rounded-tr-md border-l rounded-br-lg font-semibold text-black text-[12px]  p-2">
                        Approve
                    </button>
                </div>
            </td> */}
        </tr>
    );
};
