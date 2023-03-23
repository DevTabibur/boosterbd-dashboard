

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useStateContext } from "../../../contexts/ContextProvider";
import useActiveUser from "../../../Hooks/useActiveUser";
import useAdAccountRequest from "../../../Hooks/useAdAccountRequest";

const AdAccountRequestsView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalOpen2, setIsModalOpen2] = useState(false)
    const [selectedData, setSelectedData] = useState(null);
    const [selectedData2, setSelectedData2] = useState(null);
    const { currentColor } = useStateContext()
    const [activeUser, isLoading] = useActiveUser()
    // for ADMIN
    const [adAccounts] = useAdAccountRequest()

    const handleModalOpen = (data) => {
        setSelectedData(data)
        setIsModalOpen(true)
    }
    const handleModalOpen2 = (data) => {
        setSelectedData2(data)
        setIsModalOpen2(true)
    }


    const handleApproved = (id) => {
        const url = `https://boosterbd-server.onrender.com/api/v1/ad-account/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                // console.log('data approved', data)
                if (data.code === 400) {
                    Swal.fire({
                        title: data?.status,
                        text: data?.error,
                        icon: "error",
                    });
                }
                else if (data.code === 401) {
                    Swal.fire({
                        title: data?.status,
                        text: data?.error,
                        icon: "error",
                    });
                }
                else if (data.code === 403) {
                    Swal.fire({
                        title: data?.status,
                        text: data?.error,
                        icon: "error",
                    });
                }
                else {
                    Swal.fire({
                        title: data?.status,
                        text: data?.message,
                        icon: "success",
                    });
                    window.location.reload()
                }

            })
    }


    const handleCanceled = (id) => {
        const confirmation = window.confirm("Are you want to cancel this?")
        if (confirmation) {
            const url = `https://boosterbd-server.onrender.com/api/v1/ad-account/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ status: 'canceled' })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('data approved', data)
                    if (data.code === 400) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.error,
                            icon: "error",
                        });
                    }
                    else if (data.code === 401) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.error,
                            icon: "error",
                        });
                    }
                    else if (data.code === 403) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.error,
                            icon: "error",
                        });
                    }
                    else {
                        Swal.fire({
                            title: data?.status,
                            text: data?.message,
                            icon: "success",
                        });
                        window.location.reload()
                    }

                })
        }

    }


    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you want to Delete?")
        if (confirmation) {
            const url = `https://boosterbd-server.onrender.com/api/v1/ad-account/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('data approved', data)
                    if (data.code === 400) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.error,
                            icon: "error",
                        });
                    }
                    else if (data.code === 401) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.error,
                            icon: "error",
                        });
                    }
                    else if (data.code === 403) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.error,
                            icon: "error",
                        });
                    }
                    else {
                        Swal.fire({
                            title: data?.status,
                            text: data?.message,
                            icon: "success",
                        });
                        window.location.reload()
                    }

                })
        }
    }


    return (
        <div className="mt-24">
            <div className="grid md:grid-cols-1 my-0 mx-4">
                <h3 className="text-2xl font-semibold" style={{ color: currentColor }}>Ad Account Request (ADMIN)</h3>


                <div className="overflow-x-auto">
                    <table className="table-auto w-full  mt-10 ">
                        <thead className="text-white">
                            <tr className="text-black flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left text-[#717D82]">SL</th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Account Name
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Account Number
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Phone
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Page Link
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Page Name
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Website
                                </th>
                                <th className="p-3 text-left text-[#717D82]">Page ID</th>

                                <th className="p-3 text-left text-[#717D82]">Status</th>
                                <th className="p-3 text-left text-[#717D82]">Details</th>
                            </tr>
                        </thead>

                        {adAccounts.map((data, i) => {
                            return (
                                <tbody key={i}>
                                    <tr className="flex md:flex-row flex-no wrap sm:table-row mb-2 sm:mb-0 text-[14px]">
                                        <td className="text-gray-500 p-3">{i + 1}</td>
                                        {data?.addAccountName ? <td className="text-gray-500 p-3 truncate">{data?.addAccountName}</td> : <td className="text-gray-500 p-3 ">
                                            Admin will update it very soon
                                        </td>}

                                        {data?.addAccountNumber ? <td className="text-gray-500 p-3 ">{data?.addAccountNumber}</td> : <td className="text-gray-500 p-3 ">
                                            Admin will update it very soon
                                        </td>}

                                        <td className="text-gray-500 p-3 ">{data?.phoneNumber}</td>
                                        <td className="text-gray-500 p-3 ">{data?.pageLink}</td>
                                        <td className="text-gray-500 p-3 ">{data?.pageName}</td>
                                        {data?.companyWebsite ? <td className="text-gray-500 p-3 ">{data?.companyWebsite}</td> : <td>"Didn't have</td>}
                                        <td className="text-gray-500 p-3 ">{data?.pageID}</td>
                                        <td className="text-gray-500 p-3 ">{data?.status}</td>
                                        <td className="   p-3  cursor-pointer">
                                            {data?.addAccountName ? <button
                                                onClick={() => handleModalOpen2(data)}
                                                style={{ backgroundColor: currentColor }}
                                                type="button"
                                                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                                data-te-toggle="modal"
                                                data-te-target="#exampleModal2"
                                                data-te-ripple-init
                                                data-te-ripple-color="light">
                                                DETAILS
                                            </button> : <button
                                                onClick={() => handleModalOpen(data)}
                                                style={{ backgroundColor: currentColor }}
                                                type="button"
                                                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                                data-te-toggle="modal"
                                                data-te-target="#exampleModal"
                                                data-te-ripple-init
                                                data-te-ripple-color="light">
                                                GIVE INFO
                                            </button>}


                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </div>
            {/* modal 1 */}
            {isModalOpen && <Modal modalData={selectedData} currentColor={currentColor} />}
            {/* modal 2 */}
            {isModalOpen2 && <Modal2 modal2Data={selectedData2} currentColor={currentColor} handleApproved={handleApproved} handleDelete={handleDelete} handleCanceled={handleCanceled} />}
        </div>
    );
};


export default AdAccountRequestsView;

const Modal = ({ modalData, currentColor }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data, e) => {
        const body = {
            addAccountName: data?.addAccountName,
            addAccountNumber: data?.addAccountNumber,
        }
        // console.log('body', body)
        const url = `https://boosterbd-server.onrender.com/api/v1/ad-account/${modalData?._id}/admin-given-info`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('data updated', data)
                if (data.code === 400) {
                    Swal.fire({
                        title: data?.status,
                        text: data?.error,
                        icon: "error",
                    });
                }
                else if (data.code === 401) {
                    Swal.fire({
                        title: data?.status,
                        text: data?.error,
                        icon: "error",
                    });
                }
                else if (data.code === 403) {
                    Swal.fire({
                        title: data?.status,
                        text: data?.error,
                        icon: "error",
                    });
                }
                else {
                    Swal.fire({
                        title: data?.status,
                        text: data?.message,
                        icon: "success",
                    });
                    window.location.reload();
                }
            })
    };
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
                                Ad Account ID : {modalData?._id}
                            </h5>
                            <button
                                style={{ color: currentColor }}
                                type="button"
                                className="box-content border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none rounded-full shadow"
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* addAccountName */}
                                <div className="flex justify-center">
                                    <div className="relative mb-3 w-full" data-te-input-wrapper-init>
                                        <input
                                            type="text"
                                            style={{ backgroundColor: currentColor }}
                                            className=" peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            id="exampleFormControlInput1"
                                            {...register("addAccountName", {
                                                required: {
                                                    value: true,
                                                    message: "Account name is required"
                                                }
                                            })}
                                        />
                                        <label
                                            for="exampleFormControlInput1"
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-700 dark:peer-focus:text-neutral-700"
                                        >Account Name
                                        </label>
                                        <label className="flex justify-between items-center">
                                            {errors.addAccountName?.type === "required" && (
                                                <span className="label-text-alt text-red-600 ">
                                                    {errors.addAccountName.message}
                                                </span>
                                            )}
                                        </label>
                                    </div>
                                </div>
                                {/* addAccountNumber */}
                                <div className="flex justify-center">
                                    <div className="relative mb-3 w-full" data-te-input-wrapper-init>
                                        <input
                                            type="text"
                                            style={{ backgroundColor: currentColor }}
                                            className=" peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            id="exampleFormControlInput1"
                                            {...register("addAccountNumber", {
                                                required: {
                                                    value: true,
                                                    message: "Account Number is required"
                                                }
                                            })}
                                        />
                                        <label
                                            for="exampleFormControlInput1"
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-700 dark:peer-focus:text-neutral-700"
                                        >Account Number
                                        </label>
                                        <label className="flex justify-between items-center">
                                            {errors.addAccountNumber?.type === "required" && (
                                                <span className="label-text-alt text-red-600 ">
                                                    {errors.addAccountNumber.message}
                                                </span>
                                            )}
                                        </label>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <input type="submit" value="SUBMIT" className="px-6 py-2 w-full rounded-xl shadow-2xl cursor-pointer" style={{ backgroundColor: currentColor }} />
                                </div>

                            </form>
                        </div>
                        <div
                            className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            {/* button */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Modal2 = ({ currentColor, modal2Data, handleApproved, handleDelete, handleCanceled }) => {
    // console.log('modal2Data', modal2Data)
    return (
        <>
            <div
                data-te-modal-init
                className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModal2"
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
                                Ad Account ID : {modal2Data?._id}
                            </h5>
                            <button
                                style={{ color: currentColor }}
                                type="button"
                                className="box-content border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none rounded-full shadow"
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
                            <p>Account Name : {modal2Data?.addAccountName}</p>
                            <p>Account Number : {modal2Data?.addAccountNumber}</p>
                            <hr />
                            <p>Page Name  : {modal2Data?.pageName}</p>
                            <p>Page Link : {modal2Data?.pageLink}</p>
                            <p>Page ID : {modal2Data?.pageID}</p>
                            <hr />
                            <p>Company Website : {modal2Data?.companyWebsite}</p>
                            <p>Phone Number  : {modal2Data?.phoneNumber}</p>

                        </div>
                        <div
                            className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            {/* button */}
                            <div
                                className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                {modal2Data?.status === "approved" ? <button
                                    type="button"
                                    className="inline-block rounded mr-6  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-orange-500 cursor-not-allowed"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >
                                    Already Approved
                                </button> : <button
                                    type="button"
                                    className="inline-block rounded mr-6  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-orange-500 "
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    onClick={() => handleApproved(modal2Data?._id)}
                                >
                                    Approved
                                </button>}
                                {/* delete button. this will be deleted this order from db */}
                                {modal2Data?.status === "approved" && <button
                                    type="button"
                                    className="inline-block mr-4 rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    onClick={() => handleDelete(modal2Data?._id)}
                                >
                                    Delete from DB
                                </button>}
                                {modal2Data?.status === "canceled" && <button
                                    type="button"
                                    className="inline-block mr-4 rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    onClick={() => handleDelete(modal2Data?._id)}
                                >
                                    Delete from DB
                                </button>}

                                {modal2Data?.status === "pending" && <button
                                    type="button"
                                    className="inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    onClick={() => handleCanceled(modal2Data?._id)}
                                >
                                    Cancel
                                </button>}

                                {modal2Data?.status === "canceled" && <button
                                    type="button"
                                    className="inline-block rounded cursor-not-allowed  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >
                                    Already Canceled
                                </button>}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

