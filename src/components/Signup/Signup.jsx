import React from "react";

const Signup = () => {
  return (
    <div className="container mx-auto px-4">
      <div className=" max-w-[840px]">
        <h1 className="sm:text-4xl text-3xl font-evolventa font-bold ">
          Sign up for the demo
        </h1>
        <p className="text-[#717B88] sm:text-[19px] text-[15px]  font-inter font-semibold  tracking-norma mt-6">
          Fill out the form, we will contact you, show you the features of
          <br className="sm:block hidden" /> AdHand platform and answer all your
          questions
        </p>
        <div className="sm:flex  gap-9 mt-[52px]">
          <div className=" py-3  shadow-[7px]  bg-[#F5F6F7] sm:w-3/6 w-full px-3 ">
            <span className="font-arial text-[17px] font-normal text-[#717B88] mt-10">
              Name
            </span>
            <br />
            <input
              type="text"
              name=""
              placeholder="Alex"
              className=" focus:outline-none  bg-[#F5F6F7] w-full rounded-[7px]"
            />
          </div>
          <div className=" py-3 shadow-[7px]  bg-[#F5F6F7] sm:w-3/6 w-full px-3 sm:mt-0 mt-10">
            <span className="font-arial text-[17px] font-normal text-[#717B88]">
              Email
            </span>
            <br />
            <input
              type="text"
              name=""
              placeholder="Email ales@email.com"
              className=" focus:outline-none  bg-[#F5F6F7] w-full rounded-[7px]"
            />
          </div>
        </div>
        <div className="py-3 shadow-[7px]  bg-[#F5F6F7] w-full px-3 my-10">
          <span className="font-arial text-[17px] font-normal text-[#717B88]">
            Whatsapp/Telegram phone number
          </span>
          <br />
          <input
            type="text"
            name=""
            placeholder="Email ales@email.com"
            className=" focus:outline-none  bg-[#F5F6F7] w-full rounded-[7px]"
          />
        </div>
        <div className="py-3 shadow-[7px]  bg-[#F5F6F7] w-full px-3  my-10">
          <span className="font-arial text-[17px] font-normal text-[#717B88] ">
            Company Website www.company.com
          </span>
          <br />
          <input
            type="text"
            name=""
            placeholder=" www.company.com"
            className=" focus:outline-none  bg-[#F5F6F7] w-full rounded-[7px]"
          />
        </div>
        <p className="text-sm font-arial font-normal text-[#717B88]">
          (website, business page or account that you will advertise)
        </p>
        <button className="bg-[#F4A72D] h-[47px] sm:w-3/6 w-full text-base font-arial font-semibold text-center my-[67px] text-white rounded-[7px]">
          Leave a request
        </button>
      </div>
    </div>
  );
};

export default Signup;
