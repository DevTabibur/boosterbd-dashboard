

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useActiveUser from "../../Hooks/useActiveUser";
import useSingleUserByID from "../../Hooks/useSingleUserByID";

const Profile = () => {
    const [activeUser, isLoading] = useActiveUser();
    const { email, _id } = activeUser;
    const [singleUser] = useSingleUserByID(activeUser?._id);
    // console.log("singleUser", singleUser);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data, e) => {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("name", data.name);
        formData.append("phoneNumber", data.phoneNumber);
        formData.append("address", data.address);
        formData.append("whatsappNumber", data.whatsappNumber);
        formData.append("behance", data.behance);
        formData.append("companyWebsite", data.companyWebsite);
        formData.append("linkedInProfile", data.linkedInProfile);
        formData.append("githubProfile", data.githubProfile);
        formData.append("nid", data.nid);
        formData.append("tin", data.tin);
        formData.append("bin", data.bin);
        formData.append("imageURL", data.imageURL[0]);
        // formData.append("binFile", data.binFile[0]);
        // formData.append("tinFile", data.tinFile[0]);
        // formData.append("nidFile", data.nidFile[0]);

        const img = data.imageURL[0];
        const validExt = ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];

        if (img !== "") {
            // checking image extension
            // imageName.jpeg
            const pos_of_dot = img.name.lastIndexOf(".") + 1;
            const img_ext = img.name.substring(pos_of_dot);
            const result = validExt.includes(img_ext);

            if (result === false) {
                Swal.fire({
                    title: "Only jpg, png and jpeg files are allowed",
                    icon: "warning",
                });
                return false;
            }
            // checking image size
            else {
                if (parseFloat(img.size / (1024 * 1024)) >= 5) {
                    // img size should be under 5 mb
                    // perform operation
                    Swal.fire({
                        title: "File Size must be smaller than 5MB",
                        icon: "warning",
                    });
                    return false;
                } else {
                    // console.log("everything is perfect");
                    // everything is perfect
                    const url = `http://localhost:5000/api/v1/user/register/${_id}`;
                    fetch(url, {
                        method: "PUT",
                        headers: {
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                        body: formData,
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            // console.log("data posted", data);
                            if (data.code === 400) {
                                Swal.fire({
                                    title: data?.message,
                                    text: data?.error,
                                    icon: "error",
                                });
                            } else {
                                Swal.fire({
                                    title: data.status,
                                    text: data?.message,
                                    icon: "success",
                                });
                                reset();
                                // window.location.reload();
                            }
                        });
                }
            }
        } else {
            alert("No Image is selected");
            return false;
        }
    };
    // if (isLoading) {
    //   return <Loader />;
    // }

    return (
        <>
            <section className="main-right   min-h-screen bg-[#E6E6E6] ">
                <div className="pt-[75px] md:pl-[50px] pl-5 md:flex items-center">
                    <div className="w-[281.21px] h-[281.21px] rounded-full bg-white overflow-hidden">
                        {singleUser?.imageURL ? (
                            <img
                                width={280}
                                height={280}
                                src={`http://localhost:5000/${singleUser?.imageURL}`}
                                alt=""
                            />
                        ) : (
                            <img
                                width={280}
                                height={280}
                                src={"/images/profile.jpeg"}
                                alt=""
                            />
                        )}
                    </div>
                    <div className="md:ml-[100px] mt-5">
                        <p>Account 100% Complete</p>
                    </div>
                </div>

                <section className="grid grid-cols-12 px-5 md:pl-[50px] mt-[26px] pb-10">
                    <div className="lg:col-span-3 col-span-12">
                        <h1 className="text-[28.27px] font-medium">Super Admin</h1>
                        <div className=" bg-gray-600 h-[2px] mt-[15px] "></div>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="lg:col-span-10 col-span-12 gap-5 grid grid-cols-12 mt-5 w-full"
                    >
                        {/* name */}
                        <div className="lg:col-span-6 col-span-12">
                            <label className="text-[16.27px] font-medium">Name</label>
                            {singleUser?.name ? (
                                <input
                                    type="text"
                                    className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                    placeholder="Name"
                                    defaultValue={singleUser?.name}
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is Required",
                                        },
                                    })}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                    placeholder="Name"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is Required",
                                        },
                                    })}
                                />
                            )}
                            <label className="flex justify-between items-center">
                                {errors.name?.type === "required" && (
                                    <span className="label-text-alt text-red-600 ">
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        {/* avatar image */}
                        <div className="lg:col-span-6 col-span-12">
                            <label className="text-[16.27px] font-medium">
                                Profile Image
                            </label>
                            <input
                                type="file"
                                className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                placeholder="profile image"
                                {...register("imageURL", {
                                    required: {
                                        value: true,
                                        message: "profile image is Required",
                                    },
                                })}
                            />
                            <label className="flex justify-between items-center">
                                {errors.imageURL?.type === "required" && (
                                    <span className="label-text-alt text-red-600 ">
                                        {errors.imageURL.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        {/* address */}
                        <div className="col-span-12">
                            <label className="text-[16.27px] font-medium">
                                Address
                            </label>
                            {singleUser?.address ? (
                                <input
                                    type="text"
                                    className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                    placeholder="Address"
                                    defaultValue={singleUser?.address}
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: "Address is Required",
                                        },
                                    })}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                    placeholder="Address"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: "Address is Required",
                                        },
                                    })}
                                />
                            )}

                            <label className="flex justify-between items-center">
                                {errors.address?.type === "required" && (
                                    <span className="label-text-alt text-red-600 ">
                                        {errors.address.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        {/* phoneNumber */}
                        <div className="lg:col-span-6 col-span-12">
                            <label className="text-[16.27px] font-medium">
                                Phone Number
                            </label>
                            <div className="md:flex lg:flex block items-center mt-2">
                                {singleUser?.phoneNumber ? (
                                    <input
                                        type="text"
                                        className="border  border-black w-full rounded-md px-3 font-medium py-1"
                                        placeholder="Phone Number"
                                        defaultValue={singleUser?.phoneNumber}
                                        {...register("phoneNumber", {
                                            required: {
                                                value: true,
                                                message: "Phone Number is Required",
                                            },
                                        })}
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        className="border  border-black w-full rounded-md px-3 font-medium py-1"
                                        placeholder="Phone Number"
                                        {...register("phoneNumber", {
                                            required: {
                                                value: true,
                                                message: "Phone Number is Required",
                                            },
                                        })}
                                    />
                                )}

                                <button className="bg-[#47C363] px-[23px] py-[6px] text-[white] font-medium md:ml-2 mt-1 rounded-lg">
                                    Verified
                                </button>
                            </div>
                            <label className="flex justify-between items-center">
                                {errors.phoneNumber?.type === "required" && (
                                    <span className="label-text-alt text-red-600 ">
                                        {errors.phoneNumber.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        {/* behance */}
                        <div className="lg:col-span-6 col-span-12">
                            <label className="text-[16.27px] font-medium">
                                Behance
                            </label>
                            {singleUser?.behance ? (
                                <input
                                    type="text"
                                    className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                    placeholder="Behance Link"
                                    defaultValue={singleUser?.behance}
                                    {...register("behance")}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                    placeholder="Behance Link"
                                    {...register("behance")}
                                />
                            )}
                        </div>
                        {/* whatsappNumber */}
                        <div className="lg:col-span-6 col-span-12">
                            <label className="text-[16.27px] font-medium">
                                Whatsapp Number
                            </label>
                            <div className="md:flex lg:flex block items-center justify-between mt-2">
                                {singleUser?.whatsappNumber ? (
                                    <>
                                        <input
                                            type="text"
                                            className="border  border-black w-full rounded-md px-3 font-medium py-1"
                                            placeholder="Whatsapp Number"
                                            defaultValue={singleUser?.whatsappNumber}
                                            {...register("whatsappNumber")}
                                        />
                                        <button className="bg-[#7A8489] w-[122px] px-[8px] py-[6px] text-[white] font-medium md:ml-2 mt-1 rounded-lg flex">
                                            Verify Now
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            type="text"
                                            className="border  border-black w-full rounded-md px-3 font-medium py-1"
                                            placeholder="Whatsapp Number"
                                            {...register("whatsappNumber")}
                                        />
                                        <button className="bg-[#7A8489] w-[122px] px-[8px] py-[6px] text-[white] font-medium md:ml-2 mt-1 rounded-lg flex">
                                            Verify Now
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                        {/* company website */}
                        <div className="lg:col-span-6 col-span-12">
                            <label className="text-[16.27px] font-medium">
                                Company Website
                            </label>
                            {singleUser?.companyWebsite ? (
                                <input
                                    type="text"
                                    className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                    placeholder="Company Website"
                                    defaultValue={singleUser?.companyWebsite}
                                    {...register("companyWebsite")}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                    placeholder="Company Website"
                                    {...register("companyWebsite")}
                                />
                            )}
                        </div>
                        {/* email */}
                        <div className="lg:col-span-6 col-span-12 cursor-not-allowed">
                            <label className="text-[16.27px] font-medium">Email</label>
                            <div className="md:flex lg:flex block items-center justify-between mt-2">
                                <input
                                    type="text"
                                    name="email"
                                    className="border  border-black w-full rounded-md px-3 font-medium py-1 cursor-not-allowed"
                                    placeholder="Email"
                                    defaultValue={email}
                                    readOnly
                                    {...register("email")}
                                />
                                <button className="bg-[#7A8489] w-[122px] px-[8px] py-[6px] text-[white] font-medium md:ml-2 mt-1 rounded-lg flex">
                                    Verify Now
                                </button>
                            </div>
                        </div>
                        {/* nid */}
                        <div className="lg:col-span-6 col-span-12">
                            <label className="text-[16.27px] font-medium">NID</label>
                            <div className="md:flex lg:flex block items-center justify-between mt-2">
                                {singleUser?.nid ? (
                                    <>
                                        <input
                                            type="text"
                                            className="border  border-black w-full rounded-md px-3 font-medium py-1"
                                            placeholder="Nid"
                                            name="nid"
                                            defaultValue={singleUser?.nid}
                                            {...register("nid")}
                                        />
                                        {/* <label
                        htmlFor="nid"
                        className="border bg-white border-black w-[145.02px] px-[8px] py-[6px] text-black font-medium md:ml-2 mt-1 rounded-lg flex items-center"
                      >
                        Attach File
                      </label>
                      <input
                        type="file"
                        id="nid"
                        className="hidden"
                        name="nidFile"
                        {...register("nidFile")}
                      /> */}
                                    </>
                                ) : (
                                    <>
                                        <input
                                            type="text"
                                            className="border  border-black w-full rounded-md px-3 font-medium py-1"
                                            placeholder="Nid"
                                            name="nid"
                                            {...register("nid")}
                                        />
                                        {/* <label
                        htmlFor="nid"
                        className="border bg-white border-black w-[145.02px] px-[8px] py-[6px] text-black font-medium md:ml-2 mt-1 rounded-lg flex items-center"
                      >
                        Attach File
                      </label>
                      <input
                        type="file"
                        id="nid"
                        className="hidden"
                        name="nidFile"
                        {...register("nidFile")}
                      /> */}
                                    </>
                                )}
                            </div>
                        </div>
                        {/* linkedInProfile */}
                        <div className="lg:col-span-6 col-span-12">
                            <label className="text-[16.27px] font-medium">
                                LinkdIn Profile
                            </label>
                            {singleUser?.linkedInProfile ? (
                                <input
                                    type="text"
                                    className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                    placeholder="LinkedIn Profile Link"
                                    defaultValue={singleUser.linkedInProfile}
                                    {...register("linkedInProfile")}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                    placeholder="LinkedIn Profile Link"
                                    {...register("linkedInProfile")}
                                />
                            )}
                        </div>
                        {/* tin */}
                        <div className="lg:col-span-6 col-span-12">
                            <label className="text-[16.27px] font-medium">TIN</label>
                            <div className="md:flex lg:flex block items-center justify-between mt-2">
                                {singleUser?.tin ? (
                                    <>
                                        <input
                                            type="text"
                                            className="border  border-black w-full rounded-md px-3 font-medium py-1"
                                            placeholder="TIN"
                                            name="tin"
                                            defaultValue={singleUser?.tin}
                                            {...register("tin")}
                                        />
                                        <label
                                            htmlFor="tin"
                                            className="border bg-white border-black w-[145.02px] px-[8px] py-[6px] text-black font-medium md:ml-2 mt-1 rounded-lg flex items-center"
                                        >
                                            Attach File
                                        </label>
                                        <input
                                            type="file"
                                            id="tin"
                                            name="tinFile"
                                            className="hidden"
                                            {...register("tinFile")}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <input
                                            type="text"
                                            className="border  border-black w-full rounded-md px-3 font-medium py-1"
                                            placeholder="TIN"
                                            name="tin"
                                            {...register("tin")}
                                        />
                                        {/* <label
                        htmlFor="tin"
                        className="border bg-white border-black w-[145.02px] px-[8px] py-[6px] text-black font-medium md:ml-2 mt-1 rounded-lg flex items-center"
                      >
                        Attach File
                      </label>
                      <input
                        type="file"
                        id="tin"
                        name="tinFile"
                        className="hidden"
                        {...register("tinFile")}
                      /> */}
                                    </>
                                )}
                            </div>
                        </div>
                        {/* githubProfile */}
                        <div className="lg:col-span-6 col-span-12">
                            <label className="text-[16.27px] font-medium">
                                Github Profile
                            </label>
                            {singleUser?.githubProfile ? (
                                <input
                                    type="text"
                                    className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                    placeholder="Github Profile"
                                    defaultValue={singleUser?.githubProfile}
                                    {...register("githubProfile")}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                    placeholder="Github Profile"
                                    {...register("githubProfile")}
                                />
                            )}
                        </div>
                        {/* bin */}
                        <div className="lg:col-span-6 col-span-12">
                            <label className="text-[16.27px] font-medium">BIN</label>
                            <div className="md:flex lg:flex block items-center justify-between mt-2">
                                {singleUser?.bin ? (
                                    <>
                                        <input
                                            type="text"
                                            className="border  border-black w-full rounded-md px-3 font-medium py-1"
                                            placeholder="BIN"
                                            name="bin"
                                            defaultValue={singleUser?.bin}
                                            {...register("bin")}
                                        />
                                        {/* <label
                        htmlFor="bin"
                        className="border bg-white border-black w-[145.02px] px-[8px] py-[6px] text-black font-medium md:ml-2 mt-1 rounded-lg flex items-center"
                      >
                        Attach File
                      </label>
                      <input
                        type="file"
                        id="bin"
                        className="hidden"
                        name="binFile"
                        {...register("binFile")}
                      /> */}
                                    </>
                                ) : (
                                    <>
                                        <input
                                            type="text"
                                            className="border  border-black w-full rounded-md px-3 font-medium py-1"
                                            placeholder="BIN"
                                            name="bin"
                                            {...register("bin")}
                                        />
                                        {/* <label
                        htmlFor="bin"
                        className="border bg-white border-black w-[145.02px] px-[8px] py-[6px] text-black font-medium md:ml-2 mt-1 rounded-lg flex items-center"
                      >
                        Attach File
                      </label>
                      <input
                        type="file"
                        id="bin"
                        className="hidden"
                        name="binFile"
                        {...register("binFile")}
                      /> */}
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="col-span-12 flex justify-end items-center mt-5">
                            <button className="bg-[#465EED] py-[10px] px-[50px] rounded-lg text-[16px] text-white">
                                EDIT
                            </button>
                            <input
                                className="bg-[#47C363] ml-10 py-[10px] px-[50px] rounded-lg text-[16px] text-white"
                                type="submit"
                                value="SAVE"
                            />
                        </div>
                    </form>
                </section>
            </section>
        </>
    );
};

export default Profile;
