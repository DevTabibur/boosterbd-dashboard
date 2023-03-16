import React, { useState } from 'react'
import Cash from '../../components/Cash/Cash';
import Converter from '../../components/Converter/Converter';
import InternationalGateway from '../../components/InternationalGateway/InternationalGateway';
import InternetBanking from '../../components/InternetBanking/InternetBanking';
import MobileBanking from '../../components/MobileBanking/MobileBanking';

const TopUp = () => {
    const [cash, setCash] = useState(false);
    const [mobileBanking, setMobileBanking] = useState(false);
    const [internetBanking, setInternetBanking] = useState(false);
    const [internationalGateway, setInternationalGateway] = useState(false);

    const [selectedMethod, setSelectedMethod] = useState("");

    const handleCheckboxChange = (event) => {
        setSelectedMethod(event.target.value);
        if (event.target.value === "Cash") {
            setMobileBanking(false)
            setInternationalGateway(false)
            setInternetBanking(false)
            setCash(true)
        }
        else if (event.target.value === "Mobile Banking") {
            setCash(false)
            setMobileBanking(false)
            setInternationalGateway(false)
            setInternetBanking(false)
            setMobileBanking(true)
        }
        else if (event.target.value === "Internet Banking") {
            setCash(false)
            setMobileBanking(false)
            setInternationalGateway(false)
            setMobileBanking(false)
            setInternetBanking(true)
        }
        else if (event.target.value === "International Payment Gateway") {
            setCash(false)
            setMobileBanking(false)
            setMobileBanking(false)
            setInternetBanking(false)
            setInternationalGateway(true)
        }
        // console.log("Selected payment method:", event.target.value);

    };






    return (
        <>
            <div className='mt-24'>
                <section className="container p-0 md:p-4 mx-auto">
                    <div className="flex justify-start items-center gap-2 md:gap-36">
                        <div className="border-2  p-1 md:p-3 bg-slate-100 shadow-md rounded-lg">
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
                        <div className="border-2  p-1 md:p-3 bg-slate-100 shadow-md rounded-lg">
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
                    <div className="flex gap-24 mt-6 bg-[#d9edff] p-6 rounded-3xl shadow-lg">
                        <h2 className="text-base font-semibold">Payment Method</h2>
                        <div>
                            <div>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="paymentMethod"
                                    id="Cash"
                                    defaultValue="Cash"
                                    checked={selectedMethod === "Cash"}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="text-base font-semibold" htmlFor="Cash">
                                    Cash
                                </label>
                            </div>
                            <div>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="paymentMethod"
                                    id="MobileBanking"
                                    defaultValue="Mobile Banking"
                                    checked={selectedMethod === "Mobile Banking"}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="text-base font-semibold" htmlFor="MobileBanking">
                                    Mobile Banking
                                </label>
                            </div>
                            <div>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="paymentMethod"
                                    id="InternetBanking"
                                    defaultValue="Internet Banking"
                                    checked={selectedMethod === "Internet Banking"}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="text-base font-semibold" htmlFor="InternetBanking">
                                    Internet Banking
                                </label>
                            </div>
                            <div>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="paymentMethod"
                                    id="International"
                                    defaultValue="International Payment Gateway"
                                    checked={selectedMethod === "International Payment Gateway"}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="text-base font-semibold" htmlFor="International">
                                    International Payment Gateway
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
                {/* cash */}
                {cash && <Cash cash={cash}/>}


                {/* mobile banking */}
                {mobileBanking && <MobileBanking mobileBanking={mobileBanking}/>}


                {/* Internet Banking */}
                {internetBanking && <InternetBanking internetBanking={internetBanking}/>}

                {/* international gateway */}
                {internationalGateway && <InternationalGateway internationalGateway={internationalGateway}/>}

                {/* converter */}
                <Converter />
            </div>
        </>
    )
}

export default TopUp