import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const InternetBanking = ({ internetBanking }) => {
    const [selectedMethod, setSelectedMethod] = useState("");
    const [notify, setNotify] = useState(false)
    // console.log('internetBanking', internetBanking)
    const handleCheckboxChange = (e) => {
        setSelectedMethod(e.target.value);
        // console.log('selected method', e.target.value)
    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log('data', data)
        const formData = new FormData();
        formData.append("paymentMethod", "Internet-Banking");
        formData.append("paymentFor", selectedMethod);
        formData.append("amountToAdd", data.amountToAdd);
        formData.append("selectBank", data.selectBank);
        formData.append("accountNumber", data.accountNumber);
        formData.append("customerAccountNumber", data.customerAccountNumber);
        formData.append("internetBankingProof", data.internetBankingProof[0])

        const img = data.internetBankingProof[0];
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
                    const url = `http://localhost:5000/api/v1/top-up/internet-banking`;
                    fetch(url, {
                        method: "POST",
                        headers: {
                            // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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
                                setNotify(true)
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
    return (
        <>

            <div className="mx-2 bg-slate-100 rounded-md mt-8 px-4 py-6 border border-[#92929242] shadow-lg">
                <h3 className='text-xl font-medium text-center md:my-4'> Internet Banking</h3>
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
                    {/* Select Bank */}
                    <div className='grid md:grid-cols-2  gap-4  '>
                        <div className="payment-title">Select Bank *</div>
                        <div className="">
                            <select
                                className="w-auto  pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                                type="text"
                                placeholder="20,000"
                                {...register("selectBank", {
                                    required: {
                                        value: true,
                                        message: "This is required"
                                    }
                                })}
                            >
                                <option selected>Select From List</option>
                                <option value="Dhaka Bank">Dhaka Bank</option>
                                <option value="City Bank">City Bank</option>
                                <option value="Eastern Bank">Eastern Bank</option>
                                <option value="Prime Bank">Prime Bank</option>
                                <option value="DBBL">DBBL</option>
                                <option value="SIBL">SIBL</option>
                                <option value="HSBC">HSBC</option>
                            </select>
                            <small className="text-[#FF4B2B] custom_font custom_font_size">
                                {errors.amountToAdd?.type === "required" && (
                                    <span className="label-text-alt text-red-500 ">
                                        {errors.amountToAdd.message}
                                    </span>)}
                            </small>
                        </div>

                    </div>
                    <hr className='my-2' />
                    {/* accountNumber */}
                    <div className='grid md:grid-cols-2  gap-4  '>
                        <div className="payment-title">Account Number *</div>
                        <div className="">
                            <input
                                className="w-auto  pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                                type="text"
                                placeholder="please put your bank account number"
                                {...register("accountNumber", {
                                    required: {
                                        value: true,
                                        message: "This is required"
                                    },
                                    pattern: {
                                        value: /^[0-9]*$/,
                                        message: "Only number is valid"
                                    }
                                })}
                            />
                            <small className="text-[#FF4B2B] custom_font custom_font_size">
                                {errors.accountNumber?.type === "required" && (
                                    <span className="label-text-alt text-red-500 ">
                                        {errors.accountNumber.message}
                                    </span>)}
                                {errors.accountNumber?.type === "pattern" && (
                                    <span className="label-text-alt text-red-500 ">
                                        {errors.accountNumber.message}
                                    </span>)}
                            </small>
                        </div>

                    </div>
                    <hr className='my-2' />

                    {/* customer account no */}
                    <div className='grid md:grid-cols-2  gap-4  '>
                        <div className="payment-title">Customer Account Number *</div>
                        <div className="">
                            <select
                                className="w-auto  pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                                type="text"
                                placeholder="please put your bank account number"
                                {...register("customerAccountNumber", {
                                    required: {
                                        value: true,
                                        message: "This is required"
                                    },
                                })}
                            >
                                <option selected value="Dhaka Bank (2050 3659 5845 754)">
                                    Dhaka Bank (2050 3659 5845 754)
                                </option>
                                <option value="HSBC (2050 3659 5845 754)">
                                    HSBC (2050 3659 5845 754)
                                </option>
                                <option value="DBBL (2050 3659 5845 754)">
                                    DBBL (2050 3659 5845 754)
                                </option>
                            </select>
                            <small className="text-[#FF4B2B] custom_font custom_font_size">
                                {errors.customerAccountNumber?.type === "required" && (
                                    <span className="label-text-alt text-red-500 ">
                                        {errors.customerAccountNumber.message}
                                    </span>)}
                            </small>
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
                                {...register("internetBankingProof", {
                                    required: {
                                        value: true,
                                        message: "This is required"
                                    }
                                })}
                            />
                            <small className="text-[#FF4B2B] custom_font custom_font_size">
                                {errors.internetBankingProof?.type === "required" && (
                                    <span className="label-text-alt text-red-500 ">
                                        {errors.internetBankingProof.message}
                                    </span>)}
                            </small>
                        </div>

                    </div>



                    <hr className='my-2' />
                    <div className='grid md:grid-cols-2  gap-4  '>

                        <div></div>
                        <div>
                            <input type="submit" value="CONFIRM" className='payment-btn ml-5 text-white bg-green-600 cursor-pointer hover:shadow-2xl px-6 py-2 rounded shadow' />
                        </div>

                    </div>
                    <div className='grid md:grid-cols-2  gap-4 mt-6'>

                        <div></div>
                        {notify && <div className="bg-orange-600 shadow-lg px-8 py-4 text-white rounded ">
                            <p className="payment-alert">
                                Thank you for Your Payment. We will notify you after verification.
                            </p>
                        </div>}


                    </div>
                </form>
            </div>
        </>
    )
}

export default InternetBanking