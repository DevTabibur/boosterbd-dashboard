import React from 'react'

const Converter = () => {
    return (
        <>
            <div className="w-full mx-8 grid grid-cols-4 gap-4 md:w-1/2 bg-slate-100 rounded-md mt-8 px-4 py-6 border border-black">
                <div className="col-span-4">
                    <h2 className="text-center text-2xl mb-4 font-semibold">
                        Converter
                    </h2>
                </div>

                <div className="col-span-2 payment-title">
                    Available HTTPOOL Balance
                </div>
                <div className="col-span-2">
                    <p className="payment-title">: $ 180</p>
                </div>

                <div className="col-span-2 payment-title">Available BDT</div>
                <div className="col-span-2">
                    <p className="payment-title">: 2623 tk</p>
                </div>

                <div className="hidden md:block"></div>
                <div className="payment-title text-center">From</div>
                <div className="col-span-3 md:col-span-2">
                    <input className="mr-2" type="checkbox" name="" id="Httpool" />
                    <label className="payment-title" htmlFor="Httpool">
                        Httpool
                    </label>
                    <input className="ml-8 mr-2" type="checkbox" name="" id="BDT" />
                    <label className="payment-title" htmlFor="BDT">
                        BDT
                    </label>
                </div>

                <div className="hidden md:block"></div>
                <div className="payment-title text-center">To</div>
                <div className="col-span-3 md:col-span-2">
                    <input className="mr-2" type="checkbox" name="" id="Httpool" />
                    <label className="payment-title" htmlFor="Httpool">
                        Httpool
                    </label>
                    <input className="ml-8 mr-2" type="checkbox" name="" id="BDT" />
                    <label className="payment-title" htmlFor="BDT">
                        BDT
                    </label>
                </div>

                <div className="hidden md:block"></div>
                <div className="payment-text">Amount to Add</div>
                <div className="col-span-3 md:col-span-2">
                    <input
                        className="md:w-56 pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                        type="text"
                        value=""
                        placeholder="Enter value"
                        name=""
                        id=""
                    />
                </div>

                <div className="hidden md:block"></div>
                <div className="payment-text">Conversion Rate</div>
                <div className="col-span-3 md:col-span-2">
                    <input
                        className="md:w-56 pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                        type="text"
                        value=""
                        placeholder="$1 = 126 bdt"
                        name=""
                        id=""
                    />
                </div>

                <div className="hidden md:block"></div>
                <div className="payment-text">Httpool Balance</div>
                <div className="col-span-3 md:col-span-2">
                    <input
                        className="md:w-56 pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                        type="text"
                        value=""
                        placeholder="15.87 USD"
                        name=""
                        id=""
                    />
                </div>

                <div className="hidden md:block"></div>
                <div className="payment-text">Remaining BDT</div>
                <div className="col-span-3 md:col-span-2">
                    <input
                        className="md:w-56 pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                        type="text"
                        value=""
                        placeholder="195.87 $"
                        name=""
                        id=""
                    />
                </div>

                <div className="hidden md:block"></div>
                <div className="payment-text">New Httpool Balance</div>
                <div className="col-span-3 md:col-span-2">
                    <input
                        className="md:w-56 pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                        type="text"
                        value=""
                        placeholder="195.87 $"
                        name=""
                        id=""
                    />
                </div>

                <div className="col-span-2"></div>
                <div className="col-span-2">
                    <button className="payment-btn ml-5">Confirm</button>
                </div>

                <div></div>
                <div className="col-span-4 md:col-span-2">
                    <p className="payment-alert">
                        Thank you for Your Payment. We will notify you after verification.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Converter