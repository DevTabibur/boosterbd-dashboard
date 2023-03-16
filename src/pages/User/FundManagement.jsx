import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import useActiveUser from '../../Hooks/useActiveUser';
import useGetCash from '../../Hooks/useGetCash';
import { useStateContext } from '../../contexts/ContextProvider';
import useGetInternetBanking from '../../Hooks/useGetInternetBanking';
import useGetMobileBanking from '../../Hooks/useGetMobileBanking';
import useInternationalGateway from '../../Hooks/useInternationalGateway';

const FundManagement = () => {
    const [activeUser, isLoading] = useActiveUser()
    const { currentColor } = useStateContext()
    const [getCash] = useGetCash();
    const [getInternetBanking] = useGetInternetBanking();
    const [getMobileBanking] = useGetMobileBanking();
    const [getInternationalGateway] = useInternationalGateway();


    const [showBulk, setShowBulk] = useState(false);
    const [showShort, setShowShort] = useState(false);


    // const [cash, setCash] = useState(false);
    // const [mobileBanking, setMobileBanking] = useState(false);
    // const [internetBanking, setInternetBanking] = useState(false);
    // const [internationalGateway, setInternationalGateway] = useState(false);
    // const [selectedMethod, setSelectedMethod] = useState("");


    // cash filtered with phone number
    const CashData = getCash.filter(obj => obj.phoneNumber === activeUser?.phoneNumber);

    // console.log('getInternetBanking', getInternetBanking)
    console.log('getMobileBanking', getMobileBanking)
    // console.log('getInternationalGateway', getInternationalGateway)

    // const handleCheckboxChange = (event) => {
    //     setSelectedMethod(event.target.value);
    //     if (event.target.value === "Cash") {
    //         setMobileBanking(false)
    //         setInternationalGateway(false)
    //         setInternetBanking(false)
    //         setCash(true)

    //         const url = `http://localhost:5000/api/v1/top-up/cash`;
    //         fetch(url, {
    //             method: "GET",
    //             headers: {
    //                 'content-type': "application/json"
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 // console.log('cash top-up get', data.data)
    //                 if (data.code === 400) {
    //                     Swal.fire({
    //                         title: data.status,
    //                         text: data?.error,
    //                         icon: "error"
    //                     })
    //                 }
    //                 else {
    //                     setCash(data?.data)
    //                 }
    //             })
    //     }
    //     else if (event.target.value === "Mobile Banking") {
    //         setCash(false)
    //         setMobileBanking(false)
    //         setInternationalGateway(false)
    //         setInternetBanking(false)
    //         setMobileBanking(true)

    //         // const url = `http://localhost:5000/api/v1/top-up/mobile-banking`;
    //         // fetch(url, {
    //         //     method: "GET",
    //         //     headers: {
    //         //         'content-type': "application/json"
    //         //     }
    //         // })
    //         //     .then(res => res.json())
    //         //     .then(data => {
    //         //         console.log('cash top-up get', data.data)
    //         //         if (data.code === 400) {
    //         //             Swal.fire({
    //         //                 title: data.status,
    //         //                 text: data?.error,
    //         //                 icon: "error"
    //         //             })
    //         //         }
    //         //         else {
    //         //             setMobileBanking(data?.data)
    //         //         }
    //         //     })


    //     }
    //     else if (event.target.value === "Internet Banking") {
    //         setCash(false)
    //         setMobileBanking(false)
    //         setInternationalGateway(false)
    //         setMobileBanking(false)
    //         setInternetBanking(true)

    //         // const url = `http://localhost:5000/api/v1/top-up/internet-banking`;
    //         // fetch(url, {
    //         //     method: "GET",
    //         //     headers: {
    //         //         'content-type': "application/json"
    //         //     }
    //         // })
    //         //     .then(res => res.json())
    //         //     .then(data => {
    //         //         console.log('cash top-up get', data.data)
    //         //         if (data.code === 400) {
    //         //             Swal.fire({
    //         //                 title: data.status,
    //         //                 text: data?.error,
    //         //                 icon: "error"
    //         //             })
    //         //         }
    //         //         else {
    //         //             setInternetBanking(data?.data)
    //         //         }
    //         //     })

    //     }
    //     else if (event.target.value === "International Payment Gateway") {
    //         setCash(false)
    //         setMobileBanking(false)
    //         setMobileBanking(false)
    //         setInternetBanking(false)
    //         setInternationalGateway(true)


    //         // const url = `http://localhost:5000/api/v1/top-up/international-payment-gateway`;
    //         // fetch(url, {
    //         //     method: "GET",
    //         //     headers: {
    //         //         'content-type': "application/json"
    //         //     }
    //         // })
    //         //     .then(res => res.json())
    //         //     .then(data => {
    //         //         console.log('cash top-up get', data.data)
    //         //         if (data.code === 400) {
    //         //             Swal.fire({
    //         //                 title: data.status,
    //         //                 text: data?.error,
    //         //                 icon: "error"
    //         //             })
    //         //         }
    //         //         else {
    //         //             setInternationalGateway(data?.data)
    //         //         }
    //         //     })

    //     }
    //     // console.log("Selected payment method:", event.target.value);

    // };



    return (
        <div className='mt-24'>

            <div className="flex justify-between mt-10">
                <h2 className="text-center text-2xl font-semibold ml-6">Fund Management</h2>

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



            {/* <div className="md:flex gap-24 mt-6 mx-20 bg-zinc-200 rounded shadow-lg p-6">
                <h2 className="text-base font-semibold">Payment Method</h2>
                <div>
                    <div>
                        <input
                            className="mr-2"
                            type="radio"
                            name="paymentMethod"
                            id="Cash"
                            defaultValue="Cash"
                            checked={selectedMethod === "Cash"}
                            onChange={handleCheckboxChange}
                        />
                        <label className="text-base font-semibold" htmlFor="Cash">
                            Cash ( {CashData.length} )
                        </label>
                    </div>
                    <div>
                        <input
                            className="mr-2"
                            type="radio"
                            name="paymentMethod"
                            id="MobileBanking"
                            defaultValue="Mobile Banking"
                            checked={selectedMethod === "Mobile Banking"}
                            onChange={handleCheckboxChange}
                        />
                        <label className="text-base font-semibold" htmlFor="MobileBanking">
                            Mobile Banking
                        </label>
                    </div>
                    <div>
                        <input
                            className="mr-2"
                            type="radio"
                            name="paymentMethod"
                            id="InternetBanking"
                            defaultValue="Internet Banking"
                            checked={selectedMethod === "Internet Banking"}
                            onChange={handleCheckboxChange}
                        />
                        <label className="text-base font-semibold" htmlFor="InternetBanking">
                            Internet Banking
                        </label>
                    </div>
                    <div>
                        <input
                            className="mr-2"
                            type="radio"
                            name="paymentMethod"
                            id="International"
                            defaultValue="International Payment Gateway"
                            checked={selectedMethod === "International Payment Gateway"}
                            onChange={handleCheckboxChange}
                        />
                        <label className="text-base font-semibold" htmlFor="International">
                            International Payment Gateway
                        </label>
                    </div>
                </div>
            </div> */}

            {/* cash */}

            {CashData.length >= 0 &&
                <div className="grid md:grid-cols-1 my-0 mx-4 ">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full  mt-10 font-normal">
                            <thead className="text-white">
                                <tr className="text-black flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="p-3 text-left text-[#717D82]">SL.</th>
                                    <th className="p-3 text-left text-[#717D82]">Date</th>
                                    <th className="p-3 text-left text-[#717D82]">Payment Proof</th>
                                    <th className="p-3 text-left text-[#717D82]">Paid To</th>

                                    <th className="p-3 text-left text-[#717D82]">
                                        Payment For
                                    </th>
                                    <th className="p-3 text-left text-[#717D82]">
                                        Amount
                                    </th>
                                    <th className="p-3 text-left text-[#717D82]">Status</th>
                                </tr>
                            </thead>


                            {CashData.map((data, i) => {
                                return (<tbody key={i}>
                                    <tr className="flex md:flex-row flex-no wrap sm:table-row mb-2 sm:mb-0 text-[14px]">

                                        <td className="text-[#464F53]      p-3 truncate">{i + 1}</td>
                                        <td className="text-[#464F53]      p-3 ">{data?.createdAt}</td>
                                        {data?.cashProof ? <td className="text-[#464F53] p-3 ">
                                            <img className='h-10 w-10 relative' src={`http://localhost:5000/${data?.cashProof}`} alt="imag" />
                                        </td> : <td className="text-[#464F53] p-3 "><img className='h-10 w-10 relative' src='https://avatars.dicebear.com/api/bottts/stefan.svg' alt='custom_avatar' /></td>}

                                        <td className="text-[#464F53]      p-3 ">
                                            {data?.paidTo}
                                        </td>
                                        <td className="text-[#464F53]      p-3 ">
                                            {data?.paymentFor}
                                        </td>
                                        <td className="text-[#464F53]      p-3 ">
                                            {data?.amountToAdd}
                                        </td>

                                        <td >
                                            {data?.status}
                                        </td>

                                    </tr>
                                </tbody>)
                            })}
                        </table>
                    </div>
                </div>
            }


        </div>
    )
}

export default FundManagement;

