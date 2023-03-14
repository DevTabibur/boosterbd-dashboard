import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import './Login.css';
import '../Register/Register.css'
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Swal from 'sweetalert2';

const Login = () => {
    const phoneRef = useRef(null);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [isActive, setIsActive] = useState("");
    const [loginLoading, setLoginLoading] = useState(false);
    const navigate = useNavigate();

    // if user is already logged in
    useEffect(() => {
        const isActiveValue = localStorage.getItem("accessToken");
        setIsActive(isActiveValue);
    }, []);


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
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
        }
        else {
            setLoginLoading(true);
            const url = `http://localhost:5000/api/v1/user/login`;
            fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(body),
            })
                .then((res) => res.json())
                .then((data) => {
                    setLoginLoading(false);
                    // console.log("data inside register", data);
                    if (data.code === 400) {
                        Swal.fire({
                            title: data.status,
                            text: data?.message,
                            icon: "error",
                        });
                    }
                    else if (data.code === 401 || data.code === 403) {
                        Swal.fire({
                            title: data.status,
                            text: data?.error,
                            icon: "error",
                        });
                    }
                    else if (data.code === 200) {
                        reset()
                        // console.log("everything is perfect", data);
                        // const token = data?.data?.token;
                        // localStorage.setItem("accessToken", JSON.stringify(token));
                        Swal.fire({
                            title: "success",
                            text: data?.message,
                            icon: "success",
                        });
                        localStorage.setItem('accessToken', data.data?.token)
                        navigate("/dashboard")
                    }
                });
        }






    };


    // loader
    if (loginLoading) {
        return <Loader />
    }


    return (
        <>
            <div className="login-page">
                <div className="login-box">
                    <div className="illustration-wrapper">
                        <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login" />
                    </div>
                    {/* form */}
                    <div id="login-form">
                        <p className="form-title">Welcome back</p>
                        <p>Login to the Dashboard</p>
                        <p>Are you new Here? <Link to="/register" className='hover:text-blue-800 hover:underline'>Click Here</Link></p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* phone number */}

                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Phone
                                </label>
                                <PhoneInput
                                    inputRef={phoneRef}
                                    inputStyle={{ width: "100%", height: "45px" }}
                                    inputClass="PhoneInputInput"
                                    defaultCountry={"BD"}
                                    value={phoneNumber}
                                    onChange={setPhoneNumber}
                                />
                            </div>

                            {/* password */}
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
                                />

                                <small className="text-[#FF4B2B] custom_font custom_font_size">
                                    {errors?.password?.message}
                                </small>
                            </div>

                            {/* forget password?*/}


                            <div className="relative w-full">
                                <div className='mb-0 pb-0'>
                                    <p>Forget Password?  <Link to="/forget-password" className='hover:text-red-700 hover:underline'>Click Here</Link></p>
                                </div>
                                <div>

                                </div>
                            </div>



                            <div className='relative w-full mb-0 py-0'>
                                <input type="submit" value="LOGIN" className='px-14 py-4 bg-blue-600 rounded-lg shadow-lg w-full text-white font-semibold cursor-pointer hover:bg-blue-500 hover:text-gray-200' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login