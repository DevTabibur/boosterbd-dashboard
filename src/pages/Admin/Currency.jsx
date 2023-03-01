import './Currency.css'
import { useState } from "react";
import { CurrencyDB } from '../../Database/CurrencyDB';

const Currency = () => {


    return (
        <div className="container mx-auto mt-24 ml-4">
            <div className="grid md:grid-cols-3   gap-10">
                {CurrencyDB.map((cr, index) => {
                    return (
                        <CardCurrancy
                            key={index}
                            name={cr.name}
                            amount={cr.amount}
                            code={cr.code}
                            type={cr.type}
                            symbol={cr.symbol}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Currency;


const CardCurrancy = ({ name, symbol, code, amount, type }) => {
    return (
        <>
            {/* <div className="currancycard rounded-lg">
            <div className="head">
                <h1>{name}</h1>
            </div>

            <div className="content mt-1">
                <div className="flex justify-between items-center">
                    <span className="text-[#7A8489]">Currency Symbol:</span>
                    <span className="p-[10px] text-[16px]">{symbol}</span>
                </div>
                <div className="hr"></div>
                <div className="flex justify-between items-center">
                    <span className="text-[#7A8489]">Currency Code:</span>
                    <span className="p-[10px] text-[16px]">{code}</span>
                </div>
                <div className="hr"></div>
                <div className="flex justify-between items-center">
                    <span className="text-[#7A8489]">Currency Type:</span>
                    <span className="p-[10px] text-[16px]">{type}</span>
                </div>
                <div className="hr"></div>
                <div className="flex justify-between items-center">
                    <span className="text-[#7A8489]">Par USD BDT:</span>
                    <span className="p-[10px] text-[16px]">{amount}</span>
                </div>
                <div className="buttons py-3">
                    <button
                        type="button"
                        className="border btn-1 border-[#465EED] bg-[#465EED] text-white rounded-xl px-10 py-2  transition duration-500 ease select-none hover:bg-[#465EED] focus:outline-none focus:shadow-outline"
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="border btn-2 border-[#47C363] bg-[#47C363] text-white rounded-xl px-10 py-2  transition duration-500 ease select-none hover:bg-[#47C363] focus:outline-none focus:shadow-outline"
                    >
                        Edit
                    </button>

                </div>

            </div>
        </div> */}

            <div className="currancycard rounded-lg">
                <div className="head">
                    <h1>{name}</h1>
                </div>

                <div className="content mt-1">
                    <div className="flex justify-between items-center">
                        <span className="text-[#7A8489]">Currency Symbol:</span>
                        <span className="p-[10px] text-[16px]">{symbol}</span>
                    </div>
                    <div className="hr"></div>
                    <div className="flex justify-between items-center">
                        <span className="text-[#7A8489]">Currency Code:</span>
                        <span className="p-[10px] text-[16px]">{code}</span>
                    </div>
                    <div className="hr"></div>
                    <div className="flex justify-between items-center">
                        <span className="text-[#7A8489]">Currency Type:</span>
                        <span className="p-[10px] text-[16px]">{type}</span>
                    </div>
                    <div className="hr"></div>
                    <div className="flex justify-between items-center">
                        <span className="text-[#7A8489]">Par USD BDT:</span>
                        <span className="p-[10px] text-[16px]">{amount}</span>
                    </div>
                    <div className="buttons py-3">
                        <button
                            type="button"
                            className="border btn-1 border-[#465EED] bg-[#465EED] text-white rounded-xl px-10 py-2  transition duration-500 ease select-none hover:bg-[#465EED] focus:outline-none focus:shadow-outline"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="border btn-2 border-[#47C363] bg-[#47C363] text-white rounded-xl px-10 py-2  transition duration-500 ease select-none hover:bg-[#47C363] focus:outline-none focus:shadow-outline"
                        >
                            Edit
                        </button>

                    </div>

                </div>
            </div>
        </>
    );
}


