import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useStateContext } from "../../../contexts/ContextProvider";
import useActiveUser from '../../../Hooks/useActiveUser'

const CreateAdAccount = () => {
    const { currentColor } = useStateContext()
    const [activeUser, isLoading] = useActiveUser()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data, e) => {
        const body = {
            addAccountName: "",
            addAccountNumber: "",
            companyWebsite: data?.companyWebsite,
            pageID: data?.pageID,
            pageLink: data?.pageLink,
            pageName: data?.pageName,
            phoneNumber: activeUser?.phoneNumber
        }
        // console.log('body', body)
        const url = `https://boosterbd-server.onrender.com/api/v1/ad-account/`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log("add account done", data);
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
                        text: "Successfully Created Account Request",
                        icon: "success",
                    });
                    reset();
                }
            });
    };

    return (
        <div className="mt-24">
            <div className="grid md:grid-cols-1 my-0 mx-4">

                <div className="mx-auto mt-12">
                    <div className=" w-full rounded-lg  shadow-lg bg-[#DBDEE4]">
                        <div className="bg-white">
                            <h3 className="text-xl font-semibold text-center border p-4">
                                Create Ad Account
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className="text-center mt-4" style={{ color: currentColor }}>**Add account name and number is given by admin**</p>
                            <div className=" px-12 grid md:grid-cols-2 gap-4  py-6">

                                {/* account name */}
                                <div className="cursor-not-allowed">
                                    <label className="text-sm font-semibold">
                                        Add Account Name
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        className="cursor-not-allowed form-control block w-full px-4 py-1 text-xl  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 
                         focus:bg-white focus:border-gray-600 focus:outline-none"
                                        placeholder="Add Account Name"
                                        {...register("addAccountName")}
                                    />
                                </div>
                                {/* ad account number */}
                                <div className="cursor-not-allowed">
                                    <label className="text-sm font-semibold">
                                        Add Account Number
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        className="cursor-not-allowed form-control block w-full px-4 py-1 text-xl  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 
                         focus:bg-white focus:border-gray-600 focus:outline-none"
                                        placeholder="Add Account Number"
                                        {...register("addAccountNumber")}
                                    />
                                </div>
                                {/* page name */}
                                <div>
                                    <label className="text-sm font-semibold">
                                        Page Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-1 text-xl  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 
                         focus:bg-white focus:border-gray-600 focus:outline-none"
                                        placeholder="Page Name"
                                        {...register("pageName", {
                                            required: {
                                                value: true,
                                                message: "Page Name is required",
                                            },
                                        })}
                                    />
                                    <label className="flex justify-between items-center">
                                        {errors.pageName?.type === "required" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.pageName.message}
                                            </span>
                                        )}
                                    </label>
                                </div>

                                {/* page link */}
                                <div>
                                    <label className="text-sm font-semibold">
                                        Page Link
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-1 text-xl  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 
                         focus:bg-white focus:border-gray-600 focus:outline-none"
                                        placeholder="Page Link"
                                        {...register("pageLink", {
                                            required: {
                                                value: true,
                                                message: "Page Link is required",
                                            },
                                        })}
                                    />
                                    <label className="flex justify-between items-center">
                                        {errors.pageLink?.type === "required" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.pageLink.message}
                                            </span>
                                        )}
                                    </label>
                                </div>

                                {/* page id */}

                                <div>
                                    <label className="text-sm font-semibold">Page ID</label>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-1 text-xl  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 
                         focus:bg-white focus:border-gray-600 focus:outline-none"
                                        placeholder="Page Page ID"
                                        {...register("pageID", {
                                            required: {
                                                value: true,
                                                message: "Page ID is required",
                                            },
                                        })}
                                    />
                                    <label className="flex justify-between items-center">
                                        {errors.pageID?.type === "required" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.pageID.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                                {/* company website */}

                                <div>
                                    <label className="text-sm font-semibold">
                                        Company Website
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-1 text-xl  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 
                         focus:bg-white focus:border-gray-600 focus:outline-none"
                                        placeholder="Company Website"
                                        {...register("companyWebsite")}
                                    />
                                </div>
                            </div>
                            <div className=" text-end p-6 mr-4">
                                <input
                                    type="submit"
                                    className="px-6 py-2 text-white  rounded cursor-pointer hover:shadow-2xl"
                                    value="CREATE ACCOUNT"
                                    style={{ backgroundColor: currentColor }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default CreateAdAccount;
