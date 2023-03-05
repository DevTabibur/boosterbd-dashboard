import react, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { ImSpinner9 } from "react-icons/im";
import PhoneInput from "react-phone-number-input";
import OtpInput from 'react-otp-input';
import './Login.css'

import Swal from 'sweetalert2';
import useActiveUser from '../../Hooks/useActiveUser';



const Login = () => {
  const [activeUser, isLoading] = useActiveUser();
  const [registerLoading, setRegisterLoading] = useState(false);
  const [isActive, setIsActive] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [demoPhone, setDemoPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  // const otpRef = useRef(null);
  const phoneRef = useRef(null);
  // console.log("otpRef", otpRef)
  // console.log("phoneRef", phoneRef)
  // const navigate = useNavigate();

  useEffect(() => {
    const isActiveValue = localStorage.getItem("accessToken");
    setIsActive(isActiveValue);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    trigger,
  } = useForm();
  const onSignIn = async (data, e) => {
    setPhoneNumber(data.phoneNumber);
    setPassword(data.password)
    const body = {
      phoneNumber: phoneNumber,
      password: data.password,
    };
    // if user is register once, then he'll not register again before logout.
    if (isActive) {
      Swal.fire({
        title: "Authentication is failed",
        text: "Please logout for again registration",
        icon: "error",
      });
    } else {
      setLoading(true);
      const url = `http://localhost:5000/api/v1/user/register`;
      setRegisterLoading(true);
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          // console.log("data inside register", data);
          if (data.code === 400) {
            Swal.fire({
              title: data.status,
              text: data?.message,
              icon: "error",
            });
          } else if (data.code === 200) {
            // console.log("everything is perfect", data);
            // const token = data?.data?.token;
            // localStorage.setItem("accessToken", JSON.stringify(token));
            Swal.fire({
              title: "success",
              text: data?.message,
              icon: "success",
            });
            setDemoPhone(data.data?.phoneNumber);
            setShowOTP(true);
          }
        });
    }
  };

  const onOTPVerify = () => {
    const body = {
      otp: otp,
      phoneNumber: demoPhone,
      password: password,
    };
    // console.log("body", body);

    const url = `http://localhost:5000/api/v1/user/register/verify`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("otp verified", data);

        if (data.code === 400) {
          Swal.fire({
            title: data?.status,
            text: data?.message,
            icon: "error",
          });
        } else {
          localStorage.setItem("accessToken", data.data?.token)
          Swal.fire({
            title: data?.status,
            text: data?.message,
            icon: "success",
          });
          navigate("/")
        }
      });
  };

  // console.log("password", password);

  // register loading
  // if (registerLoading) {
  //   return <Loader />;
  // }
  return (
    <>
      <div className="bg-[#8756ef] h-[100vh]">
        <div className="container mx-auto px-1 sm:px-4">
          <div className="flex content-center items-center justify-center h-[100vh]">
            <div className="w-full lg:w-5/12 sm:px-4 otp_width">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0 bg-white">
                <div id="recaptcha-container"></div>
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center">
                    <h6 className="text-gray-600 text-md font-bold">Sign In</h6>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col lg:ml-[6px] px-4 lg:px-10 py-10 pt-0">
                  {showOTP ? (
                    <>
                      <div className="bg-white text_bkash rounded-full mb-3 flex items-center py-2 justify-center">
                        <BsFillShieldLockFill size={30} color={"#8756ef"} />
                        <label
                          htmlFor="otp"
                          className="font-bold text-xl text-[#8756ef] inline-block ml-2"
                        >
                          Enter your OTP
                        </label>
                      </div>

                      <div className="otp_wrapper">
                        <OtpInput
                          // forwardRef={otpRef}
                          value={otp}
                          onChange={setOtp}
                          // OTPLength={6}
                          numInputs={6}
                          otpType="number"
                          disabled={false}
                          autoFocus
                          className="opt_container"
                        ></OtpInput>
                      </div>
                      <button
                        onClick={onOTPVerify}
                        className="bg-[#8756ef] w-full flex gap-1 items-center justify-center py-2 mt-5 text-white rounded"
                      >
                        {loading && (
                          <ImSpinner9 size={15} className=" animate-spin" />
                        )}
                        <span>Verify OTP</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <form
                        onSubmit={handleSubmit(onSignIn)}
                        className="w-[90%]"
                      >
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Phone
                          </label>
                          {/* <input
                            type="text"
                            placeholder="phone"
                            {...register("phoneNumber")}
                          /> */}
                          <PhoneInput
                            inputRef={phoneRef}
                            inputStyle={{ width: "100%", height: "45px" }}
                            inputClass="PhoneInputInput"
                            defaultCountry={"BD"}
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="customInputClass border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Password"
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 6,
                                message: "Minimum 6 character required",
                              },
                            })}
                          // onKeyUp={() => {
                          //   trigger("password");
                          // }}
                          />

                          <small className="text-[#FF4B2B] custom_font custom_font_size">
                            {errors?.password?.message}
                          </small>
                        </div>

                        <div className="text-center mt-6">
                          <button
                            className="bg-[#8756ef] flex gap-1 items-center justify-center text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                            type="submit"
                          >
                            {loading && (
                              <ImSpinner9 size={15} className=" animate-spin" />
                            )}
                            <span>Verify Phone</span>
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap mt-6 relative">
                <div className="w-full text-center">
                  <small className="text-white">
                    Having trouble logging in?{" "}
                    <a className="text-blue-300" href="#">
                      click here
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
