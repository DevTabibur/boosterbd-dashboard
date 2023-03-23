
import { useState } from "react";
import useUser from "../../../Hooks/useUser";
import { useStateContext } from '../../../contexts/ContextProvider'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const ManageUsers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState(false)
    const { currentColor } = useStateContext()
    const [users] = useUser();
    const navigate = useNavigate()


    const userDetails = (user) => {
        setSelectedUser(user)
        setIsModalOpen(true)
    };

    const makeAdmin = (id) => {
        const confirmation = window.confirm("Are You want to Make this user an Admin?")
        if (confirmation) {
            const url = `https://boosterbd-server.onrender.com/api/v1/user/register/admin/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('made an admin', data)
                    if (data.code === 400) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.message,
                            icon: 'error'
                        })
                    }
                    else if (data.code === 401) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.message,
                            icon: 'error'
                        })
                    }
                    else if (data.code === 403) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.message,
                            icon: 'error'
                        })
                    }
                    else if (data.code === 200) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.message,
                            icon: 'success'
                        })
                        window.location.reload()
                    }
                    else {
                        console.log("NEW ERROR")
                    }








                })
        }

    }
    const removeUser = (id) => {
        const confirmation = window.confirm("Are You want remove?")
        if (confirmation) {
            const url = `https://boosterbd-server.onrender.com/api/v1/user/register/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log('remove a user', data)
                    if (data.code === 400) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.message,
                            icon: 'error'
                        })
                    }
                    else if (data.code === 401) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.message,
                            icon: 'error'
                        })
                    }
                    else if (data.code === 403) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.message,
                            icon: 'error'
                        })
                    }
                    else if (data.code === 200) {
                        Swal.fire({
                            title: data?.status,
                            text: data?.message,
                            icon: 'success'
                        })
                        localStorage.removeItem('accessToken')
                        navigate("/")
                    }
                    else {
                        console.log("NEW ERROR")
                    }








                })
        }

    }

    return (
        <div className="mt-24">
            <h3 className="text-2xl font-semibold ml-6" style={{ color: currentColor }}>Manage Users {users.length}</h3>
            <div className="grid md:grid-cols-1 my-0 mx-4 ml-6">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full  mt-10 font-normal">
                        <thead className="text-white">
                            <tr className="text-black flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left text-[#717D82]">SL</th>
                                <th className="p-3 text-left text-[#717D82]">Number</th>
                                <th className="p-3 text-left text-[#717D82]">Name</th>
                                <th className="p-3 text-left text-[#717D82]">Completion Rate</th>
                                <th className="p-3 text-left text-[#717D82]">Role</th>
                                <th className="p-3 text-left text-[#717D82]">Status</th>
                                <th className="p-3 text-left text-[#717D82]">Action</th>
                                <th className="p-3 text-left text-[#717D82]">PERMISSION</th>
                            </tr>
                        </thead>
                        {/* table dynamic users data */}
                        {users.map((user, i) => {
                            return (
                                <tbody key={i}>
                                    <tr className="flex md:flex-row flex-no wrap sm:table-row mb-2 sm:mb-0">
                                        <td className="p-3">{i + 1}</td>
                                        <td className="p-3 truncate">{user?.phoneNumber}</td>
                                        {user?.name ? <td className="p-3 ">{user?.name}</td> : <td className="p-3 ">Name didn't completed</td>}
                                        {user?.completionRate ? <td className="p-3 ">{user?.completionRate}</td> : <td className="p-3 ">Didn't completed</td>}
                                        <td className="p-3 ">{user?.role}</td>

                                        <td className="p-3 text-green-500 font-bold">
                                            <button
                                                className={`${user?.status === "active" && "bg-[#47C363]"} ${user?.status === "inactive" && "bg-[#C3BE47]"} ${user?.status === "blocked" && "bg-[#C34747]"} px-2 py-1 rounded-md text-[12px] text-white`}
                                            >
                                                {user?.status}
                                            </button>
                                        </td>
                                        <td className="p-3">
                                            <button
                                                onClick={() => userDetails(user)}
                                                style={{ backgroundColor: currentColor }}
                                                type="button"
                                                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                                data-te-toggle="modal"
                                                data-te-target="#exampleModal"
                                                data-te-ripple-init
                                                data-te-ripple-color="light">
                                                DETAILS
                                            </button>
                                        </td>
                                        <td className="p-3">
                                            PERMISSIONS
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </div>

            {/* modal */}
            {isModalOpen && <UserModal user={selectedUser} makeAdmin={makeAdmin} removeUser={removeUser} />}
        </div>
    );
};

export default ManageUsers;


const UserModal = ({ user, makeAdmin, removeUser }) => {
    console.log('user', user)
    return (
        <>
            <div
                data-te-modal-init
                class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div
                    data-te-modal-dialog-ref
                    class=" mt-32 pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                    <div
                        class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                        <div
                            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <h5
                                class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                id="exampleModalLabel">
                                Phone Number: {user?.phoneNumber}
                            </h5>
                            <button
                                type="button"
                                class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-6">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="relative flex-auto p-4" data-te-modal-body-ref>
                            <p>Profile Completed: {user?.completionRate} %</p>
                            <p className='flex justify-between'>Image: <img className='h-14 w-14 mb-2 zoom_img' src={`https://boosterbd-server.onrender.com/${user?.imageURL}`} alt="imag" /></p>
                            <hr />
                            <p>Name : {user?.name}</p>
                            <p>Role : {user?.role}</p>
                            <p>Email : {user?.email}</p>
                        </div>
                        <div
                            class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            {user?.role === "admin" ? <button

                                type="button"
                                className="inline-block rounded mr-6  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-orange-500 cursor-not-allowed"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Already an Admin
                            </button> : <button
                                onClick={() => makeAdmin(user?._id)}
                                type="button"
                                className="inline-block rounded mr-6  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-orange-500 cursor-pointer"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Make An Admin
                            </button>}

                            <button
                                type="button"
                                className="inline-block rounded mr-6  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-500 cursor-pointer"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => removeUser(user?._id)}
                            >
                                Remove User
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
