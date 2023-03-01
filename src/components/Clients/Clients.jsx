import React from "react";
import star from "../../Assets/icons/star.png";
import { AiFillStar } from "react-icons/ai";
const Clients = () => {
    return (
        <div className="container mx-auto px-4 mb-28">
            <h1 className="text-4xl font-evolventa font-bold text-center my-14">
                Clients about us
            </h1>
            <div className="max-w-[1200px] grid   lg:grid-cols-12 grid-cols-2 ">
                <div className="col-span-4 bg-[#01C2CB] h-[351px] w-full  flex justify-center items-center">
                    <div className="text-center">
                        <img src={star} className=" block mx-auto" alt="" />
                        <h1 className="text-[24px] uppercase font-evolventa font-semibold text-white mt-8">
                            chudo montessori
                        </h1>
                        <p className="mt-5 text-white opacity-70 font-arial ">
                            child development center
                        </p>
                    </div>
                </div>
                <div className="col-span-6 lg:px-5 px-[10px] bg-[#F5F6F7] rounded-[7px] py-7">
                    <p className="lg:text-[19px] text-base font-arial font-medium text-[#717B88] tracking-[0.01em] ">
                        After the campaign was launched, the interest of the audience
                        increased: more calls and Direct messages from moms and dads came
                        in. We were pleasantly surprised that even a test budget of about
                        $100 was enough to attract 12 potential students. Previously for the
                        same money we received only 5-6 applications.
                    </p>
                    <div className="flex items-end justify-between lg:mt-[90px] mt-16">
                        <div className="text-[#717B88] w-full">
                            <h1 className="text-xl  font-arial  font-bold">Anar Kuspekova</h1>
                            <p className="lg:text-[15px] text-[12px] font-arial font-normal mt-1 ">
                                Director of the "Miracle Montessori" Center
                            </p>
                        </div>
                        <div className="flex">
                            {Array(5).fill(
                                <AiFillStar size={20} className="text-[#F4A72D]" />
                            )}
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 hidden lg:block  ">
                    <div>
                        <div className="flex items-center justify-center h-[168px] bg-[#EDE8FE] text-[#603AC7] font-bold font-evolventa rounded-[7px] ">
                            <div className="text-center">
                                <h1 className="text-4xl  ">x2</h1>
                                <p className="text-base ">Applications</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-[168px] bg-[#EDE8FE] text-[#603AC7] font-bold font-evolventa rounded-[7px] mt-4 ">
                            <div className="text-center">
                                <h1 className="text-4xl ">-50%</h1>
                                <p className="text-base">OPL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
