import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 items-center  md:grid-cols-[3fr_2fr_1fr] p-10 md:p-20  gap-10 md:gap-0  mt-40 text-base bg-gray-100">
          <div>
            <img src={assets.logo} className="rounded-full  w-32 mb-3" alt="" />
            <p className="text-gray-500 md:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              facere corrupti numquam? Illum atque, fugiat aliquid in autem
              impedit vitae? Expedita iste sequi, tenetur placeat saepe dolorum
              quae commodi illum.
            </p>
          </div>
          <div>
            <p className="font-medium mb-5">COMPANY</p>
            <ul className="font-medium flex flex-col gap-1 text-gray-500">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul>
              <li>+1-211-456-3243</li>
              <li>contact@forever.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <hr className="text-gray-200" />
        <p className="py-5 bg-black/75 text-white text-sm sm:text-base text-center">
          Copyright 2024@ forever.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
