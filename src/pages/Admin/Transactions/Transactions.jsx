
import { useState } from "react";
import Swal from "sweetalert2";
import { transactionData } from "../../../Database/transactionData";

const Transactions = () => {
    const [cash, setCash] = useState(false);
    const [mobileBanking, setMobileBanking] = useState(false);
    const [internetBanking, setInternetBanking] = useState(false);
    const [internationalGateway, setInternationalGateway] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState('')
    const approveOrder = (id) => {
        alert(id);
    };
    const cancelOrder = (id) => {
        alert(id);
    };
    const completedOrder = (id) => {
        alert(id);
    };



    const handleCheckboxChange = (event) => {
        setSelectedMethod(event.target.value);
        if (event.target.value === "Cash") {
            setMobileBanking(false)
            setInternationalGateway(false)
            setInternetBanking(false)
            setCash(true)

            const url = `http://localhost:5000/api/v1/top-up/cash`;
            fetch(url, {
                method: "GET",
                headers: {
                    'content-type': "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('cash top-up get', data.data)
                    if (data.code === 400) {
                        Swal.fire({
                            title: data.status,
                            text: data?.error,
                            icon: "error"
                        })
                    }
                    else {
                        setCash(data?.data)
                    }
                })
        }
        else if (event.target.value === "Mobile Banking") {
            setCash(false)
            setMobileBanking(false)
            setInternationalGateway(false)
            setInternetBanking(false)
            setMobileBanking(true)

            const url = `http://localhost:5000/api/v1/top-up/mobile-banking`;
            fetch(url, {
                method: "GET",
                headers: {
                    'content-type': "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log('cash top-up get', data.data)
                    if (data.code === 400) {
                        Swal.fire({
                            title: data.status,
                            text: data?.error,
                            icon: "error"
                        })
                    }
                    else {
                        setMobileBanking(data?.data)
                    }
                })


        }
        else if (event.target.value === "Internet Banking") {
            setCash(false)
            setMobileBanking(false)
            setInternationalGateway(false)
            setMobileBanking(false)
            setInternetBanking(true)

            const url = `http://localhost:5000/api/v1/top-up/internet-banking`;
            fetch(url, {
                method: "GET",
                headers: {
                    'content-type': "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log('cash top-up get', data.data)
                    if (data.code === 400) {
                        Swal.fire({
                            title: data.status,
                            text: data?.error,
                            icon: "error"
                        })
                    }
                    else {
                        setInternetBanking(data?.data)
                    }
                })

        }
        else if (event.target.value === "International Payment Gateway") {
            setCash(false)
            setMobileBanking(false)
            setMobileBanking(false)
            setInternetBanking(false)
            setInternationalGateway(true)


            const url = `http://localhost:5000/api/v1/top-up/international-payment-gateway`;
            fetch(url, {
                method: "GET",
                headers: {
                    'content-type': "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log('cash top-up get', data.data)
                    if (data.code === 400) {
                        Swal.fire({
                            title: data.status,
                            text: data?.error,
                            icon: "error"
                        })
                    }
                    else {
                        setInternationalGateway(data?.data)
                    }
                })

        }
        // console.log("Selected payment method:", event.target.value);

    };

    const handleModalOpen = (data) => {
        setSelectedOrder(data);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setSelectedUser(null);
        setIsModalOpen(false);
    };




    console.log('internet', internetBanking)


    return (
        <>
            <div className="mt-24">
                <h2 className="text-center text-2xl font-semibold">Transactions</h2>
                <div className="md:flex gap-24 mt-6 mx-20 bg-zinc-200 rounded shadow-lg p-6">
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
                                Cash ( {cash.length} )
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
                </div>

                {/* cash */}

                {cash.length >= 0 &&
                    <div className="grid md:grid-cols-1 my-0 mx-4 ">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full  mt-10 font-normal">
                                <thead className="text-white">
                                    <tr className="text-black flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                        <th className="p-3 text-left text-[#717D82]">Date</th>
                                        <th className="p-3 text-left text-[#717D82]">Payment Proof</th>
                                        <th className="p-3 text-left text-[#717D82]">Paid To</th>

                                        <th className="p-3 text-left text-[#717D82]">
                                            Payment For
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">
                                           Amount
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">Details</th>
                                    </tr>
                                </thead>


                                {cash.map((data, i) => {
                                    return (<tbody key={i} className="">
                                        <tr className="flex md:flex-row flex-no-wrap sm:table-row mb-2 sm:mb-0">
                                            <td className="text-[#464F53] font-normal  p-3">{data.createdAt}</td>
                                            <td className="text-[#464F53] font-normal  p-3"><img className="h-10 w-10 rounded shadow-sm" src={`http://localhost:5000/${data.cashProof}`} alt='cashProof' /></td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.paidTo}
                                            </td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.paymentFor}
                                            </td>

                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.amountToAdd}</td>
                                            <td >
                                                <button onClick={() => handleModalOpen(data)} type="button"
                                                    className="inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-gray-700 "
                                                    data-te-toggle="modal"
                                                    data-te-target="#exampleModal"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light">Details</button>


                                            </td>

                                        </tr>
                                    </tbody>)
                                })}
                            </table>
                        </div>
                    </div>
                }
                {/* mobileBanking */}

                {mobileBanking.length >= 0 &&
                    <div className="grid md:grid-cols-1 my-0 mx-4 ">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full  mt-10 font-normal">
                                <thead className="text-white">
                                    <tr className="text-black flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                        <th className="p-3 text-left text-[#717D82]">Date</th>
                                        <th className="p-3 text-left text-[#717D82]">Payment Proof</th>
                                        <th className="p-3 text-left text-[#717D82]">Paid To</th>

                                        <th className="p-3 text-left text-[#717D82]">
                                            Payment For
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Payment Method
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">Details</th>
                                    </tr>
                                </thead>


                                {mobileBanking.map((data, i) => {
                                    return (<tbody key={i} className="">
                                        <tr className="flex md:flex-row flex-no-wrap sm:table-row mb-2 sm:mb-0">
                                            <td className="text-[#464F53] font-normal  p-3">{data.createdAt}</td>
                                            <td className="text-[#464F53] font-normal  p-3"><img className="h-10 w-10 rounded shadow-sm" src={`http://localhost:5000/${data.cashProof}`} alt='cashProof' /></td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.paidTo}
                                            </td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.paymentFor}
                                            </td>

                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.paymentMethod}</td>
                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.paymentMethod}</td>
                                            <td >
                                                <button onClick={() => handleModalOpen(data)} type="button"
                                                    className="inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-gray-700 "
                                                    data-te-toggle="modal"
                                                    data-te-target="#exampleModal"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light">Details</button>


                                            </td>

                                        </tr>
                                    </tbody>)
                                })}
                            </table>
                        </div>
                    </div>
                }

                {/* internet banking */}

                {internetBanking.length >= 0 &&
                    <div className="grid md:grid-cols-1 my-0 mx-4 ">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full  mt-10 font-normal">
                                <thead className="text-white">
                                    <tr className="text-black flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                        <th className="p-3 text-left text-[#717D82]">Date</th>
                                        <th className="p-3 text-left text-[#717D82]">Payment Proof</th>
                                        <th className="p-3 text-left text-[#717D82]">Paid To</th>

                                        <th className="p-3 text-left text-[#717D82]">
                                            Payment For
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Payment Method
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">Details</th>
                                    </tr>
                                </thead>


                                {internetBanking.map((data, i) => {
                                    return (<tbody key={i} className="">
                                        <tr className="flex md:flex-row flex-no-wrap sm:table-row mb-2 sm:mb-0">
                                            <td className="text-[#464F53] font-normal  p-3">{data.createdAt}</td>
                                            <td className="text-[#464F53] font-normal  p-3"><img className="h-10 w-10 rounded shadow-sm" src={`http://localhost:5000/${data.cashProof}`} alt='cashProof' /></td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.paidTo}
                                            </td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.paymentFor}
                                            </td>

                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.paymentMethod}</td>
                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.paymentMethod}</td>
                                            <td >
                                                <button onClick={() => handleModalOpen(data)} type="button"
                                                    className="inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-gray-700 "
                                                    data-te-toggle="modal"
                                                    data-te-target="#exampleModal"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light">Details</button>


                                            </td>

                                        </tr>
                                    </tbody>)
                                })}
                            </table>
                        </div>
                    </div>
                }


                {/* international gateway*/}

                {internationalGateway.length >= 0 &&
                    <div className="grid md:grid-cols-1 my-0 mx-4 ">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full  mt-10 font-normal">
                                <thead className="text-white">
                                    <tr className="text-black flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                        <th className="p-3 text-left text-[#717D82]">Date</th>
                                        <th className="p-3 text-left text-[#717D82]">Payment Proof</th>
                                        <th className="p-3 text-left text-[#717D82]">Paid To</th>

                                        <th className="p-3 text-left text-[#717D82]">
                                            Payment For
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Amount
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">Details</th>
                                    </tr>
                                </thead>


                                {internationalGateway.map((data, i) => {
                                    return (<tbody key={i} className="">
                                        <tr className="flex md:flex-row flex-no-wrap sm:table-row mb-2 sm:mb-0">
                                            <td className="text-[#464F53] font-normal  p-3">{data.createdAt}</td>
                                            <td className="text-[#464F53] font-normal  p-3"><img className="h-10 w-10 rounded shadow-sm" src={`http://localhost:5000/${data.cashProof}`} alt='cashProof' /></td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.paidTo}
                                            </td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.paymentFor}
                                            </td>

                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.paymentMethod}</td>
                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.amountToAdd}</td>
                                            <td >
                                                <button onClick={() => handleModalOpen(data)} type="button"
                                                    className="inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-gray-700 "
                                                    data-te-toggle="modal"
                                                    data-te-target="#exampleModal"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light">Details</button>


                                            </td>

                                        </tr>
                                    </tbody>)
                                })}
                            </table>
                        </div>
                    </div>
                }









                {/* modal */}
                {isModalOpen && (
                    <Modal selectedOrder={selectedOrder} />
                )}
            </div>
        </>
    );
};

