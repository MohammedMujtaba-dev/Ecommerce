import React from "react";
import { RiGoogleFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="px-6 mt-26 sm:mt-30 transition-all duration-500 text-gray-500">
      {/* <h1 className="text-xl sm:text-3xl font-[prata] font-bold text-blue-500 text-center my-10">
        Contact Us
      </h1> */}
      <div className="w-full flex items-center justify-evenly gap-10">
        <img
          src="https://static.vecteezy.com/system/resources/previews/012/335/181/non_2x/mobile-shopping-concept-a-man-and-a-woman-buy-things-in-the-online-store-through-a-big-smartphone-e-commerce-and-online-shopping-illustration-in-flat-style-vector.jpg"
          // src="https://digitallinkspro.qa/wp-content/uploads/2023/09/ecommerce-website-checklist-b--1170x700.jpg"
          alt=""
          className="w-[50%] h-[580px] object-cover md:flex hidden"
        />
        {/* <div className="border md:border-none  border-gray-500 md:p-0 p-4 sm:p-8 mx-auto rounded-xl  flex flex-col md:max-w-lg w-full sm:w-[90%]"> */}
        <div className=" mx-auto flex flex-col md:max-w-lg w-full sm:w-[90%]">
          <div className="space-y-6 md:space-y-8 ">
            <p className="text-center font-bold text-2xl sm:text-3xl  text-gray-800/50 ">
              Login
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 items-center justify-center transition-all duration-800 w-full">
              <button className="px-3 cursor-pointer shadow-md sm:shadow-lg hover:border border-gray-900/50 w-[80%] hover:bg-gray-400/75 hover:text-white bg-black/90 text-white rounded-xl py-2 justify-center flex items-center gap-2">
                <RiGoogleFill />
                <p>Google</p>
              </button>
              <button className="px-3 cursor-pointer shadow-md sm:shadow-lg hover:border border-gray-900/50 w-[80%] hover:bg-gray-400/75 hover:text-white bg-black/90 text-white rounded-xl py-2 justify-center flex items-center gap-2">
                <FaFacebookSquare />
                <p>Facebook</p>
              </button>
              <button className="px-3 cursor-pointer shadow-md sm:shadow-lg hover:border border-gray-900/50 w-[80%] hover:bg-gray-400/75 hover:text-white bg-black/90 text-white rounded-xl py-2 justify-center flex items-center gap-2">
                <MdEmail />
                <p>Email</p>
              </button>
            </div>
            <div className="flex items-center text-base">
              <p className="w-full h-[1px] bg-gray-200"></p>
              <p className="font-bold text-md text-gray-400">OR</p>
              <p className="w-full h-[1px] bg-gray-200"></p>
            </div>
          </div>
          <form className="max-w-lg mx-auto w-full space-y-4  py-6 rounded-xl px-8 sm:px-16">
            {/* <hr className="border border-gray-300 my-6" /> */}
            <div>
              {/* <p className="text-md sm:text-lg text-gray-700">Name :</p> */}
              <input
                type="text"
                name="name"
                className="outline-blue-400 border-gray-400 border w-full py-3 px-5 rounded-xl"
                placeholder="Enter name"
              />
            </div>
            <div>
              {/* <p className="text-md sm:text-lg text-gray-700">Email :</p> */}
              <input
                type="email"
                name="email"
                className="outline-blue-400 border-gray-400 border w-full py-3 px-5 rounded-xl"
                placeholder="Enter email"
              />
            </div>
            {/* <div className="space-y-3 mt-4"> */}
            {/* <p className="text-md sm:text-lg text-gray-700">Message :</p> */}
            {/* <input
                type="password"
                name="password"
                className="outline-none border-gray-400 border w-full py-3 px-5 rounded-xl"
                placeholder="Enter password"
              /> */}
            {/* </div> */}
            <button className="cursor-pointer bg-black/75 my-4 py-3 hover:bg-blue-500 text-white w-full rounded-xl">
              Login
            </button>
            <div className="flex text-base justify-between items-center">
              <p>Create an Account !</p>
              <p className="text-blue-400">
                <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
