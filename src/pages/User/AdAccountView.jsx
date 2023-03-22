import React, { useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import useActiveUser from '../../Hooks/useActiveUser';
import useAdAccountRequest from '../../Hooks/useAdAccountRequest';

const AdAccountView = () => {
    const [adAccounts] = useAdAccountRequest()
    const { currentColor } = useStateContext()
    const [activeUser, isLoading] = useActiveUser()
    const [showBulk, setShowBulk] = useState(false);
    const [showShort, setShowShort] = useState(false);

    const filteredAccountRequest = adAccounts.filter(obj => obj.phoneNumber === activeUser?.phoneNumber)
    // console.log('filteredAccountRequest', filteredAccountRequest)

    return (
        <div className='container mx-auto px-4 mt-24'>

            <div className="flex justify-between mt-10">
                <h2 style={{ color: currentColor }} className="text-2xl font-semibold">Ad Account Request Status</h2>

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


            <div className='overflow-x-auto'>
                <table className="w-full  bg-gray-200 px-4 rounded-lg  mt-[26px]">
                    <thead className="text-white px-4">
                        <tr className="text-black  sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 font-medium">

                            <th className="p-3 text-left text-[#717D82]">SL</th>
                            <th className="p-3 text-left text-[#717D82]">
                                Ad Account Name
                            </th>
                            <th className="p-3 text-left text-[#717D82]">
                                Ad Account Number
                            </th>
                            <th className="p-3 text-left text-[#717D82]">Number</th>
                            <th className="p-3 text-left text-[#717D82]">Page Link</th>
                            <th className="p-3 text-left text-[#717D82]">Page ID</th>
                            <th className="p-3 text-left text-[#717D82]">Company Website</th>

                            <th className="p-3 text-left text-[#717D82]">Initial Deposit</th>
                            <th className="p-3 text-left text-[#717D82]">Status</th>
                        </tr>
                    </thead>
                    <tbody className="flex-1 sm:flex-none">
                        {filteredAccountRequest.map((data, i) => (
                            <tr key={i} className=" sm:table-row mb-2 sm:mb-0 text-[14px]">

                                <td className="text-[#464F53]   font-normal   p-3 truncate">{i + 1}</td>
                                {data?.addAccountName ? <td className="text-[#464F53]   font-normal   p-3 ">{data?.addAccountName}</td> : <td className="text-[#464F53]   font-normal   p-3 ">Admin will Update it</td>}
                                {data?.addAccountNumber ? <td className="text-[#464F53]   font-normal   p-3 ">{data?.addAccountNumber}</td> : <td className="text-[#464F53]   font-normal   p-3 ">Admin will Update it</td>}
                                <td className="text-[#464F53]   font-normal   p-3 ">{data?.phoneNumber}</td>
                                <td className="text-[#464F53]   font-normal   p-3 ">{data?.pageLink}</td>
                                <td className="text-[#464F53]   font-normal   p-3 ">{data?.pageID}</td>
                                <td className="text-[#464F53]   font-normal   p-3 ">{data?.companyWebsite}</td>
                                <td className="text-[#464F53]   font-normal   p-3 ">Initial Deposit</td>
                                <td className="text-center">
                                    {data?.status}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdAccountView;
