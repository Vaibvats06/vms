import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidHide } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FcScatterPlot } from "react-icons/fc";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { toast } from "react-hot-toast";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidepassword, setHidepassword] = useState(false);
  const navigate=useNavigate()

  // Get Auth0 methods
  const { loginWithRedirect } = useAuth0();


  // function show Password or hide password
  const showPassword = () => {
    setHidepassword(!hidepassword);
  };

  // user login button function
  const handleLoginRequest = async() => {
    if (email === "" || password === "") {
      return toast.error("Fill all data");
    }
    try{
      const data= await axios.post('http://localhost:4000/api/user/login',{email,password})
      if(data.request.status===201){
        toast.success('login success')
        navigate('/dashboard')
      }
      
      
    }catch(error){
      if(error.response.status===401)
      {
            toast.error('Something went wrong')
      }
    }
  };

  

  return (
    <div className="bg-gray-300 h-screen">
      <p className="px-10 py-10 font-bold text-4xl flex text-blue-400 cursor-default">
        <span>
          <FcScatterPlot />{" "}
        </span>
        VMS
      </p>
      <div className=" text-white flex pt-10  ">
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 text-white border w-1/3 h-4/5 rounded-2xl p mx-auto shadow-slate-100 shadow-md transform-3d  md:px-10 lg:px-20">
          <div className="flex flex-col items-center pb-10">
            <h1 className="text-2xl cursor-default">Sign in with email</h1>
            <p className="pt-3 cursor-default">
              Make your shop more creative and maintain using our services
              together. For free
            </p>
          </div>

          <div className="gap-3 flex flex-col">
            <div className="flex items-center gap-2 border px-1 rounded-sm py-1">
              <MdEmail />
              <input
                type="email"
                name=""
                id=""
                placeholder="email / username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="outline-none"
              />
            </div>
            <div className="flex items-center gap-2 border px-1 rounded-sm py-1">
              <RiLockPasswordFill />
              <input
                type={hidepassword ? "text" : "password"}
                id="password"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="outline-none w-full bg-transparent"
              />
              {hidepassword ? (
                <div className="pr-2">
                  <BiSolidHide
                    className="cursor-pointer duration-200 transition-all"
                    onClick={showPassword}
                  />
                </div>
              ) : (
                <div className="pr-2">
                  <IoEyeSharp
                    className="cursor-pointer duration-200 transition-all"
                    onClick={showPassword}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-end py-2">
            <Link to={"/forgot-password"}>Forgot password?</Link>
          </div>
          <button
            className="bg-gray-700 w-full py-1 rounded-xl  cursor-pointer mt-2 hover:bg-gray-800"
            onClick={handleLoginRequest}
          >
            Get Started
          </button>
          <p className="text-center py-2 text-sm tracking-wider cursor-default text-gray-700">
            or sign in with
          </p>

          <div className="grid grid-cols-3 mt-7 px-5">
            <div className="cursor-pointer w-20  rounded-lg flex justify-center shadow-2xs shadow-gray bg-white py-1">
              <FaGoogle onClick={() => loginWithRedirect()}  className=" text-gradient-to-b from text-orange-300 via-yellow-300 to-green-400 text-2xl text-center" />
            </div>
            <div className="w-20 cursor-pointer  rounded-lg flex justify-center shadow-2xs shadow-gray bg-white py-1">
              <FaFacebook className=" text-blue-400 text-2xl text-center" />
            </div>
            <div className="w-20 cursor-pointer rounded-lg flex justify-center shadow-2xs shadow-gray bg-white py-1">
              <FaApple className=" text-black text-2xl text-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
