import React from 'react'
import image from "../../Assets/images/Photos.jpg";
// import bag from "../../Assets/images/Bag.svg";
import Rectangle from "../../Assets/images/Rectangle 593.jpg";
import triangleTop from "../../Assets/images/triangle-top.png";
import triangleBottom from "../../Assets/images/triangle-bottom.png";
import facebookBg from "../../Assets/images/Rectangle 642.jpg";

const Services = () => {
    return (
        <>
            <div className='mt-24'>
                <section className="container mx-auto">
                    <div className="relative w-1/2 mx-auto mt-5">
                        <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search Service..."
                            required
                        />
                    </div>

                    <div className="grid grid-cols-12 gap-8">
                        <div className="hidden md:block col-span-2">
                            <div className="flex justify-center items-center overflow-hidden rounded-md text-sm border-2 border-[#2EB000] font-semibold m-3">
                                <p className="text-[#2EB000] p-1 w-full">Subscription </p>
                                <p className="bg-[#2EB000] text-white p-1 w-full">
                                    Digital Items
                                </p>
                            </div>

                            <aside className="sticky top-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 rounded-lg border-2 border-[#C4C4C4]">
                                <div className="flex justify-center items-center overflow-hidden rounded-md text-base font-semibold mt-3 mx-3">
                                    <p className="bg-[#2EB000] text-white p-1 w-full">
                                        Digital Items
                                    </p>
                                    <p className="text-[#2EB000] p-1 w-full">Subscription </p>
                                </div>
                                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                href="/#"
                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-cart"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </svg>
                                                <span className="ml-3">Amazon</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="/#"
                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-cart"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </svg>
                                                <span className="ml-3">Netflix</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/#"
                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-cart"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </svg>
                                                <span className="ml-3">Facebook</span>
                                            </a>
                                        </li>
                                        <li
                                            onClick={() =>
                                                document
                                                    .getElementById("dropdown-one")
                                                    .classList.toggle("hidden")
                                            }
                                        >
                                            <button
                                                type="button"
                                                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-cart"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </svg>
                                                <span
                                                    className="flex-1 ml-3 text-left whitespace-nowrap"
                                                    sidebar-toggle-item
                                                >
                                                    Paper Supplies
                                                </span>
                                                <svg
                                                    sidebar-toggle-item
                                                    className="w-6 h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                            <ul id="dropdown-one" className="hidden py-2 space-y-2">
                                                <li>
                                                    <a
                                                        href="/#"
                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                    >
                                                        Notebooks
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/#"
                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                    >
                                                        Envelops
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                    >
                                                        Printing Paper
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="/#"
                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-cart"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </svg>
                                                <span className="ml-3">School Supplies</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <div className="col-span-12 md:col-span-7 mt-8">
                            <div className="block md:grid gap-4 grid-cols-2">
                                <article className="flex shadow-lg rounded-2xl border overflow-hidden">
                                    <img src={image} alt="" />

                                    <div className="flex w-full p-2 gap-8 justify-between items-center">
                                        <div>
                                            <h3 className="font-bold">Envato Eliments</h3>
                                            <p>1 month 1 user</p>
                                            <h6 className="font-bold">2 $</h6>
                                        </div>
                                        <div>
                                            <h3 className="text-[#008A00] font-bold">
                                                Details &gt;&gt;
                                            </h3>
                                            <button className="bg-[#008A00] text-xs font-semibold text-white flex items-center gap-4 py-2 px-4 rounded-lg mt-5 mr-2">
                                                Add to Cart
                                                {/* <img src={bag} alt="bag" /> */}
                                            </button>
                                        </div>
                                    </div>
                                </article>
                                <article className="flex shadow-lg rounded-2xl border overflow-hidden">
                                    <img src={image} alt="" />

                                    <div className="flex w-full p-2 gap-8 justify-between items-center">
                                        <div>
                                            <h3 className="font-bold">Envato Eliments</h3>
                                            <p>1 month 1 user</p>
                                            <h6 className="font-bold">2 $</h6>
                                        </div>
                                        <div>
                                            <h3 className="text-[#008A00] font-bold">
                                                Details &gt;&gt;
                                            </h3>
                                            <button className="bg-[#008A00] text-xs font-semibold text-white flex items-center gap-4 py-2 px-4 rounded-lg mt-5 mr-2">
                                                Add to Cart
                                                {/* <img src={bag} alt="bag" /> */}
                                            </button>
                                        </div>
                                    </div>
                                </article>
                                <article className="flex shadow-lg rounded-2xl border overflow-hidden">
                                    <img src={image} alt="" />

                                    <div className="flex w-full p-2 gap-8 justify-between items-center">
                                        <div>
                                            <h3 className="font-bold">Envato Eliments</h3>
                                            <p>1 month 1 user</p>
                                            <h6 className="font-bold">2 $</h6>
                                        </div>
                                        <div>
                                            <h3 className="text-[#008A00] font-bold">
                                                Details &gt;&gt;
                                            </h3>
                                            <button className="bg-[#008A00] text-xs font-semibold text-white flex items-center gap-4 py-2 px-4 rounded-lg mt-5 mr-2">
                                                Add to Cart
                                                {/* <img src={bag} alt="bag" /> */}
                                            </button>
                                        </div>
                                    </div>
                                </article>
                                <article className="flex shadow-lg rounded-2xl border overflow-hidden">
                                    <img src={image} alt="" />

                                    <div className="flex w-full p-2 gap-8 justify-between items-center">
                                        <div>
                                            <h3 className="font-bold">Envato Eliments</h3>
                                            <p>1 month 1 user</p>
                                            <h6 className="font-bold">2 $</h6>
                                        </div>
                                        <div>
                                            <h3 className="text-[#008A00] font-bold">
                                                Details &gt;&gt;
                                            </h3>
                                            <button className="bg-[#008A00] text-xs font-semibold text-white flex items-center gap-4 py-2 px-4 rounded-lg mt-5 mr-2">
                                                Add to Cart
                                                {/* <img src={bag} alt="bag" /> */}
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="block md:grid grid-cols-2 mt-8 p-3 shadow-lg border">
                                <img className="rounded-md" src={Rectangle} alt="Rectangle" />
                                <div className="bg-[#DEE1E6] py-2 px-5">
                                    <h3 className="font-bold text-xl py-2">Facebook Likes</h3>
                                    <div className="flex justify-center items-center rounded-md bg-white h-28">
                                        <p className="text-center text-sm font-bold">
                                            Product Details <br />
                                            example
                                        </p>
                                    </div>
                                    <p className="font-bold py-3">5k Likes</p>
                                    <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                                        <h3 className="font-bold text-xl">$ 50</h3>
                                        <button className="bg-[#189335] font-semibold text-white p-1 rounded-md">
                                            Checkout
                                        </button>
                                        <div className="grid grid-cols-3 justify-between items-center text-center text-white rounded-md bg-[#189335] text-2xl font-bold">
                                            <button className="border border-white rounded-md bg-transparent">
                                                -
                                            </button>
                                            <div className="text-2xl">0</div>
                                            <button className="border border-white rounded-md bg-transparent">
                                                +
                                            </button>
                                        </div>
                                        <button className="bg-[#189335] font-semibold text-white p-1 rounded-md">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3 border-2 border-black rounded-lg overflow-hidden">
                            <div className="overflow-y-auto h-[100vh]">
                                <div className="flex justify-between items-center bg-[#C4C4C4] py-2 px-4">
                                    <h3 className="text-2xl font-bold">Total 6 Items</h3>
                                    <button className="bg-[#189335] text-lg p-2 rounded font-semibold text-white">
                                        Minimize
                                    </button>
                                </div>
                                <article className="flex p-2 bg-[#EEECE7]">
                                    <div className="flex justify-center items-center flex-col gap-2 p-2 pr-4">
                                        <img src={triangleTop} alt="triangleTop" />
                                        <p className="w-8 h-8 flex justify-center items-center font-bold text-2xl border-2 border-[#008A00]">
                                            1
                                        </p>
                                        <img src={triangleBottom} alt="triangleBottom" />
                                    </div>
                                    <div className="flex gap-1 rounded-lg overflow-hidden">
                                        <img
                                            className="object-cover"
                                            src={facebookBg}
                                            alt="card-img"
                                        />
                                        <div className="bg-[#D9D9D9] pl-1">
                                            <h2 className="font-bold">Facebook Likes</h2>
                                            <p className="text-xs font-semibold">
                                                darchini, lobongo, golmorich, tejpata
                                            </p>
                                            <span className="text-xs"> $ 25 Tk /100 gm</span>
                                        </div>
                                    </div>
                                    <p className="flex flex-col justify-end text-base font-bold">
                                        <span>
                                            Tk. <br /> 25
                                        </span>
                                    </p>
                                    <div className="font-bold">X</div>
                                </article>
                                <article className="flex p-2 bg-[#EEECE7]">
                                    <div className="flex justify-center items-center flex-col gap-2 p-2 pr-4">
                                        <img src={triangleTop} alt="triangleTop" />
                                        <p className="w-8 h-8 flex justify-center items-center font-bold text-2xl border-2 border-[#008A00]">
                                            2
                                        </p>
                                        <img src={triangleBottom} alt="triangleBottom" />
                                    </div>
                                    <div className="flex gap-1 rounded-lg overflow-hidden">
                                        <img
                                            className="object-cover"
                                            src={facebookBg}
                                            alt="card-img"
                                        />
                                        <div className="bg-[#D9D9D9] pl-1">
                                            <h2 className="font-bold">Facebook Likes</h2>
                                            <p className="text-xs font-semibold">
                                                darchini, lobongo, golmorich, tejpata
                                            </p>
                                            <span className="text-xs"> $ 25 Tk /100 gm</span>
                                        </div>
                                    </div>
                                    <p className="flex flex-col justify-end text-base font-bold">
                                        <span>
                                            Tk. <br /> 25
                                        </span>
                                    </p>
                                    <div className="font-bold">X</div>
                                </article>
                                <article className="flex p-2 bg-[#EEECE7]">
                                    <div className="flex justify-center items-center flex-col gap-2 p-2 pr-4">
                                        <img src={triangleTop} alt="triangleTop" />
                                        <p className="w-8 h-8 flex justify-center items-center font-bold text-2xl border-2 border-[#008A00]">
                                            3
                                        </p>
                                        <img src={triangleBottom} alt="triangleBottom" />
                                    </div>
                                    <div className="flex gap-1 rounded-lg overflow-hidden">
                                        <img
                                            className="object-cover"
                                            src={facebookBg}
                                            alt="card-img"
                                        />
                                        <div className="bg-[#D9D9D9] pl-1">
                                            <h2 className="font-bold">Facebook Likes</h2>
                                            <p className="text-xs font-semibold">
                                                darchini, lobongo, golmorich, tejpata
                                            </p>
                                            <span className="text-xs"> $ 25 Tk /100 gm</span>
                                        </div>
                                    </div>
                                    <p className="flex flex-col justify-end text-base font-bold">
                                        <span>
                                            Tk. <br /> 25
                                        </span>
                                    </p>
                                    <div className="font-bold">X</div>
                                </article>
                                <article className="flex p-2 bg-[#EEECE7]">
                                    <div className="flex justify-center items-center flex-col gap-2 p-2 pr-4">
                                        <img src={triangleTop} alt="triangleTop" />
                                        <p className="w-8 h-8 flex justify-center items-center font-bold text-2xl border-2 border-[#008A00]">
                                            12
                                        </p>
                                        <img src={triangleBottom} alt="triangleBottom" />
                                    </div>
                                    <div className="flex gap-1 rounded-lg overflow-hidden">
                                        <img
                                            className="object-cover"
                                            src={facebookBg}
                                            alt="card-img"
                                        />
                                        <div className="bg-[#D9D9D9] pl-1">
                                            <h2 className="font-bold">Facebook Likes</h2>
                                            <p className="text-xs font-semibold">
                                                darchini, lobongo, golmorich, tejpata
                                            </p>
                                            <span className="text-xs"> $ 25 Tk /100 gm</span>
                                        </div>
                                    </div>
                                    <p className="flex flex-col justify-end text-base font-bold">
                                        <span>
                                            Tk. <br /> 25
                                        </span>
                                    </p>
                                    <div className="font-bold">X</div>
                                </article>
                            </div>
                            <div className="bg-[#DEE1E6] py-4">
                                <div className="flex justify-between text-lg px-4">
                                    <h3 className="font-bold">Your Balance</h3>
                                    <h4 className="font-bold">BDT 500 Tk</h4>
                                </div>
                                <div className="flex justify-between border-b-2 border-black px-4 pb-3">
                                    <p className="font-bold text-xs">
                                        insuficiant balance Please recharge
                                    </p>
                                    <button className="btn-xs bg-[#2EB000] hover:bg-[#189335] px-3 py-1 rounded-lg text-xs font-semibold text-white">
                                        Recharge
                                    </button>
                                </div>
                                <div className="flex justify-center items-center pt-4">
                                    <button className="bg-[#189335] hover:bg-[#2EB000] py-3 px-8 font-bold text-white rounded-lg">
                                        Place Order
                                    </button>
                                    <button className="bg-[#189335] hover:bg-[#2EB000] py-3 px-8 font-bold text-white rounded-lg">
                                        Tk. 529
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Services