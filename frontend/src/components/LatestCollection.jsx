import React, { useContext, useEffect, useState } from "react";

import ShowProducts from "./ShowProducts";
import { ShopContext } from "../context/ContextProvider";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const sliceProducts = products.slice(0, 7);
    setLatestProducts(sliceProducts);
  }, [products]);

  return (
    <div className="pb-20 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="flex flex-col items-center ">
        <h1 className="flex font-bold flex-col items-center justify-center text-3xl sm:text-4xl mb-6 font-[Prata] text-gray-500 ">
          Latest Collection <p className="w-[80%] bg-gray-200 h-[1.5px] "></p>
        </h1>
        <p className="w-[60%] mb-6 sm:mb-8 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum
          voluptates totam ipsam expedita, soluta in consectetur temporibus
          aliquam non ad repudiandae, corrupti amet optio porro magnam tempore,
          voluptatum voluptas!
        </p>
      </div>
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 gap-y-4 sm:gap-y-6  px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"> */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 gap-y-4 sm:gap-y-6  px-4 ">
        {latestProducts.map((item, index) => (
          <ShowProducts
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
