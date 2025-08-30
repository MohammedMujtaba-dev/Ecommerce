import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-8 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="text-center mb-6">
        <p className="font-semibold text-lg sm:text-2xl text-gray-700 ">
          Subscribe now & get 20% off
        </p>
        <p className="text-gray-400 text-base sm:text-lg mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className=" sm:flex-row flex-col sm:gap-6 gap-4 items-center flex justify-center  ">
        <input
          type="email"
          placeholder="Email"
          id=""
          className="p-3 sm:p-5 border-gray-300 border-1 outline-0 rounded-xl sm:rounded-l-xl sm:w-[350px] w-[90%]"
        />
        <button className="cursor-pointer active:bg-red-300 sm:w-auto w-[90%] bg-gray-900 text-white rounded-xl sm:rounded-r-xl p-4 px-8 sm:text-lg text-base">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
