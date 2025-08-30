import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ContextProvider";

const Navbar = () => {
  const location = useLocation();
  const { showSearch, setShowSearch, setSearch, cartCount } =
    useContext(ShopContext);
  const [menu, setMenu] = useState(false);
  return (
    // CONTAIN THE NAVBAR
    <div className="fixed top-0 left-0 w-full border-b py-5 border-gray-300  z-50 bg-white ">
      <div className="flex  items-center justify-evenly">
        {/* CONTAIN THE ITEMS OF NAVBAR */}
        <div className={`flex justify-evenly items-center  w-full `}>
          <img
            src={assets.menu_icon}
            className={` block md:hidden w-[16px] sm:w-5 hover:w-5  hover:cursor-pointer transition-all duration-500 `}
            alt=""
            onClick={() => setMenu(!menu)}
          />
          {/* DROPDOWN FOR MENU */}
          <div
            className={`absolute top-0 right-0 bottom-0  transition-all duration-300 ${
              menu ? "w-full " : "w-0"
            }`}
          >
            <div className="bg-gray-100 w-full  min-h-screen p-10">
              <div
                className=" flex items-center gap-5 active:bg-gray-800 active:p-3 active:text-white"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <img src={assets.cross_icon} className="w-5" alt="" />
                <p>Back</p>
              </div>
              <div className="  pt-12 flex flex-col">
                <Link
                  to="/"
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="mb-10 mx-auto font-medium sm:text-3xl text-xl"
                >
                  <b id="logo" className="text-blue-500">
                    Caliber
                  </b>
                  <i className="text-gray-600">Threads</i>
                </Link>
                <NavLink
                  to={"/"}
                  className={
                    "hover:bg-gray-700 transition-all duration-600 font-medium py-3 sm:py-4 hover:text-white border-t border-b border-gray-200  flex flex-col items-center "
                  }
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/collection"}
                  className={
                    "hover:bg-gray-700 transition-all duration-600 font-medium py-3 sm:py-4 hover:text-white  border-t border-b border-gray-200 flex flex-col items-center"
                  }
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Collection
                </NavLink>
                <NavLink
                  to={"/about"}
                  className={
                    "hover:bg-gray-700 transition-all duration-600 font-medium py-3 sm:py-4 hover:text-white  border-t border-b border-gray-200 flex flex-col items-center"
                  }
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  About
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className={
                    "hover:bg-gray-700 transition-all duration-600 font-medium py-3 sm:py-4 hover:text-white  border-t border-b border-gray-200 flex flex-col items-center"
                  }
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          {/*  ----------- 1st side ------------- */}
          <Link to="/" className="font-medium sm:text-3xl text-xl">
            <b id="logo" className="text-blue-500">
              Caliber
            </b>
            <i className="text-gray-600">Threads</i>
          </Link>

          {/* <div className=" flex items-center justify-center  gap-30 "> */}
          {/*  ----------- 2nd side ------------- */}
          <div className="hidden   gap-8 md:flex  ">
            <NavLink to={"/"} className={"flex flex-col items-center "}>
              Home
              <hr className="h-[1.5px] w-[50%]  hidden mt-1 transition-all duration-500  bg-gray-800" />
            </NavLink>
            <NavLink
              to={"/collection"}
              className={"flex flex-col items-center"}
            >
              Collection
              <hr className="h-[1.5px] w-[50%] hidden mt-1 transition-all duration-500  bg-gray-800" />
            </NavLink>
            <NavLink to={"/about"} className={"flex flex-col items-center"}>
              About
              <hr className="h-[1.5px] w-[50%] hidden mt-1 transition-all duration-500  bg-gray-800" />
            </NavLink>
            <NavLink to={"/contact"} className={"flex flex-col items-center"}>
              Contact
              <hr className="h-[1.5px] w-[50%] hidden mt-1 transition-all duration-500  bg-gray-800" />
            </NavLink>
          </div>
          {/*  ----------- 3rd side ------------- */}
          <div>
            <div className="flex items-center gap-4 sm:gap-8">
              <Link to={"/collection"}>
                <img
                  src={assets.search_icon}
                  className="w-[16px] sm:w-5 hover:w-5  hover:cursor-pointer transition-all duration-500"
                  alt=""
                  onClick={() => {
                    setShowSearch(!showSearch);
                  }}
                />
              </Link>
              <Link to={"/login"}>
                <img
                  src={assets.profile_icon}
                  className="w-[16px] sm:w-5 hover:w-5  hover:cursor-pointer transition-all duration-500"
                  alt=""
                />
              </Link>
              <Link to={"/cart"} className="relative">
                <img
                  src={assets.cart_icon}
                  className="w-[16px] sm:w-5 hover:w-5  hover:cursor-pointer transition-all duration-500"
                  alt=""
                />
                {cartCount() > 0 && (
                  <span className="absolute top-2.5 right-[-5px] w-4 h-4 flex items-center justify-center bg-black text-white rounded-full text-[8px]">
                    {cartCount()}
                  </span>
                )}
              </Link>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      {location.pathname === "/collection" && showSearch ? (
        <div className="w-full mt-6 flex items-center transition-all duration-300 ease-in-out justify-center gap-3">
          <input
            type="search"
            placeholder="Search items"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="border-2 w-[70%] text-gray-500  outline-blue-400 border-blue-400 py-2 rounded-full px-3 text-sm sm:text-base sm:px-4"
          />
          <img
            src={assets.cross_icon}
            onClick={() => {
              setShowSearch(false);
            }}
            className="w-3 h-3 cursor-pointer"
            alt=""
          />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
