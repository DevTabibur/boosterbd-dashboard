import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CreateAdAccount = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data, e) => {
        // console.log(data);
        const url = `http://localhost:5000/api/v1/ad-account`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log("add account done", data);
                if (data.code === 400 || data.code === 401 || data.code === 403) {
                    Swal.fire({
                        title: data?.status,
                        text: data?.error,
                        icon: "error",
                    });
                } else {
                    Swal.fire({
                        title: data?.status,
                        text: "Successfully Created Account",
                        icon: "success",
                    });
                    reset();
                }
            });
    };

    return (
        <div className="mt-24">
            <div className="grid md:grid-cols-1 my-0 mx-4">
                <div className="md:flex block  items-center justify-between pr-10 mt-5">
                    <button className="bg-[#DBDEE4] md:text-[16px] text-[12px] font-bold border border-[#7A8489] rounded-xl px-[20px] py-[12px]">
                        Create Ad Account
                    </button>

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
                                <Link to="/ad-account-requests">Add All Accounts</Link>
                            </li>
                            <li className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-[#8FD59E]">
                                Rejected Ad Accounts
                            </li>
                            <li className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-[#8FD59E]">
                                Pending Ad Accounts
                            </li>
                            <li className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-[#8FD59E]">
                                Approve Ad Accounts
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mx-auto mt-12">
                    <div className=" w-full rounded-lg  shadow-lg bg-[#DBDEE4]">
                        <div className="bg-white">
                            <h3 className="text-xl font-semibold text-center border p-4">
                                Create Ad Account
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className=" px-12 grid md:grid-cols-2 gap-4  py-6">
                                {/* account name */}
                                <div>
                                    <label className="text-sm font-semibold">
                                        Add Account Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-1 text-xl  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 
                         focus:bg-white focus:border-gray-600 focus:outline-none"
                                        placeholder="Add Account Name"
                                        {...register("addAccountName", {
                                            required: {
                                                value: true,
                                                message: "Ad Account Name is required",
                                            },
                                        })}
                                    />
                                    <label className="flex justify-between items-center">
                                        {errors.addAccountName?.type === "required" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.addAccountName.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                                {/* ad account number */}
                                <div>
                                    <label className="text-sm font-semibold">
                                        Add Account Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-1 text-xl  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 
                         focus:bg-white focus:border-gray-600 focus:outline-none"
                                        placeholder="Add Account Number"
                                        {...register("addAccountNumber", {
                                            required: {
                                                value: true,
                                                message: "Ad Account Number is required",
                                            },
                                        })}
                                    />
                                    <label className="flex justify-between items-center">
                                        {errors.addAccountNumber?.type === "required" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.addAccountNumber.message}
                                            </span>
                                        )}
                                    </label>
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
                                    className="px-6 py-2 text-white bg-[#26C536] rounded"
                                    value="CREATE ACCOUNT"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAdAccount;
