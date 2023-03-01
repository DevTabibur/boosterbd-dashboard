import React, { useState } from "react";
import { MdClear } from "react-icons/md";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const ModalMenu = ({ setMenu }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ zIndex: "1000000" }}
      className="  overflow-x-hidden overflow-y-auto inset-0  -top-2 left-0 fixed  absulate right-0 mt-2 w-full h-screen px-10 rounded-md shadow-lg py-1 bg-[rgba(0,0,0,0.9)] "
    >
      <div className="">
        <div className="flex justify-end ">
          <MdClear
            className=" text-white text-4xl mt-3 cursor-pointer"
            onClick={() => setMenu(false)}
          />
        </div>

        <div className="flex justify-center items-center h-96 ">
          <ul className="space-y-5 text-[22px] text-white">
            <li>Tools</li>
            <li>Platforms</li>
            <li>Client cases</li>
            <li className="bg-[#F2F3F5] w-[150px] h-12 flex justify-center items-center rounded-[7px] font-arial text-black">
              Log in
            </li>

            <li className="bg-[#F4A72D] w-[150px] h-12 rounded-[7px] text-white flex justify-center items-center ">
              Sign up
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
