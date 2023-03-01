import React from "react";
import { BsCheck } from "react-icons/bs";
// import Note from "../../shere/Note";
// import star from "../../../assets/img/icon/3star.png";
// import image from "../../../assets/img/image 7.png";
import Note from "../../components/Shere/Note";
import star from "../../Assets/icons/3star.png";
import image from "../../Assets/images/image 7.png";
const Campaigns = () => {
    return (
        <div className="container mx-auto px-4">
            <div className=" max-w-[1200px] pt-28 relative -z-50">
                <p className="text-[#F4A72D] text-base font-inter font-medium ">
                    PROFITABLE, CLEAR AND FAST
                </p>
                <div className="grid lg:grid-cols-2 grid-cols-1  items-center">
                    <div className=" ">
                        <h1 className="font-evolventa xl:text-4xl lg:text-[20px] text-[24px] font-bold ">
                            Gett the most out of <br /> Facebook and Instagram <br />{" "}
                            campaigns
                        </h1>
                        <p className="flex  gap-[18px] mt-12">
                            <div>
                                <BsCheck
                                    size={20}
                                    className="bg-[#FAD69C] h-5 w-5 rounded-full"
                                />
                            </div>
                            <span className="text-[17px] font-arial font-normal">
                                Payment for all advertising and services to improve <br />
                                results in one window
                            </span>
                        </p>
                        <Note text="Advertising accounts in USD" />
                        <Note text="Payment by any card, except cards of Russian banks" />
                        <Note text="Minimum payment - $30 Recommended - $250" />
                    </div>
                    <div className="lg:mt-0 mt-14">
                        <div className="absolute -right-5 lg:flex hidden top-0 mt-20">
                            <img src={star} alt="" />
                        </div>
                        <div className="max-w[609px]">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-24 gap-5">
                <button className="w-[177px] bg-[#F4A72D] h-12 rounded-[7px] text-base font-arial font-bold text-white">
                    I want to connect
                </button>
                <button className="w-[177px] text-[#F4A72D] h-12 rounded-[7px] text-base font-arial font-bold  border border-[#F4A72D]">
                    Need a consultation
                </button>
            </div>
        </div>
    );
};

export default Campaigns;
