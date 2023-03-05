import React from 'react'

const Cash = () => {
    return (
        <>
            <div className="w-full grid grid-cols-3 gap-4 md:w-1/2 bg-slate-100 rounded-md mt-8 px-4 py-6 border border-black">
                <div></div>
                <div className="col-span-2">
                    <input className="mr-2" type="checkbox" name="case" id="case" />
                    <label className="payment-title" htmlFor="case">
                        Case
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
                        className="w-auto md:w-56 pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                        type="text"
                        placeholder="20,000"
                        name=""
                        id=""
                    />
                </div>

                <div className="payment-text">Paid To</div>
                <div className="col-span-2">
                    <input className="mr-2" type="checkbox" name="" id="Noman" />
                    <label className="payment-title" htmlFor="Noman">
                        Noman
                    </label>
                    <span className="mx-8">
                        <input className="mr-2" type="checkbox" name="" id="Arif" />
                        <label className="payment-title" htmlFor="Arif">
                            Arif
                        </label>
                    </span>
                    <input className="mr-2" type="checkbox" name="" id="Sabib" />
                    <label className="payment-title" htmlFor="Sabib">
                        Sabib
                    </label>
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

export default Cash