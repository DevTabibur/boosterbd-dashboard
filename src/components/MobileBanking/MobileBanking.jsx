import React from 'react'

const MobileBanking = () => {
    return (
        <>
            <div className="w-full grid grid-cols-3 gap-4 md:w-1/2 bg-slate-100 rounded-md mt-8 px-4 py-6 border border-black">
                <div></div>
                <div className="col-span-2">
                    <input
                        className="mr-2 rounded-lg"
                        type="checkbox"
                        name="case"
                        id="MobileBanking"
                    />
                    <label className="payment-title" htmlFor="MobileBanking">
                        Mobile Banking
                    </label>
                </div>

                <div className="payment-title">Payment For</div>
                <div className="col-span-2">
                    <input
                        className="mr-2 rounded-lg"
                        type="checkbox"
                        name=""
                        id="Httpool-1"
                    />
                    <label className="payment-title" htmlFor="Httpool-1">
                        Httpool
                    </label>
                    <input
                        className="ml-8 mr-2 rounded-lg"
                        type="checkbox"
                        name=""
                        id="BDT"
                    />
                    <label className="payment-title" htmlFor="BDT">
                        BDT
                    </label>
                </div>

                <div></div>
                <div className="col-span-2">
                    <input
                        className="mr-2 rounded-lg"
                        type="checkbox"
                        name=""
                        id="Nagad"
                    />
                    <label className="payment-title" htmlFor="Nagad">
                        Nagad
                    </label>
                    <span className="mx-8">
                        <input
                            className="mr-2 rounded-lg"
                            type="checkbox"
                            name=""
                            id="bKash"
                        />
                        <label className="payment-title" htmlFor="bKash">
                            bKash
                        </label>
                    </span>
                    <input className="mr-2" type="checkbox" name="" id="Rocket" />
                    <label className="payment-title" htmlFor="Rocket">
                        Rocket
                    </label>
                </div>

                <div></div>
                <div className="col-span-2">
                    <input className="mr-2" type="checkbox" name="" id="Upay" />
                    <label className="payment-title" htmlFor="Upay">
                        Upay
                    </label>
                    <span className="mx-8">
                        <input className="mr-2" type="checkbox" name="" id="mCash" />
                        <label className="payment-title" htmlFor="mCash">
                            mCash
                        </label>
                    </span>
                    <input className="mr-2" type="checkbox" name="" id="Sure Cash" />
                    <label className="payment-title" htmlFor="Sure Cash">
                        Sure Cash
                    </label>
                </div>

                <div className="payment-text">Amount to Add</div>
                <div className="col-span-2">
                    <input
                        className="w-auto md:w-56 pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                        type="text"
                        value=""
                        placeholder="Enter value"
                        name=""
                        id=""
                    />
                </div>

                <div className="payment-text">Customer Phone Number</div>
                <div className="col-span-2">
                    <input
                        className="w-auto md:w-56 pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                        type="text"
                        value=""
                        placeholder="+88 0123 654 987"
                        name=""
                        id=""
                    />
                </div>

                <div className="payment-text">Paid To</div>
                <div className="col-span-2 md:col-span-1">
                    <select
                        id="selectPhone"
                        className="ml-5 bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-auto md:w-full p-2.5"
                    >
                        <option selected>Please Select</option>
                        <option value="+88 0123 622 333">+88 0123 622 333</option>
                        <option value="CA">+88 0123 622 444</option>
                    </select>
                </div>
                <div className="hidden md:block"></div>

                <div className="payment-text">Transaction ID</div>
                <div className="col-span-2 flex flex-col md:flex-row gap-4 md:gap-0 items-center">
                    <input
                        className="w-full md:w-56 pl-4 py-2 rounded-lg ml-5 border-2 outline-none border-zinc-400"
                        type="text"
                        value=""
                        placeholder="Axfhkem2589ajh"
                        name=""
                        id=""
                    />
                    <input
                        className="w-full md:w-56 pl-4 py-2 rounded-lg ml-5 border-2 outline-none border-zinc-400"
                        type="text"
                        value=""
                        placeholder="Axfhkem2589ajh"
                        name=""
                        id=""
                    />
                </div>

                <div></div>
                <div className="col-span-2">
                    <button className="payment-btn ml-5">Confirm</button>
                </div>

                <div className="hidden md:block"></div>
                <div className="col-span-3 md:col-span-2">
                    <p className="payment-alert">
                        Thank you for Your Payment. We will notify you after verification.
                    </p>
                </div>
            </div>
        </>
    )
}

export default MobileBanking