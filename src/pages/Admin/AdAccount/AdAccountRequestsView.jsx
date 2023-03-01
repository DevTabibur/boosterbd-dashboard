

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdAccountRequestsView = () => {
    const [accounts, setAccounts] = useState([])
    // console.log('accounts', accounts)

    useEffect(() => {
        const url = `http://localhost:5000/api/v1/ad-account`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log('data get', data?.data)
                setAccounts(data?.data)
            })
    }, [])

    return (
        <div className="mt-24">
            <div className="grid md:grid-cols-1 my-0 mx-4">
                <div className="md:flex block  items-center justify-between pr-10 mt-5">
                    <Link
                        to="/create-ad-account"
                        className="bg-[#DBDEE4] md:text-[16px] text-[12px] font-bold border border-[#7A8489] rounded-xl px-[20px] py-[12px]"
                    >
                        Create Ad Account
                    </Link>

                    <div className="dropdown relative">
                        <button
                            id="dropdownMenuButton2"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            className="bg-[#DBDEE4] flex items-center border border-[#7A8489] md:text-[16px] text-[12px] mt-3 md:mt-0 font-bold rounded-xl px-[20px] py-[12px]"
                        >
                            All Ad Account
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 ml-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </button>
                        <ul
                            className="dropdown-menu w-full absolute  bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0
  "
                            aria-labelledby="dropdownMenuButton2"
                        >
                            <li className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-700  hover:bg-[#8FD59E] ">
                                Pending
                            </li>
                            <li className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-[#8FD59E]">
                                Rejected
                            </li>
                            <li className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-[#8FD59E]">
                                Need Review
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table-auto w-full  mt-10 ">
                        <thead className="text-white">
                            <tr className="text-black flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left text-[#717D82]">Date</th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Add Account Name
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Add Account Number
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Page Name
                                </th>
                                <th className="p-3 text-left text-[#717D82]">Page ID</th>

                                <th className="p-3 text-left text-[#717D82]">Action</th>
                            </tr>
                        </thead>

                        {accounts.map((ad, i) => {
                            return (
                                <tbody key={i}>
                                    <TableRow ad={ad} />
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
};


export default AdAccountRequestsView;

const TableRow = ({ ad }) => {
    const { createdAt, addAccountName, addAccountNumber, pageName, pageID, country } =
        ad;
    return (
        <>
            <tr className="flex md:flex-row flex-no wrap sm:table-row mb-2 sm:mb-0 text-[14px]">
                <td className="text-[#464F53] p-3">{createdAt.slice(0, 10)}</td>
                <td className="text-[#464F53] p-3 truncate">{addAccountName}</td>
                <td className="text-[#464F53] p-3 ">{addAccountNumber}</td>
                <td className="text-[#464F53] p-3 ">{pageName}</td>
                <td className="text-[#464F53] p-3 ">{pageID}</td>
                <td className="   p-3  cursor-pointer">
                    <button className="font-semibold bg-[#26C536] px-4 py-2 sm:my-1 rounded-md text-[12px] text-white">
                        Active
                    </button>
                    <button className="font-semibold bg-[#FC544B] mx-2 px-4 py-2 sm:my-1 rounded-md text-[12px] text-white">
                        Rejected
                    </button>
                    <button className="font-semibold bg-[#8756EF] px-4 py-2 sm:my-1 rounded-md text-[12px] text-white">
                        Pending
                    </button>
                </td>
            </tr>
        </>
    );
};
