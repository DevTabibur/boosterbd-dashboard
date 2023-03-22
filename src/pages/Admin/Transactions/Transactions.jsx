
import { useState } from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { useStateContext } from "../../../contexts/ContextProvider";
import { transactionData } from "../../../Database/transactionData";
import useActiveUser from "../../../Hooks/useActiveUser";
import Modal from '../../../components/Modal/Modal'

const Transactions = () => {
    const [activeUser, isLoading] = useActiveUser()
    const { currentColor } = useStateContext()
    const [cash, setCash] = useState(false);
    const [mobileBanking, setMobileBanking] = useState(false);
    const [internetBanking, setInternetBanking] = useState(false);
    const [internationalGateway, setInternationalGateway] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState('')



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
                    // console.log('cash top-up get', data.data)
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
                    // console.log('cash top-up get', data.data)
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
                    // console.log('cash top-up get', data.data)
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




    // approved order
    const handleApproved = (id, route) => {
        // console.log(id, route)
        if (route === "cash") {
            const confirmation = window.confirm("Are you want to Approved?")
            if (confirmation) {
                const url = `http://localhost:5000/api/v1/top-up/cash/${id}`;
                fetch(url, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify({ status: "approved", phoneNumber: activeUser?.phoneNumber })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('cash approved', data)
                        if (data.code === 400) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else if (data.code === 401) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "success"
                            })
                            window.location.reload()
                        }
                    })
            }


        }
        else if (route === "mobile-banking") {
            const confirmation = window.confirm("Are you want to Approved?")
            if (confirmation) {
                const url = `http://localhost:5000/api/v1/top-up/mobile-banking/${id}`;
                fetch(url, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify({ status: "approved", phoneNumber: activeUser?.phoneNumber })
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('mobile-banking approved', data)
                        if (data.code === 400) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else if (data.code === 401) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "success"
                            })
                            window.location.reload()
                        }
                    })
            }

        }
        else if (route === "internet-banking") {
            const confirmation = window.confirm("Are you want to Approved?")
            if (confirmation) {
                const url = `http://localhost:5000/api/v1/top-up/internet-banking/${id}`;
                fetch(url, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify({ status: "approved", phoneNumber: activeUser?.phoneNumber })

                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('internet-banking approved', data)
                        if (data.code === 400) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else if (data.code === 401) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "success"
                            })
                            window.location.reload()
                        }
                    })
            }


        }
        else if (route === "international-payment-gateway") {
            const confirmation = window.confirm("Are you want to Approved?")
            if (confirmation) {
                const url = `http://localhost:5000/api/v1/top-up/international-payment-gateway/${id}`;
                fetch(url, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify({ status: "approved", phoneNumber: activeUser?.phoneNumber })

                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('international-payment-gateway approved', data)
                        if (data.code === 400) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else if (data.code === 401) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "success"
                            })
                            window.location.reload()
                        }
                    })
            }


        }
        else {
            console.log('no route was found')
        }
    }

    // canceled order => This will show before approved the order
    const handleCanceled = (id, route) => {
        if (route === "cash") {
            const confirmation = window.confirm("Are you want to canceled?")
            if (confirmation) {
                const url = `http://localhost:5000/api/v1/top-up/cash/${id}`;
                fetch(url, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify({ status: "canceled", number: activeUser?.phoneNumber })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('cash canceled', data)
                        if (data.code === 400) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else if (data.code === 401) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "success"
                            })
                            window.location.reload()
                        }
                    })
            }
        }
        else if (route === "mobile-banking") {
            const confirmation = window.confirm("Are you want to Approved?")
            if (confirmation) {
                const url = `http://localhost:5000/api/v1/top-up/mobile-banking/${id}`;
                fetch(url, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify({ status: "canceled", phoneNumber: activeUser?.phoneNumber })

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('mobile-banking canceled', data)
                        if (data.code === 400) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else if (data.code === 401) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "success"
                            })
                            window.location.reload()
                        }
                    })
            }

        }
        else if (route === "internet-banking") {
            const confirmation = window.confirm("Are you want to Approved?")
            if (confirmation) {
                const url = `http://localhost:5000/api/v1/top-up/internet-banking/${id}`;
                fetch(url, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify({ status: "canceled", phoneNumber: activeUser?.phoneNumber })

                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('internet-banking approved', data)
                        if (data.code === 400) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else if (data.code === 401) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "success"
                            })
                            window.location.reload()
                        }
                    })
            }
        }
        else if (route === "international-payment-gateway") {
            const confirmation = window.confirm("Are you want to Approved?")
            if (confirmation) {
                const url = `http://localhost:5000/api/v1/top-up/international-payment-gateway/${id}`;
                fetch(url, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify({ status: "canceled", phoneNumber: activeUser?.phoneNumber })

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('international-payment-gateway approved', data)
                        if (data.code === 400) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else if (data.code === 401) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "success"
                            })
                            window.location.reload()
                        }
                    })
            }
        }
        else {
            console.log('no route was found')
        }
    }

    const handleDeleted = (id, route) => {
        if (route === "cash") {
            const confirmation = window.confirm("Remind!. This order will deleted  from Database permanently")
            if (confirmation) {
                const url = `http://localhost:5000/api/v1/top-up/cash/${id}`;
                fetch(url, {
                    method: "DELETE",
                    headers: {
                        // "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log("data deleted", data)
                        if (data.code === 400) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.error,
                                icon: "error"
                            })
                        }
                        else if (data.code === 401) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else if (data.code === 403) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "success"
                            })
                            window.location.reload()
                        }

                    })
            }



        }
        else if (route === "mobile-banking") {
            const confirmation = window.confirm("Remind!. This order will deleted  from Database permanently")
            if (confirmation) {
                const url = `http://localhost:5000/api/v1/top-up/mobile-banking/${id}`;
                fetch(url, {
                    method: "DELETE",
                    headers: {
                        // "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log("data deleted", data)
                        if (data.code === 400) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.error,
                                icon: "error"
                            })
                        }
                        else if (data.code === 401) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else if (data.code === 403) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "success"
                            })
                            window.location.reload()
                        }

                    })
            }
        }
        else if (route === "internet-banking") {
            const confirmation = window.confirm("Remind!. This order will deleted  from Database permanently")
            if (confirmation) {
                const url = `http://localhost:5000/api/v1/top-up/internet-banking/${id}`;
                fetch(url, {
                    method: "DELETE",
                    headers: {
                        // "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log("data deleted", data)
                        if (data.code === 400) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.error,
                                icon: "error"
                            })
                        }
                        else if (data.code === 401) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else if (data.code === 403) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "success"
                            })
                            window.location.reload()
                        }

                    })
            }
        }
        else if (route === "international-payment-gateway") {
            const confirmation = window.confirm("Remind!. This order will deleted  from Database permanently")
            if (confirmation) {
                const url = `http://localhost:5000/api/v1/top-up/international-payment-gateway/${id}`;
                fetch(url, {
                    method: "DELETE",
                    headers: {
                        // "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log("data deleted", data)
                        if (data.code === 400) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.error,
                                icon: "error"
                            })
                        }
                        else if (data.code === 401) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else if (data.code === 403) {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "error"
                            })
                        }
                        else {
                            Swal.fire({
                                title: data?.status,
                                text: data?.message,
                                icon: "success"
                            })
                            window.location.reload()
                        }

                    })
            }
        }
        else {
            console.log('no route was found')
        }

    }


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
                                        <th className="p-3 text-left text-[#717D82]">
                                            Status
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">Details</th>
                                    </tr>
                                </thead>


                                {cash.map((data, i) => {
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
                                            <td className="text-[#464F53]      p-3 ">
                                                {data?.status}
                                            </td>

                                            <td >
                                                <button
                                                    onClick={() => handleModalOpen(data)}
                                                    style={{ backgroundColor: currentColor }}
                                                    type="button"
                                                    className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                                    data-te-toggle="modal"
                                                    data-te-target="#exampleModal"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light">
                                                    Details
                                                </button>
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
                                        <th className="p-3 text-left text-[#717D82]">SL</th>
                                        <th className="p-3 text-left text-[#717D82]">Date</th>
                                        <th className="p-3 text-left text-[#717D82]">Payment Proof</th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Payment With
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">Paid To</th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Sender Number
                                        </th>

                                        <th className="p-3 text-left text-[#717D82]">
                                            Payment For
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Amount
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Status
                                        </th>


                                        <th className="p-3 text-left text-[#717D82]">Details</th>
                                    </tr>
                                </thead>


                                {mobileBanking.map((data, i) => {
                                    return (<tbody key={i} className="">
                                        <tr className="flex md:flex-row flex-no-wrap sm:table-row mb-2 sm:mb-0">
                                            <td className="text-[#464F53] font-normal  p-3">{i + 1}</td>
                                            <td className="text-[#464F53] font-normal  p-3">{data.createdAt}</td>
                                            <td className="text-[#464F53] font-normal  p-3"><img className="h-10 w-10 rounded shadow-sm" src={`http://localhost:5000/${data.transactionScreenShot}`} alt='transactionScreenShot' /></td>

                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.paymentWith}</td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.paidTo}
                                            </td>
                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.senderNumber}</td>

                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.paymentFor}
                                            </td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.amountToAdd}
                                            </td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.status}
                                            </td>


                                            <td >
                                                <button
                                                    onClick={() => handleModalOpen(data)}
                                                    style={{ backgroundColor: currentColor }}
                                                    type="button"
                                                    className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                                    data-te-toggle="modal"
                                                    data-te-target="#exampleModal"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light">
                                                    Details
                                                </button>


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
                                        <th className="p-3 text-left text-[#717D82]">SL</th>
                                        <th className="p-3 text-left text-[#717D82]">Date</th>
                                        <th className="p-3 text-left text-[#717D82]">Payment Proof</th>
                                        <th className="p-3 text-left text-[#717D82]">Account Number</th>

                                        <th className="p-3 text-left text-[#717D82]">
                                            Customer Account
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Bank
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Payment For
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Amount
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Status
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">Details</th>
                                    </tr>
                                </thead>


                                {internetBanking.map((data, i) => {
                                    return (<tbody key={i} className="">
                                        <tr className="flex md:flex-row flex-no-wrap sm:table-row mb-2 sm:mb-0">
                                            <td className="text-[#464F53] font-normal  p-3">{i + 1}</td>
                                            <td className="text-[#464F53] font-normal  p-3">{data.createdAt}</td>
                                            <td className="text-[#464F53] font-normal  p-3"><img className="h-10 w-10 rounded shadow-sm" src={`http://localhost:5000/${data.internetBankingProof}`} alt='internetBankingProof' /></td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.accountNumber}
                                            </td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.customerAccountNumber}
                                            </td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.selectBank}
                                            </td>

                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.paymentFor}</td>
                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.amountToAdd}</td>
                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.status}</td>
                                            <td >
                                                <button
                                                    onClick={() => handleModalOpen(data)}
                                                    style={{ backgroundColor: currentColor }}
                                                    type="button"
                                                    className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                                    data-te-toggle="modal"
                                                    data-te-target="#exampleModal"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light">
                                                    Details
                                                </button>


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
                                        <th className="p-3 text-left text-[#717D82]">SL</th>
                                        <th className="p-3 text-left text-[#717D82]">Date</th>
                                        <th className="p-3 text-left text-[#717D82]">Payment Proof</th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Payment Gateway
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">Account Mail</th>
                                        <th className="p-3 text-left text-[#717D82]">Customer Account Mail</th>

                                        <th className="p-3 text-left text-[#717D82]">
                                            Payment For
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Amount
                                        </th>
                                        <th className="p-3 text-left text-[#717D82]">
                                            Status
                                        </th>

                                        <th className="p-3 text-left text-[#717D82]">Details</th>
                                    </tr>
                                </thead>


                                {internationalGateway.map((data, i) => {
                                    return (<tbody key={i} className="">
                                        <tr className="flex md:flex-row flex-no-wrap sm:table-row mb-2 sm:mb-0">
                                            <td className="text-[#464F53] font-normal  p-3">{i + 1}</td>
                                            <td className="text-[#464F53] font-normal  p-3">{data.createdAt}</td>
                                            <td className="text-[#464F53] font-normal  p-3"><img className="h-10 w-10 rounded shadow-sm" src={`http://localhost:5000/${data.internationalGatewayProof}`} alt='internationalGatewayProof' /></td>
                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.paymentGateway}</td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.accountMail}
                                            </td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.customerAccountMail}
                                            </td>
                                            <td className="text-[#464F53] font-normal   p-3 truncate">
                                                {data.paymentFor}
                                            </td>

                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.amountToAdd}</td>
                                            <td className=" text-[#464F53] font-normal  p-3 ">{data.status}</td>
                                            <td >
                                                <button
                                                    onClick={() => handleModalOpen(data)}
                                                    style={{ backgroundColor: currentColor }}
                                                    type="button"
                                                    className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                                    data-te-toggle="modal"
                                                    data-te-target="#exampleModal"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light">
                                                    Details
                                                </button>


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
                    <Modal selectedOrder={selectedOrder} handleApproved={handleApproved} handleCanceled={handleCanceled} handleDeleted={handleDeleted} />
                )}
            </div>
        </>
    );
};

export default Transactions;