export default Transactions;




const Modal = ({ selectedOrder }) => {
    console.log('modal selectedOrder', selectedOrder)
    return (
        <>
            <div
                data-te-modal-init
                className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div
                    data-te-modal-dialog-ref
                    className="mt-32 pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                    <div
                        className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                        <div
                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <h5
                                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                id="exampleModalLabel">
                                Order ID : {selectedOrder?._id}
                            </h5>
                            <p>{selectedOrder?.amountToAdd}</p>
                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative flex-auto p-4" data-te-modal-body-ref>
                            {/* Modal body text goes here. */}
                            {/* <p>Profile Completed: {user?.completionRate} %</p>
                            <p className='flex justify-between'>Image: <img className='h-14 w-14 mb-2 zoom_img' src={`http://localhost:5000/${user?.imageURL}`} alt="imag" /></p> */}
                            <hr />
                            {/* <p>Name: {user?.name}</p>
                            <p>Email: {user?.email}</p>
                            <p className='mb-2'>Address: {user?.address}</p> */}
                            <hr />
                            {/* <p className='flex justify-between'>NID : {user?.nid}  {user?.nidFile && <img className='h-14 w-14 mb-2 zoom_img' src={`http://localhost:5000/${user?.nidFile}`} alt="imag" />}</p>
                            <p className='flex justify-between'>BIN : {user?.bin}  {user?.binFile && <img className='h-14 w-14 mb-2 zoom_img' src={`http://localhost:5000/${user?.binFile}`} alt="imag" />}</p>
                            <p className='flex justify-between mb-2'>TIN : {user?.tin}  {user?.tinFile && <img className='h-14 w-14 mb-2 zoom_img' src={`http://localhost:5000/${user?.tinFile}`} alt="imag" />}</p> */}
                            <hr />
                            {/* <p>Github: {user?.githubProfile ? user?.githubProfile : "Didn't update yet"}</p>
                            <p>Company Website: {user?.companyWebsite ? user?.companyWebsite : "Didn't update yet"}</p>
                            <p>Behance: {user?.behance ? user?.behance : "Didn't update yet"}</p>
                            <p className='mb-2'>LinkedIn: {user?.linkedInProfile ? user?.linkedInProfile : "Didn't update yet"}</p> */}
                            <hr />
                            {/* <p>Phone Number: {user?.phoneNumber ? user?.phoneNumber : "Didn't update yet"}</p>
                            <p>Whatsapp Number: {user?.whatsappNumber ? user?.whatsappNumber : "Didn't update yet"}</p> */}

                        </div>
                        {/* <div
                            className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">

                            {user?.profile === "verified" ? <button
                                type="button"
                                className="inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-orange-500 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                disabled
                            // onClick={() => handleMakeVerified(user?._id)}
                            >
                                Already Verified
                            </button> : <button
                                type="button"
                                className="inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-green-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleMakeVerified(user?._id)}>
                                Make Verified
                            </button>}

                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};
