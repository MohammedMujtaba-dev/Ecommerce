import React from "react";
import { assets } from "../assets/assets";
import Subscribe from "../components/Subscribe";
import { Link } from "react-router-dom";
import Ourpolicy from "../components/Ourpolicy";
const About = () => {
  return (
    <div className="mx-auto mt-30 space-y-16 md:space-y-20  w-[80%]">
      <h1 className="text-2xl  sm:text-3xl font-[Prata] text-gray-600 text-center ">
        About Us -
      </h1>
      <div className="mx-auto gap-10 md:gap-16 md:flex-row flex-col flex items-center  ">
        <img
          src="https://www.shutterstock.com/image-photo/fashionable-clothes-boutique-store-london-600nw-589577570.jpg"
          className="w-[350px]   rounded-lg"
          alt=""
        />
        <div>
          <p className="font-bold text-md sm:text-lg text-gray-500">
            Who We Are
          </p>
          <p className="text-gray-400 ">
            We are passionate about bringing you high-quality, stylish, and
            affordable products that make you feel confident every day. Our
            journey started with a simple idea — to create a collection that
            blends comfort, style, and durability, without breaking the bank.
          </p>
        </div>
      </div>
      <hr className="border border-gray-200" />
      <div className="mx-auto gap-10 md:gap-16 md:flex-row flex-col flex items-center ">
        <div>
          <p className="text-gray-500 text-md sm:text-lg font-bold">
            Our Mission:
          </p>
          <p className="text-gray-400">
            Our mission is simple: to make fashion accessible for everyone. We
            carefully select our products, ensuring they meet our quality
            standards while keeping up with the latest trends. Whether you’re
            shopping for casual wear, office outfits, or something special,
            we’ve got you covered.
          </p>
        </div>
        <img
          src="https://media.burford.co.uk/images/SNY04089.jpg_edit.width-640_ln7jm6QxYVkHFHaT.jpg"
          className="w-[350px] h-[250px] object-cover rounded-lg"
          alt=""
        />
      </div>
      <hr className="border border-gray-200" />
      <div className="flex flex-col justify-center mx-auto  ">
        <img
          src="https://www.pagetraffic.com/blog/wp-content/uploads/2022/11/best-ecommerce-platforms.jpg"
          // src="https://iboon.io/wp-content/uploads/2025/02/Untitled-design-5.jpg"
          // src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/ecommerce-1.png"
          alt=""
          className="w-full object-cover h-[250px] sm:h-[350px] rounded-xl mb-8"
        />
        <div className="px-4">
          <p className="font-bold text-gray-500 text-md sm:text-lg">
            {" "}
            Why Choose Us?
          </p>
          <ul className="list-disc text-gray-400 space-y-2 mt-2">
            <li>
              Quality First: Every product is made with care, using premium
              materials.
            </li>
            <li>
              Affordable Pricing: Trendy fashion that doesn’t empty your wallet.{" "}
            </li>
            <li> Customer-Centric: Your satisfaction is our priority.</li>
            <li>
              Fast & Secure Delivery: We make sure your order reaches you
              quickly and safely.
            </li>
          </ul>
        </div>
      </div>
      <Ourpolicy />
      <div className="px-2 py-4">
        <Subscribe />
      </div>
      <div className="text-center">
        <Link
          to={"/contact"}
          className="text-md bg-blue-500 py-4 px-4 sm:px-6 sm:text-xl  hover:bg-black/75 rounded-xl transition-all duration-500 hover:rounded-full text-white"
        >
          Connect with us !
        </Link>
      </div>
    </div>
  );
};

export default About;
