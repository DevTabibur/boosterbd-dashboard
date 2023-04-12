

import { useState } from "react";
import useUser from "../../../Hooks/useUser";
import { Link } from "react-router-dom";

const ManageRoles = () => {
    const [users] = useUser();
    // console.log('user', users)
    return (
        <div className="mt-24">
            <div className="overflow-x-auto">
                <table className="w-full  sm:bg-white rounded-lg overflow-hidden mt-10">
                    <thead className="text-white bg-[#e2f0f74f]">
                        <tr className="text-black flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th className="p-3 text-left text-[#717D82]">SI</th>
                            <th className="p-3 text-left text-[#717D82]">Email</th>
                            <th className="p-3 text-left text-[#717D82]">Name</th>
                            <th className="p-3 text-left text-[#717D82]">Role</th>

                            <th className="p-3 text-left text-[#717D82]">Action</th>
                        </tr>
                    </thead>
                    <tbody className="flex-1 sm:flex-none">
                        {users.map((user, i) => {
                            return (
                                <tr
                                    key={i}
                                    className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
                                >
                                    <td className="text-[#464F53]   font-normal   p-3">
                                        {i + 1}
                                    </td>
                                    <td className="text-[#464F53]   font-normal   p-3 truncate">
                                        {user?.email}
                                    </td>
                                    <td className="text-[#464F53]   font-normal   p-3 ">
                                        {user?.name}
                                    </td>
                                    <td className="text-[#464F53]   font-normal   p-3 ">
                                        {user?.role}
                                    </td>
                                    <td className=" font-normal  p-3 text-red-400  cursor-pointer">
                                        <button className="bg-[#6777EF] px-3 py-2 rounded-md text-[12px] text-white">
                                            <Link
                                                to={`/users/manage/permission/${user?.email}`}
                                            >
                                                Permissions
                                            </Link>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageRoles;
