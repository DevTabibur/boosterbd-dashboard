import React from "react";

import announce from "../../Assets/icons/announce.png";
import ad from "../../Assets/icons/shere.png";
import user from "../../Assets/icons/user.png";
import owner from "../../Assets/icons/user2.png";
import media from "../../Assets/icons/mdeia.png";
const About = () => {
  return (
    <>
      <div className="py-20 w-full  bg-gradient-to-r from-[#140E03] to-[#392604] text-white mt-20">
        <div className="container mx-auto px-4">
          <p className=" font-inter font-medium text-base text-[#F7BD62]">
            A PLATFORM FOR EVERYONE
          </p>
          <h1 className="text-[36px] font-evolventa font-bold tracking-normal not-italic mt-3">
            Who is Adhand for
          </h1>
          <div className=" flex gap-[68px] mt-[51px]">
            <div className="flex gap-4 items-center">
              <img src={announce} className="" alt="" />
              <p className="text-base font-inter font-semibold">Marketers</p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={ad} className="" alt="" />
              <p className="text-base font-inter font-semibold">
                Advertising agencies
              </p>
            </div>
          </div>
          <div className=" flex flex-wrap gap-14 mt-10">
            <div className="flex gap-4 items-center">
              <img src={user} className="" alt="" />
              <p className="text-base font-inter font-semibold">Freelancers</p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={owner} className="" alt="" />
              <p className="text-base font-inter font-semibold">
                To business owners
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={media} className="" alt="" />
              <p className="text-base font-inter font-semibold">Media Buyers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
