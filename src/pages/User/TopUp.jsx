import React from 'react'

const TopUp = () => {
    return (
        <>
            <div className='mt-24'>
                <section className="container p-0 md:p-4 mx-auto">
                    <div className="flex justify-start items-center gap-2 md:gap-36">
                        <div className="border-2 rounded-md p-1 md:p-3">
                            <div className="flex justify-between items-center gap-24 text-base font-semibold">
                                <h2 className="">Httpool Balance</h2>
                                <p className="">$ 39.25</p>
                            </div>
                            <div className="flex justify-between items-center gap-8 mt-2 text-base font-semibold text-violet-800">
                                <h3>Pending Balance</h3>
                                <p>$ 50</p>
                            </div>
                            <h2 className="text-base font-semibold">Convert To BDT</h2>
                        </div>
                        <div className="border-2 rounded-md p-1 md:p-3">
                            <div className="flex justify-between items-center gap-24 text-base font-semibold">
                                <h2>Httpool Balance</h2>
                                <p>$ 39.25</p>
                            </div>
                            <div className="flex justify-between items-center gap-8 mt-2 text-base font-semibold text-violet-800">
                                <h3>Pending Balance</h3>
                                <p>$ 50</p>
                            </div>
                            <h2 className="text-base font-semibold">Convert To BDT</h2>
                        </div>
                    </div>
                    <div className="flex gap-24 mt-6">
                        <h2 className="text-base font-semibold">Payment Method</h2>
                        <div>
                            <div>
                                <input className="mr-2" type="checkbox" name="" id="Cash" />
                                <label className="text-base font-semibold" htmlFor="Cash">
                                    Cash
                                </label>
                            </div>
                            <div>
                                <input
                                    className="mr-2"
                                    type="checkbox"
                                    name=""
                                    id="MobileBanking"
                                />
                                <label
                                    className="text-base font-semibold"
                                    htmlFor="MobileBanking"
                                >
                                    Mobile Banking
                                </label>
                            </div>
                            <div>
                                <input
                                    className="mr-2"
                                    type="checkbox"
                                    name=""
                                    id="InternetBanking"
                                />
                                <label
                                    className="text-base font-semibold"
                                    htmlFor="InternetBanking"
                                >
                                    Internet Banking
                                </label>
                            </div>
                            <div>
                                <input
                                    className="mr-2"
                                    type="checkbox"
                                    name=""
                                    id="International"
                                />
                                <label
                                    className="text-base font-semibold"
                                    htmlFor="International"
                                >
                                    International Payment Getway
                                </label>
                            </div>
                        </div>
                    </div>

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
                                value="2000"
                                placeholder="Enter value"
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

                    <div className="w-full grid grid-cols-4 gap-4 md:w-1/2 bg-slate-100 rounded-md mt-8 px-4 py-6 border border-black">
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

                    <div className="w-full grid grid-cols-4 gap-4 md:w-1/2 bg-slate-100 rounded-md mt-8 px-4 py-6 border border-black">
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
                        <div className="payment-text">Balance</div>
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
                        <div className="payment-text">Remaining</div>
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
                        <div className="payment-text">New Balance</div>
                        <div className="col-span-3 md:col-span-2">
                            <input
                                className="md:w-56 pl-4 py-2 rounded-md ml-5 border-2 outline-none border-zinc-400"
                                type="text"
                                value=""
                                placeholder="8,923 bdt"
                                name=""
                                id=""
                            />
                        </div>

                        <div className="col-span-2"></div>
                        <div className="col-span-2">
                            <button className="payment-btn ml-5">Confirm</button>
                        </div>

                        <div className="hidden md:block"></div>
                        <div className="col-span-4 md:col-span-2">
                            <p className="payment-alert">
                                Thank you for Your Payment. We will notify you after verification.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default TopUp