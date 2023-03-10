import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useActiveUser from "../../Hooks/useActiveUser";
import useUser from "../../Hooks/useUser";
import Loader from "../Loader/Loader";
import Subnav from "./SubNav";
// import logo from "../../assets/img/Group 1.png";
const Navbar = () => {
    const [activeUser, isLoading] = useActiveUser();
    console.log('activeUser', activeUser)
    const navigate = useNavigate();
    const [showNav, setShowNav] = useState(false);
    const change = () => {
        if (window.scrollY >= 50) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    };
    window.addEventListener("scroll", change);

    const logout = () => {
        localStorage.removeItem("accessToken");
        Swal.fire({
            title: "Logout Successfully",
            icon: "success",
        });
        navigate("/");
        window.location.reload();
    };
    const login = () => {
        navigate("/login")
    }
    const dashboard = () => {
        navigate("/dashboard")
    }
    // if (isLoading) {
    //     return <Loader />
    // }
    return (
        <div className="sticky top-0">
            <nav
                className={`bg-white h-20  py-4 md:block hidden  ${showNav ? "border-b-2" : ""
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="  flex justify-between items-center   z-50">
                        <div className="flex justify-center items-center gap-[51px]">
                            {/* <img src={logo} alt="" /> */}
                            <h1 className="text-3xl font-semibold">BoosterBd</h1>

                            <ul className="flex gap-8 text-black font-arial font-normal text-sm cursor-pointer">
                                <li>Tools</li>
                                <li>Platforms</li>
                                <li>Client cases</li>
                            </ul>
                        </div>
                        <div className="">
                            <ul className="flex gap-[10px] ">

                                {activeUser?.phoneNumber && <button className="bg-[#F4A72D] w-28 h-10 rounded-[7px] text-white font-bold" onClick={dashboard}>Dashboard</button>}
                                {activeUser?.phoneNumber ? <button onClick={logout} className="bg-[#F4A72D] w-28 h-10 rounded-[7px] text-white font-bold">
                                    Log out
                                </button> : <button onClick={login} className="bg-[#F4A72D] w-28 h-10 rounded-[7px] text-white font-bold">
                                    Login
                                </button>}




                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Subnav />
        </div>
    );
};

export default Navbar;
