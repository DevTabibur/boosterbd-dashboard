import React from 'react'

const InternationalGateway = () => {
  return (
    <>
        <div className="w-full grid grid-cols-3 gap-4 md:w-1/2 bg-slate-100 rounded-md mt-8 px-4 py-6 border border-black">
                        <div></div>
                        <div className="col-span-2">
                            <input
                                className="mr-2"
                                type="checkbox"
                                name="case"
                                id="InternationalPaymentGetway"
                            />
                            <label
                                className="payment-title"
                                htmlFor="InternationalPaymentGetway"
                            >
                                International Payment Getway
                            </label>
                        </div>

                        <div className="payment-title">Payment For</div>
                        <div className="col-span-2">
                            <input className="mr-2" type="checkbox" name="" id="Httpool" />
                            <label className="payment-title" htmlFor="Httpool">
                                Httpool
                            </label>
                            <input className="ml-8 mr-2" type="checkbox" name="" id="BDT" />
                            <label className="payment-title" htmlFor="BDT">
                                BDT
                            </label>
                        </div>

                        <div className="payment-text">Amount to Add</div>
                        <div className="col-span-2">
                            <input
                                className="md:w-56 pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                                type="text"
                                value="2000"
                                placeholder="Enter value"
                                name=""
                                id=""
                            />
                        </div>

                        <div className="payment-text">Select Payment Method</div>
                        <div className="col-span-2">
                            <input className="mr-2" type="checkbox" name="" id="Wise" />
                            <label className="payment-title" htmlFor="Wise">
                                Wise
                            </label>

                            <input
                                className="mr-2 ml-8"
                                type="checkbox"
                                name=""
                                id="Payoneer"
                            />
                            <label className="payment-title" htmlFor="Payoneer">
                                Payoneer
                            </label>
                        </div>

                        <div className="payment-text">Account mail</div>
                        <div className="col-span-2">
                            <input
                                className="md:w-56 pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                                type="text"
                                value=""
                                placeholder="account01@mail.com"
                                name=""
                                id=""
                            />
                        </div>

                        <div className="payment-text">Customer Account mail</div>
                        <div className="col-span-2">
                            <input
                                className="md:w-56 pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                                type="text"
                                value=""
                                placeholder="Customar01@gmail.com"
                                name=""
                                id=""
                            />
                        </div>

                        <div className="payment-text">Upload Payment Proof</div>
                        <div className="col-span-2">
                            <label
                                htmlFor="Attach_Screenshot_pic"
                                className="md:w-56 block cursor-pointer pl-4 py-2 rounded-lg ml-5 border-2 outline-none border-zinc-400"
                            >
                                Attach Screenshot
                            </label>
                            <input
                                className="hidden"
                                type="file"
                                value=""
                                placeholder="2205 01 2546 9875"
                                name=""
                                id="Attach_Screenshot_pic"
                            />
                        </div>
                        <div></div>

                        <div className="col-span-2">
                            <button className="payment-btn ml-5">Confirm</button>
                        </div>
                        <div></div>
                        <div className="col-span-3 md:col-span-2">
                            <p className="payment-alert">
                                Thank you for Your Payment. We will notify you after verification.
                            </p>
                        </div>
                    </div>
    </>
  )
}

export default InternationalGateway