import React from "react";
// import message from "../../assets/img/icon/message.png";
// import logo from "../../assets/img/icon/logo2.png";
// import teligram from "../../assets/img/icon/teligram.png";
import message from "../../Assets/icons/message.png";
import logo from "../../Assets/icons/logo2.png";
import teligram from "../../Assets/icons/teligram.png";
const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#140E03] to-[#392604] py-12">
            <div className="container mx-auto px-6">
                <div className="max-w-[1200px]">
                    <div className="bg-[#23201D] rounded-[7px]">
                        <div className="py-6 px-6 rounde">
                            <img src={message} className="w-16 h-14" alt="" />
                            <h1 className=" md:text-4xl text-[24px] font-bold font-evolventa tracking-normal text-white">
                                Join the AdHand mailing list
                            </h1>
                            <div className=" md:flex justify-between items-center  md:mt-12 mt-8 md:space-y-0 space-y-5 ">
                                <p className="lg:text-base text-sm font-inter text-white font-medium tracking-normal">
                                    No spam, just client cases, promotion tips and tool
                                    recommendations
                                </p>
                                <div className="md:flex gap-2 md:space-y-0 space-y-5">
                                    <div>
                                        <input
                                            type="text"
                                            name=""
                                            placeholder="Email"
                                            className="h-12 lg:w-[338px] md:w-[220px] w-4/6 bg-white rounded-[7px] focus:outline-none px-3 placeholder:font-arial placeholder:text-base placeholder:font-bold text-[#A3ACBA]"
                                        />
                                    </div>
                                    <div>
                                        <button className="lg:w-[177px] md:w-[120px] w-4/6 bg-[#F4A72D] h-12 rounded-[7px] text-base font-arial font-bold text-white">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border my-20 border-[#2E2E2E]" />

                    <div className="sm:flex justify-between ">
                        <div>
                            <img src={logo} alt="" />
                            <p className="text-xl font-evolventa font-medium  text-white mt-4">
                                Profitable payment for advertising in social networks
                            </p>
                        </div>
                        <div className="flex gap-20 sm:mt-0 my-12">
                            <div>
                                <p className="text-[17px] font-inter  font-semibold text-[#FAD69C]">
                                    Tools
                                </p>
                                <ul className="text-[13px] text-[#FAD69C] font-inter font-semibold space-y-3 cursor-pointer">
                                    <li className="underline mt-3">Analytics </li>
                                    <li className="underline">Auduencecontructor </li>
                                    <li className="underline">Lockoutprotection</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-[17px] font-inter  font-semibold text-[#FAD69C]">
                                    Company
                                </p>
                                <ul className="text-[13px] text-[#FAD69C] font-inter font-semibold space-y-3  cursor-pointer">
                                    <li className=" mt-3">Terms </li>
                                    <li>Clients Cases </li>
                                    <li>Contract</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex my-7  justify-between ">
                        <div>
                            <p className="text-white text-sm font-inter font-medium tracking-normal">
                                © 2022 AdHand <span className="underline mx-3">Offer</span>
                                <span className="underline"> Privacy Policy</span>
                            </p>
                            <p className=" text-white text-sm font-inter font-medium tracking-normal mt-4">
                                Noddington Technologies Limited 30 Stamford Street London, SE1
                                9LQ, UK
                            </p>
                        </div>
                        <div className="flex items-end gap-2 md:mt-0 mt-5">
                            <p className=" text-white text-[13px] font-inter font-medium tracking-normal">
                                support@adhand.app
                            </p>
                            <img src={teligram} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
