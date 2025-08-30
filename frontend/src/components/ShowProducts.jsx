import React from "react";
import { Link, useLocation } from "react-router-dom";

const ShowProducts = ({ image, name, price, id }) => {
  const location = useLocation();

  return (
    <Link
      to={`/product/${id}`}
      className={`text-gray-700 ${
        location.pathname === "/collection"
          ? "cursor-default"
          : "cursor-pointer"
        //in this
        // border-none sm:border border-gray-200 p-0 sm:p-4  rounded-xl sm:shadow shadow-none hover:lg:shadow-lg
      } mt-4 border-none sm:border border-gray-200 p-0 sm:p-4  rounded-xl sm:shadow shadow-none hover:lg:shadow-lg`}
    >
      <div className="overflow-hidden ">
        <img
          src={image[0]}
          alt=""
          className=" rounded sm:rounded-2xl hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </div>
      <div>
        <p className="pt-4 pb-2 font-medium text-base lg:text-lg text-gray-800">
          {name}
        </p>
        <p className="text-md font-bold text-gray-600">$ {price}</p>
      </div>

      <button
        className={`py-2 bg-black/50 w-full cursor-pointer text-white rounded-lg mt-4  hover:bg-black transition-all duration-500 ${
          location.pathname === "/collection" ? "block" : "hidden"
        }`}
      >
        Add to cart
      </button>
    </Link>
  );
};

export default ShowProducts;
