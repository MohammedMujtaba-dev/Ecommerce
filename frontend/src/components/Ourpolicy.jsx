import React from "react";
import { assets } from "../assets/assets";

const Ourpolicy = () => {
  return (
    <div
      id="policy"
      className="grid grid-col-3 sm:flex sm:justify-around sm:items-center text-center sm:gap-10 gap-12 py-20 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
    >
      <div>
        <img src={assets.exchange_icon} alt="" className="w-12 mx-auto mb-5" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} alt="" className="w-12 mx-auto mb-5" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div>
        <img src={assets.support_img} alt="" className="w-12 mx-auto mb-5" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">we provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default Ourpolicy;
