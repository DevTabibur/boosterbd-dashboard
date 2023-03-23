import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useStateContext } from '../../contexts/ContextProvider';
import useActiveUser from '../../Hooks/useActiveUser';
import useCheckVerify from '../../Hooks/useCheckVerify';
import Button from '../Button';
import Loader from '../Loader/Loader';

const Cash = () => {
    const { currentColor } = useStateContext();
    const [activeUser, isLoading] = useActiveUser()
    const [verifyUser, verifyLoading] = useCheckVerify(activeUser?._id)


    const [selectedMethod, setSelectedMethod] = useState("");
    const [handlePaidToSelected, setHandlePaidToSelected] = useState("")
    const [notify, setNotify] = useState(false)
    const [verifiedUser, setVerifiedUser] = useState(false)

    // console.log('activeUser', activeUser?.phoneNumber)





    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleCheckboxChange = (event) => {
        setSelectedMethod(event.target.value);

    };
    const handlePaidTo = (event) => {
        setHandlePaidToSelected(event.target.value);
    };

    const onSubmit = async (data, e) => {
        const formData = new FormData();
        formData.append("paymentMethod", "cash");
        formData.append("phoneNumber", activeUser?.phoneNumber)
        formData.append("paymentFor", selectedMethod);
        formData.append("handlePaidToSelected", handlePaidToSelected);
        formData.append("amountToAdd", data.amountToAdd);
        formData.append("cashProof", data.cashProof[0])


        const img = data.cashProof[0];
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
                if (parseFloat(img.size / (1024 * 1024)) >= 0.3) {
                    // img size should be under 5 mb
                    // perform operation
                    Swal.fire({
                        title: "File Size must be smaller than 300KB",
                        icon: "warning",
                    });
                    return false;
                } else {
                    // console.log("everything is perfect");
                    // everything is perfect
                    const url = `https://boosterbd-server.onrender.com/api/v1/top-up/cash`;
                    fetch(url, {
                        method: "POST",
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
                            }
                            else if (data.code === 401) {
                                Swal.fire({
                                    title: data?.message,
                                    text: data?.error,
                                    icon: "warning",
                                });
                            }
                            else if (data.code === 403) {
                                Swal.fire({
                                    title: data?.message,
                                    text: data?.error,
                                    icon: "warning",
                                });
                            }
                            else {
                                setNotify(true)
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


    // if (verifyLoading || isLoading) {
    //     return <Loader />
    // }


    return (
        <>
            <div className="mx-2 bg-slate-100 rounded-md mt-8 px-4 py-6 border border-[#92929242] shadow-lg">
                <h3 className='text-xl font-medium text-center md:my-4'> Cash</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* payment for */}

                    <div className='grid md:grid-cols-2  gap-4  '>
                        <div className="payment-title">Payment For</div>
                        <div className="">
                            <input className="mr-2" type="radio" name="" id="Httpool" required defaultValue="Httpool" onChange={handleCheckboxChange} checked={selectedMethod === "Httpool"} />
                            <label className="payment-title" htmlFor="Httpool">
                                Httpool
                            </label>
                            <input className="ml-8 mr-2" type="radio" name="" id="BDT" required defaultValue="BDT" onChange={handleCheckboxChange} checked={selectedMethod === "BDT"} />
                            <label className="payment-title" htmlFor="BDT">
                                BDT
                            </label>
                        </div>
                    </div>
                    <hr className='my-2' />
                    {/* amount to add */}
                    <div className='grid md:grid-cols-2  gap-4  '>
                        <div className="payment-title">Amount to Add *</div>
                        <div className="">
                            <input
                                className="w-auto  pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                                type="text"
                                placeholder="20,000"
                                {...register("amountToAdd", {
                                    required: {
                                        value: true,
                                        message: "This is required"
                                    }
                                })}
                            />
                            <small className="text-[#FF4B2B] custom_font custom_font_size">
                                {errors.amountToAdd?.type === "required" && (
                                    <span className="label-text-alt text-red-500 ">
                                        {errors.amountToAdd.message}
                                    </span>)}
                            </small>
                        </div>

                    </div>
                    <hr className='my-2' />


                    {/* paid to */}
                    <div className='grid md:grid-cols-2  gap-4  '>

                        <div className="payment-text">Paid To</div>
                        <div className="">
                            <input className="mr-2" type="radio" name="" id="Noman" defaultValue="Noman" onChange={handlePaidTo} checked={handlePaidToSelected === "Noman"} />
                            <label className="payment-title" htmlFor="Noman">
                                Noman
                            </label>
                            <span className="mx-8">
                                <input className="mr-2" type="radio" name="" id="Arif" defaultValue="Arif" onChange={handlePaidTo} checked={handlePaidToSelected === "Arif"} />
                                <label className="payment-title" htmlFor="Arif">
                                    Arif
                                </label>
                            </span>
                            <input className="mr-2" type="radio" name="" id="Sabib" defaultValue="Sabib" onChange={handlePaidTo} checked={handlePaidToSelected === "Sabib"} />
                            <label className="payment-title" htmlFor="Sabib">
                                Sabib
                            </label>
                        </div>

                    </div>
                    <hr className='my-2' />
                    {/* attach screen shot */}
                    <div className='grid md:grid-cols-2  gap-4  '>

                        <div className="payment-text">Attach Proof (screenshot) *</div>
                        <div className="">
                            <input
                                className="w-auto sm:w-1/2  pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                                type="file"
                                {...register("cashProof", {
                                    required: {
                                        value: true,
                                        message: "This is required"
                                    }
                                })}
                            />
                            <small className="text-[#FF4B2B] custom_font custom_font_size">
                                {errors.cashProof?.type === "required" && (
                                    <span className="label-text-alt text-red-500 ">
                                        {errors.cashProof.message}
                                    </span>)}
                            </small>
                        </div>

                    </div>
                    <hr className='my-2' />
                    <div className='grid md:grid-cols-2  gap-4  '>

                        <div></div>
                        {verifyUser?.profile === "verified" && <div >

                            <input
                                type="submit"
                                value={"CONFIRM"}
                                className={`payment-btn ml-5 text-white bg-${currentColor} cursor-pointer hover:shadow-2xl px-6 py-2 rounded shadow`}
                                style={{ backgroundColor: currentColor }}
                            />
                        </div>}



                    </div>
                    <div className='grid md:grid-cols-2  gap-4 mt-6'>

                        <div></div>
                        {notify && <div className="shadow-lg px-8 py-4 text-white rounded " style={{ backgroundColor: currentColor }}>
                            <p className="payment-alert">
                                Thank you for Your Payment. We will notify you after verification.
                            </p>
                        </div>}
                        {verifyUser?.profile === "unverified" && <div className="shadow-lg px-8 py-4 text-white rounded " style={{ backgroundColor: currentColor }}>
                            <p className="payment-alert">
                                Please make your <a href='/setting' className='text-lg font-bold underline text-black'>profile</a> completed and wait for verification. Thank You
                            </p>
                        </div>}


                    </div>
                </form>
            </div>
        </>
    )
}

export default Cash