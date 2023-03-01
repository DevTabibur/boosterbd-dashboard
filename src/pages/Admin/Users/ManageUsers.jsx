
import { useState } from "react";
import useUser from "../../../Hooks/useUser";

const ManageUsers = () => {
    const [users] = useUser();
    // console.log('user', users)
    const userDetails = (name) => {
        alert(name);
    };

    return (
        <div className="mt-24">
            <div className="grid md:grid-cols-1 my-0 mx-4 ml-6">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full  mt-10 font-normal">
                        <thead className="text-white">
                            <tr className="text-black flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left text-[#717D82]">Name</th>
                                <th className="p-3 text-left text-[#717D82]">Email</th>
                                <th className="p-3 text-left text-[#717D82]">Country</th>
                                <th className="p-3 text-left text-[#717D82]">Status</th>
                                <th className="p-3 text-left text-[#717D82]">Action</th>
                            </tr>
                        </thead>
                        {/* table dynamic users data */}
                        {users.map((user, i) => {
                            return (
                                <tbody key={i}>
                                    <TableRow user={user} userDetails={userDetails} />
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;

const TableRow = ({ userDetails, user }) => {
    const { name, email, country, status } = user;
    return (
        <>
            <tr className="flex md:flex-row flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td className="p-3">{name}</td>
                <td className="p-3 truncate">{email}</td>
                <td className="p-3 ">{country}</td>
                <td className="p-3 text-green-500 font-bold">
                    <button
                        className={`${status === "active" && "bg-[#47C363]"} 
            ${status === "inactive" && "bg-[#C3BE47]"} 
            ${status === "blocked" && "bg-[#C34747]"} 
            px-2 py-1 rounded-md text-[12px] text-white`}
                    >
                        {status}
                    </button>
                </td>
                <td className="">
                    <button
                        // onClick={() => userDetails(name)}
                        className="bg-[#6777EF] px-2 py-1 rounded-md text-[12px] text-white"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    >
                        Details
                    </button>

                    <div
                        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog relative w-auto pointer-events-none">
                            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                    <h5
                                        className="text-xl font-medium leading-normal text-gray-800"
                                        id="exampleModalLabel"
                                    >
                                        {name}
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body relative p-4">
                                    {email}.{country}.{status}
                                </div>
                                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                    <button
                                        type="button"
                                        className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    );
};
