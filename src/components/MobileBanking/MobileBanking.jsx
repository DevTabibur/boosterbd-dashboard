import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useStateContext } from '../../contexts/ContextProvider';
import useActiveUser from '../../Hooks/useActiveUser';
import useCheckVerify from '../../Hooks/useCheckVerify';

const MobileBanking = () => {
    const { currentColor } = useStateContext();
    const [activeUser, isLoading] = useActiveUser()
    const [verifyUser, verifyLoading] = useCheckVerify(activeUser?._id)


    const [selectedMethod, setSelectedMethod] = useState("");
    const [selectedPaymentWay, setSelectedPaymentWay] = useState("");
    const [notify, setNotify] = useState(false)
    // console.log('mobileBanking', mobileBanking)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const handleCheckboxChange = (event) => {
        setSelectedMethod(event.target.value);
        // console.log('payment method', event.target.value)
    };

    const handlePaymentWith = (e) => {
        setSelectedPaymentWay(e.target.value);
        // console.log('payment way', e.target.value)
        // if (e.target.value === "Upay") {
        //     console.log('upay number clicked')
        // }
    }


    const onSubmit = data => {
        // console.log(data)

        const formData = new FormData();
        formData.append("paymentMethod", "Mobile-Banking");
        formData.append("paymentFor", selectedMethod);
        formData.append("paymentWith", selectedPaymentWay);
        formData.append("amountToAdd", data.amountToAdd);
        formData.append("phoneNumber", activeUser?.phoneNumber);
        formData.append("paidTo", data.paidTo);
        formData.append("transactionID", data.transactionID);
        formData.append("senderNumber", data.senderNumber);
        formData.append("transactionScreenShot", data.transactionScreenShot[0])

        const img = data.transactionScreenShot[0];
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
                    const url = `https://boosterbd-server.onrender.com/api/v1/top-up/mobile-banking`;
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
    return (
        <>
            <div className="mx-2 bg-slate-100 rounded-md mt-8 px-4 py-6 border border-[#92929242] shadow-lg">
                <h3 className='text-xl font-medium text-center md:my-4'> Mobile Banking</h3>
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
                    {/* payment with */}
                    <div className='grid md:grid-cols-2  gap-4  '>
                        <div className="payment-title">Payment With</div>
                        <div className="">
                            <div className='grid md:grid-row-2 gap-4'>
                                <div>
                                    <input className="mr-2" type="radio" id="bKash" required defaultValue="bKash" onChange={handlePaymentWith} checked={selectedPaymentWay === "bKash"} />
                                    <label className="payment-title" htmlFor="bKash">
                                        bKash
                                    </label>
                                    <input className="mr-2 ml-8" type="radio" id="Nagad" required defaultValue="Nagad" onChange={handlePaymentWith} checked={selectedPaymentWay === "Nagad"} />
                                    <label className="payment-title" htmlFor="Nagad">
                                        Nagad
                                    </label>
                                    <input className="mr-2 ml-8" type="radio" id="Rocket" required defaultValue="Rocket" onChange={handlePaymentWith} checked={selectedPaymentWay === "Rocket"} />
                                    <label className="payment-title" htmlFor="Rocket">
                                        Rocket
                                    </label>
                                </div>
                                <div>
                                    <input className="mr-2" type="radio" id="Upay" required defaultValue="Upay" onChange={handlePaymentWith} checked={selectedPaymentWay === "Upay"} />
                                    <label className="payment-title" htmlFor="Upay">
                                        Upay
                                    </label>
                                    <input className="mr-2 ml-8" type="radio" id="mCash" required defaultValue="mCash" onChange={handlePaymentWith} checked={selectedPaymentWay === "mCash"} />
                                    <label className="payment-title" htmlFor="mCash">
                                        mCash
                                    </label>
                                    <input className="mr-2 ml-8" type="radio" id="sureCash" required defaultValue="sureCash" onChange={handlePaymentWith} checked={selectedPaymentWay === "sureCash"} />
                                    <label className="payment-title" htmlFor="sureCash">
                                        sureCash
                                    </label>
                                </div>
                            </div>
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
                            <small className="text-[#FF4B2B] ml-2">
                                {errors.amountToAdd?.type === "required" && (
                                    <span className="label-text-alt text-red-500 ">
                                        {errors.amountToAdd.message}
                                    </span>)}
                            </small>
                        </div>

                    </div>
                    <hr className='my-2' />
                    {/* sender Number */}
                    <div className='grid md:grid-cols-2  gap-4  '>
                        <div className="payment-title">Sender Number *</div>
                        <div className="">
                            <input
                                className="w-auto  pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                                type="text"
                                placeholder="+8801312-100100"
                                {...register("senderNumber", {
                                    required: {
                                        value: true,
                                        message: "This is required"
                                    },
                                    pattern: {
                                        value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                                        message: "This number isn't validate",
                                    }
                                })}
                            />
                            <small className="text-[#FF4B2B] ml-2">
                                {errors.senderNumber?.type === "required" && (
                                    <span className="label-text-alt text-red-500 ">
                                        {errors.senderNumber.message}
                                    </span>)}
                                {errors.senderNumber?.type === "pattern" && (
                                    <span className="label-text-alt text-red-500 ">
                                        {errors.senderNumber.message}
                                    </span>)}
                            </small>
                        </div>

                    </div>
                    <hr className='my-2' />


                    {/* paid to */}

                    <div className='grid md:grid-cols-2  gap-4  '>
                        <div className="payment-title">Paid To *</div>
                        <div className="">
                            <select
                                className="w-auto  pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                                type="text"
                                placeholder="+8801312-100100"
                                {...register("paidTo", {
                                    required: {
                                        value: true,
                                        message: "This is required"
                                    },
                                })}
                            >
                                {selectedPaymentWay === "bKash" && <>
                                    <option value="Bkash personal 01756063729">01756063729 (Bkash personal)</option>
                                    <option value="Bkash merchant 01749935515(1)">01749935515 (Bkash merchant 1 )</option>
                                    <option value="Bkash merchant 01722570947(2)">01722570947 (Bkash merchant 2 )</option>
                                </>}
                                {selectedPaymentWay === "Nagad" && <>
                                    <option value="Nagad 01756063729">01756063729 (Nagad)</option>
                                    <option value="Nagad merchant 01749935515">01749935515 (Nagad merchant)</option>
                                </>}
                                {selectedPaymentWay === "Rocket" && <>
                                    <option value="Rocket 017560637291">017560637291 (Rocket)</option>
                                </>}
                                {selectedPaymentWay === "Upay" && <>
                                    <option value="Upay 01756063729">01756063729 (Upay)</option>
                                </>}
                                {selectedPaymentWay === "mCash" && <><option>Number will be updated very soon</option>
                                </>}
                                {selectedPaymentWay === "sureCash" && <>
                                    <option value="SureCash 017560637294">017560637294 (SureCash)</option>
                                </>}


                            </select>

                            <small className="text-[#FF4B2B] ml-2">
                                {errors.paidTo?.type === "required" && (
                                    <span className="label-text-alt text-red-500 ">
                                        {errors.paidTo.message}
                                    </span>)}

                            </small>
                        </div>

                    </div>



                    <hr className='my-2' />
                    {/* transactionID */}
                    <div className='grid md:grid-cols-2  gap-4  '>
                        <div className="payment-title">Transaction ID</div>
                        <div className="">
                            <input
                                className="w-auto  pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                                type="text"
                                placeholder="Asdsh123Yusdj"
                                {...register("transactionID")}
                            />
                        </div>

                    </div>
                    <hr className='my-2' />
                    {/* Transaction (screenshot) */}
                    <div className='grid md:grid-cols-2  gap-4  '>
                        <div className="payment-title">Transaction (screenshot) *</div>
                        <div className="">
                            <input
                                className="w-auto  pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                                type="file"
                                placeholder='Choose a file'
                                {...register("transactionScreenShot", {
                                    required: {
                                        value: true,
                                        message: "Screenshot is required"
                                    }
                                })}
                            />
                            <small className="text-[#FF4B2B] ml-2">
                                {errors.Screenshot?.type === "required" && (
                                    <span className="label-text-alt text-red-500 ">
                                        {errors.Screenshot.message}
                                    </span>)}

                            </small>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2  gap-4  mt-6'>
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
                        {notify && <div className="bg-orange-600 shadow-lg px-8 py-4 text-white rounded " style={{ backgroundColor: currentColor }}>
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

export default MobileBanking