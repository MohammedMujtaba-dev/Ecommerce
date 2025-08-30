import React from "react";
// import { FcGoogle } from "react-icons/fc";
import { RiGoogleFill } from "react-icons/ri";

// import { FaFacebook } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="px-6 mt-26 sm:mt-34 transition-all duration-500 text-gray-500">
      {/* <h1 className="text-xl sm:text-3xl font-[prata] font-bold text-blue-500 text-center my-10">
        Contact Us
      </h1> */}
      <div className="w-full flex items-center justify-evenly gap-10">
        <div className=" flex flex-col md:max-w-lg w-full sm:w-[90%]">
          <div className="space-y-6 ">
            <p className="text-center font-bold text-2xl sm:text-3xl text-gray-800/50 ">
              Create your account
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center justify-center transition-all duration-800 w-full">
              <button className="px-3 cursor-pointer shadow-md sm:shadow-lg border border-gray-900 w-[80%] hover:bg-gray-400/75 hover:text-white bg-black/90 text-white rounded-xl py-2 justify-center flex items-center gap-2">
                <RiGoogleFill />
                <p>Google</p>
              </button>
              <button className="px-3 cursor-pointer shadow-md sm:shadow-lg  hover:border border-gray-900/50 w-[80%] hover:bg-gray-400/75 hover:text-white  bg-black/90 text-white rounded-xl py-2 justify-center flex items-center gap-2">
                <FaFacebookSquare />
                <p>Facebook</p>
              </button>
              <button className="px-3 cursor-pointer shadow-md sm:shadow-lg  hover:border border-gray-900/50 w-[80%] hover:bg-gray-400/75 hover:text-white  bg-black/90 text-white rounded-xl py-2 justify-center flex items-center gap-2">
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
            <div>
              {/* <p className="text-md sm:text-lg text-gray-700">Message :</p> */}
              <input
                type="password"
                name="password"
                className="outline-none border-gray-400 border w-full py-3 px-5 rounded-xl"
                placeholder="Enter password"
              />
            </div>
            <button className="cursor-pointer bg-black/75 my-4 py-3 hover:bg-blue-500 text-white w-full rounded-xl">
              Signup
            </button>
            <div className="flex text-base justify-between items-center">
              <p>Already an Account !</p>
              <p className="text-blue-400">
                <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
        <img
          // src="https://m.media-amazon.com/images/G/31/amazonservices/Blog/What_is_an_E-commerce_business.jpg"
          src="https://coruzant.com/wp-content/uploads/2025/02/What_is_an_E-commerce_business.jpg"
          // src="https://blog-frontend.envato.com/cdn-cgi/image/width=2560,quality=75,format=auto/uploads/sites/2/2022/04/E-commerce-App-JPG-File-scaled.jpg"
          // src="https://static.vecteezy.com/system/resources/previews/012/335/181/non_2x/mobile-shopping-concept-a-man-and-a-woman-buy-things-in-the-online-store-through-a-big-smartphone-e-commerce-and-online-shopping-illustration-in-flat-style-vector.jpg"
          // src="https://digitallinkspro.qa/wp-content/uploads/2023/09/ecommerce-website-checklist-b--1170x700.jpg"
          alt=""
          className="w-[50%]  object-cover md:flex hidden rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Signup;
