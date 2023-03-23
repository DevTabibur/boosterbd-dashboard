

import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Swal from "sweetalert2";
import { useStateContext } from "../../contexts/ContextProvider";
import useActiveUser from "../../Hooks/useActiveUser";
import useSingleUserByID from "../../Hooks/useSingleUserByID";
import Progress from "../Progress/Progress";

const Profile = () => {
    const { currentColor } = useStateContext()
    const [completionPercentage, setCompletionPercentage] = useState(0);
    const [activeUser, isLoading] = useActiveUser();
    const { email, _id } = activeUser;
    const [singleUser] = useSingleUserByID(activeUser?._id);
    // console.log("singleUser", singleUser);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();


    const [nameFieldComplete, setNameFieldComplete] = useState(false);
    const [imageURLFieldComplete, setImageURLFieldComplete] = useState(false);
    const [emailFieldComplete, setEmailFieldComplete] = useState(false);
    const [phoneNumberFieldComplete, setPhoneNumberFieldComplete] = useState(false);
    const [addressFieldComplete, setAddressFieldComplete] = useState(false);
    const [whatsappNumberFieldComplete, setWhatsappNumberFieldComplete] = useState(false);
    const [behanceFieldComplete, setBehanceFieldComplete] = useState(false);
    const [companyWebsiteFieldComplete, setCompanyWebsiteFieldComplete] = useState(false);
    const [linkedInProfileFieldComplete, setLinkedInProfileFieldComplete] = useState(false);
    const [githubProfileFieldComplete, setGithubProfileFieldComplete] = useState(false);
    const [nidFieldComplete, setNidFieldComplete] = useState(false);
    const [binFieldComplete, setBinFieldComplete] = useState(false);
    const [tinFieldComplete, setTinFieldComplete] = useState(false);
    const [binFileFieldComplete, setBinFileFieldComplete] = useState(false);
    const [nidFileFieldComplete, setNidFileFieldComplete] = useState(false);
    const [tinFileFieldComplete, setTinFileFieldComplete] = useState(false);

    useEffect(() => {
        const numFields = 16;
        const fieldsCompleted =
            (nameFieldComplete ? 1 : 0) +
            (imageURLFieldComplete ? 1 : 0) +
            (emailFieldComplete ? 1 : 0) +
            (phoneNumberFieldComplete ? 1 : 0) +
            (addressFieldComplete ? 1 : 0) +
            (whatsappNumberFieldComplete ? 1 : 0) +
            (behanceFieldComplete ? 1 : 0) +
            (companyWebsiteFieldComplete ? 1 : 0) +
            (linkedInProfileFieldComplete ? 1 : 0) +
            (githubProfileFieldComplete ? 1 : 0) +
            (nidFieldComplete ? 1 : 0) +
            (binFieldComplete ? 1 : 0) +
            (tinFieldComplete ? 1 : 0) +
            (binFileFieldComplete ? 1 : 0) +
            (nidFileFieldComplete ? 1 : 0) +
            (tinFileFieldComplete ? 1 : 0);
        const newCompletionPercentage = (fieldsCompleted / numFields) * 100;
        setCompletionPercentage(newCompletionPercentage);

    }, [nameFieldComplete, imageURLFieldComplete, emailFieldComplete, phoneNumberFieldComplete, addressFieldComplete, whatsappNumberFieldComplete, behanceFieldComplete, companyWebsiteFieldComplete, linkedInProfileFieldComplete, githubProfileFieldComplete, nidFieldComplete, binFieldComplete, tinFieldComplete, binFileFieldComplete, nidFileFieldComplete, tinFileFieldComplete])


    const onSubmit = async (data, e) => {

        const handleName = watch("name");
        const handleImageURL = watch("imageURL");
        const handleEmail = watch("email");
        const handlePhoneNumber = watch("phoneNumber");
        const handleAddress = watch("address");
        const handleWhatsappNumber = watch("whatsappNumber");
        const handleBehance = watch("behance");
        const handleCompanyWebsite = watch("companyWebsite");
        const handleLinkedInProfile = watch("linkedInProfile");
        const handleGithubProfile = watch("githubProfile");
        const handleNid = watch("nid");
        const handleTin = watch("tin");
        const handleBin = watch("bin");
        const handleBinFile = watch("binFile");
        const handleTinFile = watch("tinFile");
        const handleNidFile = watch("nidFile");

        if (handleName) {
            setNameFieldComplete(true)
        }
        if (handleImageURL) {
            setImageURLFieldComplete(true)
        }
        if (handleEmail) {
            setEmailFieldComplete(true)
        }
        if (handlePhoneNumber) {
            setPhoneNumberFieldComplete(true)
        }
        if (handleAddress) {
            setAddressFieldComplete(true)
        }
        if (handleWhatsappNumber) {
            setWhatsappNumberFieldComplete(true)
        }
        if (handleBehance) {
            setBehanceFieldComplete(true)
        }
        if (handleCompanyWebsite) {
            setCompanyWebsiteFieldComplete(true)
        }
        if (handleLinkedInProfile) {
            setLinkedInProfileFieldComplete(true)
        }
        if (handleGithubProfile) {
            setGithubProfileFieldComplete(true)
        }
        if (handleNid) {
            setNidFieldComplete(true)
        }
        if (handleTin) {
            setTinFieldComplete(true)
        }
        if (handleBin) {
            setBinFieldComplete(true)
        }
        if (handleBinFile) {
            setBinFileFieldComplete(true)
        }
        if (handleTinFile) {
            setTinFileFieldComplete(true)
        }
        if (handleNidFile) {
            setNidFileFieldComplete(true)
        }

        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("name", data.name);
        formData.append("phoneNumber", singleUser?.phoneNumber);
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
        formData.append("completionRate", completionPercentage)
        if (data?.binFile.length > 0) {
            formData.append("binFile", data?.binFile[0]);
        }
        if (data?.tinFile.length > 0) {
            formData.append("tinFile", data?.tinFile[0]);
        }
        if (data?.nidFile.length > 0) {
            formData.append("nidFile", data?.nidFile[0]);
        }

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
                if (parseFloat(img.size / (1024 * 1024)) >= 2) {
                    // img size should be under 5 mb
                    // perform operation
                    Swal.fire({
                        title: "File Size must be smaller than 2MB",
                        icon: "warning",
                    });
                    return false;
                } else {
                    // console.log("everything is perfect");
                    // everything is perfect
                    const url = `https://boosterbd-server.onrender.com/api/v1/user/register/${_id}`;
                    fetch(url, {
                        method: "PUT",
                        headers: {
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                        body: formData,
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log("data posted", data);
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
                                window.location.reload();
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
            <section className="main-right   min-h-screen bg-[#d9edff] ">
                <div className="pt-[75px] md:pl-[50px] pl-5 md:flex items-center">
                    <div className="w-[281.21px] h-[281.21px] rounded-full bg-white overflow-hidden">
                        {singleUser?.imageURL ? (
                            <img
                                width={280}
                                height={280}
                                src={`https://boosterbd-server.onrender.com/${singleUser?.imageURL}`}
                                alt=""
                            />
                        ) : (
                            <img
                                width={280}
                                height={280}
                                src={"/images/profile.jpeg"}
                                alt="demo"
                            />
                        )}
                    </div>
                    <div className="md:ml-[100px] mt-5">
                        {singleUser?.completionRate ? <p>Profile Completed {singleUser?.completionRate}%</p> : <p>Please complete your account for next steps</p>}

                    </div>
                </div>

                <section className="grid grid-cols-12 px-5 md:pl-[50px] mt-[26px] pb-10">
                    <div className="lg:col-span-3 col-span-12">
                        <h1 className="text-xs font-medium text-red-700"><strong>Note: </strong>All File size should be under 5 MB</h1>
                        <div className=" bg-gray-600 h-[2px] mt-[15px] "></div>
                    </div>


                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="lg:col-span-10 col-span-12 gap-5 grid grid-cols-12 mt-5 w-full"
                    >
                        {/* name */}
                        <div className="lg:col-span-6 col-span-12">
                            <label className="text-[16.27px] font-medium">Name</label>
                            {singleUser?.name ? <input
                                type="text"
                                className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                placeholder="Name"
                                defaultValue={singleUser?.name}
                                {...register("name")}
                            /> : <input
                                type="text"
                                className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                placeholder="Name"
                                {...register("name")}
                            />}
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
                                    {...register("address")}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                                    placeholder="Address"
                                    {...register("address")}
                                />
                            )}
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
                                        {...register("phoneNumber")}
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        className="border  border-black w-full rounded-md px-3 font-medium py-1"
                                        placeholder="Phone Number"
                                        {...register("phoneNumber")}
                                    />
                                )}

                                <button className="bg-[#47C363] px-[23px] py-[6px] text-[white] font-medium md:ml-2 mt-1 rounded-lg">
                                    Verified
                                </button>
                            </div>
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
                        <div className="lg:col-span-6 col-span-12">
                            <label className="text-[16.27px] font-medium">Email</label>
                            <div className="md:flex lg:flex block items-center justify-between mt-2">
                                {singleUser?.email ? <input
                                    type="email"
                                    name="email"
                                    className="border  border-black w-full rounded-md px-3 font-medium py-1 "
                                    placeholder="Email"
                                    defaultValue={singleUser?.email}
                                    {...register("email")}
                                /> : <input
                                    type="email"
                                    name="email"
                                    className="border  border-black w-full rounded-md px-3 font-medium py-1 "
                                    placeholder="Email"
                                    {...register("email")}
                                />}

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
                                        <label
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
                                        />
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
                                        <label
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
                                        />
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
                                        <label
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
                                        />
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
                                        <label
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
                                        />
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="col-span-12 flex justify-end items-center mt-5">
                            {/* <button className="bg-[#465EED] py-[10px] px-[50px] rounded-lg text-[16px] text-white">
                                EDIT
                            </button> */}
                            <input
                                style={{ backgroundColor: currentColor }}
                                className=" ml-10 py-[10px] px-[50px] rounded-lg text-[16px] text-white cursor-pointer"
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
