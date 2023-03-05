import React, { useState } from 'react'
import Swal from 'sweetalert2';
import useUser from '../../Hooks/useUser';
import './Verification.css'

const Verification = () => {
    const [users] = useUser();
    const [showBulk, setShowBulk] = useState(false);
    const [showShort, setShowShort] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = (user) => {
        console.log('user', user)
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setSelectedUser(null);
        setIsModalOpen(false);
    };

    const handleMakeVerified = (id) => {
        // console.log('handleMakeVerified', id)
        const url = `http://localhost:5000/api/v1/user/register2/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ profile: "verified" })
        })
            .then(res => res.json())
            .then(data => {
                console.log('make user verified', data)
                if (data.code === 400 || data.code === 401 || data.code === 402) {
                    Swal.fire({
                        title: data.status,
                        text: data.error,
                        icon: "error"
                    })
                }
                else {
                    Swal.fire({
                        title: data.status,
                        text: data.message,
                        icon: 'success'
                    })
                    window.location.reload()
                }
            })
    }


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
                    <table className="table-auto w-full  mt-10 ">
                        <thead className="text-white">
                            <tr className="text-black flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 font-medium bg-slate-300 rounded shadow-lg">
                                <th className=" text-left text-[#717D82]">
                                    <div className="w-[15px] h-[15px]">
                                        <input type="checkbox" className="w-full h-full" />
                                    </div>
                                </th>
                                <th className="p-3 text-left text-[#717D82]">ID</th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Photo
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Name
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Id
                                </th>

                                <th className="p-3 text-left text-[#717D82]">
                                    Phone Number
                                </th>
                                <th className="p-3 text-left text-[#717D82]">
                                    Completed Percentage
                                </th>
                                <th className="p-3 text-left text-[#717D82]">Account Status</th>

                                <th className="p-3 text-left text-[#717D82]">Details</th>
                            </tr>
                        </thead>
                        {/* dynamic table data */}
                        {users.map((user, i) => {
                            return (
                                <tbody key={i}>
                                    <tr className="flex md:flex-row flex-no wrap sm:table-row mb-2 sm:mb-0 text-[14px]">
                                        <td className="text-[#464F53] text-center">
                                            <div className="w-[15px] h-[15px]">
                                                <input type="checkbox" className="w-full h-full" />
                                            </div>
                                        </td>

                                        <td className="text-[#464F53]      p-3 truncate">{i + 1}</td>
                                        <td className="text-[#464F53]      p-3 ">{user?.name}</td>
                                        <td className="text-[#464F53]      p-3 ">
                                            <img className='h-10 w-10 relative' src={`http://localhost:5000/${user?.imageURL}`} alt="imag" />
                                        </td>
                                        <td className="text-[#464F53]      p-3 ">
                                            {user?._id}
                                        </td>
                                        <td className="text-[#464F53]      p-3 ">
                                            {user?.phoneNumber}
                                        </td>
                                        <td className="text-[#464F53]      p-3 ">{user?.completionRate} %</td>
                                        <td className="text-center">
                                            {user?.profile}
                                        </td>
                                        <td >
                                            <button onClick={() => handleModalOpen(user)} type="button"
                                                className="inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-gray-700 "
                                                data-te-toggle="modal"
                                                data-te-target="#exampleModal"
                                                data-te-ripple-init
                                                data-te-ripple-color="light">Details</button>


                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>

                </div>
            </div>
            {/* modal */}
            {isModalOpen && (
                <Modal user={selectedUser} onClose={handleModalClose} handleMakeVerified={handleMakeVerified} />
            )}
        </>
    )
}

export default Verification;


const Modal = ({ user, handleMakeVerified }) => {
    // console.log('modal user', user)
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
                                User ID : {user?._id}
                            </h5>
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
                            <p>Profile Completed: {user?.completionRate} %</p>
                            <p className='flex justify-between'>Image: <img className='h-14 w-14 mb-2 zoom_img' src={`http://localhost:5000/${user?.imageURL}`} alt="imag" /></p>
                            <hr />
                            <p>Name: {user?.name}</p>
                            <p>Email: {user?.email}</p>
                            <p className='mb-2'>Address: {user?.address}</p>
                            <hr />
                            <p className='flex justify-between'>NID : {user?.nid}  {user?.nidFile && <img className='h-14 w-14 mb-2 zoom_img' src={`http://localhost:5000/${user?.nidFile}`} alt="imag" />}</p>
                            <p className='flex justify-between'>BIN : {user?.bin}  {user?.binFile && <img className='h-14 w-14 mb-2 zoom_img' src={`http://localhost:5000/${user?.binFile}`} alt="imag" />}</p>
                            <p className='flex justify-between mb-2'>TIN : {user?.tin}  {user?.tinFile && <img className='h-14 w-14 mb-2 zoom_img' src={`http://localhost:5000/${user?.tinFile}`} alt="imag" />}</p>
                            <hr />
                            <p>Github: {user?.githubProfile ? user?.githubProfile : "Didn't update yet"}</p>
                            <p>Company Website: {user?.companyWebsite ? user?.companyWebsite : "Didn't update yet"}</p>
                            <p>Behance: {user?.behance ? user?.behance : "Didn't update yet"}</p>
                            <p className='mb-2'>LinkedIn: {user?.linkedInProfile ? user?.linkedInProfile : "Didn't update yet"}</p>
                            <hr />
                            <p>Phone Number: {user?.phoneNumber ? user?.phoneNumber : "Didn't update yet"}</p>
                            <p>Whatsapp Number: {user?.whatsappNumber ? user?.whatsappNumber : "Didn't update yet"}</p>

                        </div>
                        <div
                            className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">

                            {user?.profile === "verified" ? <button
                                type="button"
                                className="inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-green-700 "
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

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};