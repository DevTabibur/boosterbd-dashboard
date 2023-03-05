import React from 'react'

const InternetBanking = () => {
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
                        Internet Banking
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
                        className="ml-4 mr-2 rounded-lg"
                        type="checkbox"
                        name=""
                        id="BDT"
                    />
                    <label className="payment-title" htmlFor="BDT">
                        BDT
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

                <div className="payment-text">Select Bank</div>
                <div className="col-span-2">
                    <input
                        className="w-auto md:w-56 pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                        type="search"
                        value=""
                        placeholder="Search....(Ex: CityBank, Dhaka Bank)"
                        name=""
                        id=""
                    />
                </div>

                <div></div>
                <div className="col-span-2 md:col-span-1">
                    <select
                        id="selectbank"
                        className="ml-5 bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-auto md:w-full p-2.5"
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
                </div>
                <div className="hidden md:block"></div>

                <div className="payment-text">Account Number</div>
                <div className="col-span-2">
                    <input
                        className="md:w-56 pl-4 py-2 rounded-lg ml-5 border-2 outline-none border-zinc-400"
                        type="text"
                        value=""
                        placeholder="2205 01 2546 9875"
                        name=""
                        id=""
                    />
                </div>

                <div className="payment-text">Customar Account No</div>
                <div>
                    <select
                        id="selectbank"
                        className="ml-5 bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5"
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
                </div>
                <div></div>

                <div className="payment-text">Upload Payment Proof</div>
                <div className="col-span-2">
                    <label
                        htmlFor="Attach_Screenshot"
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
                        id="Attach_Screenshot"
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

export default InternetBanking