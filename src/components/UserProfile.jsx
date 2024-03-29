import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import useActiveUser from '../Hooks/useActiveUser';

const UserProfile = () => {
  const { currentColor } = useStateContext();
  const [activeUser, isLoading] = useActiveUser()
  // console.log(activeUser)
  const navigate = useNavigate();
  const logout = () => {
    const url = ``;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('data user logout', data)
      })
    localStorage.removeItem("accessToken");
    Swal.fire({
      title: "Logout Successfully",
      icon: "success",
    });
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-[#d9edff] shadow-xl dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-500">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        {activeUser?.imageURL ? <img
          className="rounded-full h-24 w-24"
          src={`https://boosterbd-server.onrender.com/${activeUser?.imageURL}`}
          alt="user-profile"
        /> : <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />}

        <div>
          <p className="font-semibold text-xl dark:text-gray-500"> {activeUser?.name ? activeUser?.name : "Update your profile"} </p>
          {activeUser?.role && <p className="text-gray-500 text-sm dark:text-gray-400 my-1">Administrator:  {activeUser?.role}</p>}

          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> info@shop.com </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index}>
            <Link to={item.link}><div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">

              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className=" text-xl rounded-lg p-3 hover:bg-light-gray"
              >
                {item.icon}

              </button>

              <div>
                <p className="font-semibold dark:text-gray-500 ">{item.title}</p>
                <p className="text-gray-500 text-sm dark:text-gray-500"> {item.desc} </p>
              </div>
            </div></Link></div>
        ))}
      </div>
      <div className="mt-5" onClick={logout}>
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>

  );
};

export default UserProfile;
