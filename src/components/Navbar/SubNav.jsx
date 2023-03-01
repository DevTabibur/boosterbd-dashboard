import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
// import logo from "../../assets/img/icon/logo2.png";
import ModalMenu from "./ModalMenu";
const Subnav = () => {
    const [menu, setMenu] = useState(false);
    const [showNav, setShownav] = useState(false);
    const change = () => {
        if (window.scrollY >= 50) {
            setShownav(true);
        } else {
            setShownav(false);
        }
    };
    window.addEventListener("scroll", change);
    return (
        <div className={`bg-white ${showNav ? "border-b-2" : ""}`}>
            <div
                className={`container w-full md:hidden  flex justify-between  h-20  py-5 `}
            >
                <div>
                    {/* <img src={logo} alt="" /> */}
                    <h3 className="text-3xl font-semibold">BoosterBD</h3>
                </div>
                <div className="">
                    {menu ? (
                        ""
                    ) : (
                        <TbMenu2
                            className="cursor-pointer text-3xl"
                            onClick={() => setMenu(true)}
                        />
                    )}
                    {menu ? <ModalMenu setMenu={setMenu} /> : ""}
                </div>
            </div>
        </div>
    );
};

export default Subnav;
