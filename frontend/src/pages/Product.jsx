import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ContextProvider";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  useEffect(() => {
    const fetchProductData = async () => {
      const findProduct = products.find((item) => {
        return item._id === productId;
      });
      if (findProduct) {
        setProductData(findProduct);
        setImage(findProduct.image[0]);
        setSize("");
      }
    };
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="pt-6 mt-16 transition-opacity ease-in duration-500 opacity-100 px-[6%]">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* contain 1 and 2 section of images */}
        <div className="flex-1 flex flex-col-reverse gap-4 sm:flex-row">
          {/* --------------1ST SECTION FOR SIDE SHOWING IMAGES -------------- */}
          <div className="flex sm:flex-col  justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => {
                  setImage(item);
                }}
                src={item}
                key={index}
                className={`w-[24%] sm:w-full rounded-lg sm:mb-3 flex-shrink-0 cursor-pointer ${
                  item === image ? "border-3 border-gray-500" : "border-none"
                } `}
                alt=""
              />
            ))}
          </div>
          {/* ------------2ND SECTION FOR THE MAIN IMAGE  ------------ */}
          <div className="w-full  sm:w-[80%]">
            <img src={image} className="rounded w-full h-auto" alt="" />
          </div>
        </div>
        {/* ------------- 3RD SECTION FOR THE WORDS ------------ */}
        <div className="flex-1">
          <h1 className="font-medium text-xl sm:text-2xl">
            {productData.name}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-2xl sm:text-3xl font-medium">
            $ {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-[90%]">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="text-base font-medium">Select-Sizes :</p>
            <div className="flex gap-2 ">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => {
                    setSize(item);
                  }}
                  className={`px-4 py-2 transition-all duration-300 rounded cursor-pointer border-2  ${
                    item === size
                      ? " bg-gray-800/50 text-white border-gray-200"
                      : " bg-gray-100 border-gray-400 "
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            className="bg-black rounded font-medium text-white px-8.5 py-3 text-sm sm:w-auto w-full active:bg-gray-700 "
            onClick={() => addToCart({ size: size, id: productId })}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-3/4 text-gray-300" />
          <div className="text-sm text-gray-500 mt-6 flex flex-col gap-1.5">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* DESCRIPTION SIDE */}

      <div className="mt-20">
        <div className="flex items-center">
          <b className="border border-gray-200 py-3 px-5  text-sm sm:text-lg">
            Description
          </b>
          <p className="border border-gray-200 px-5 py-3  text-sm sm:text-lg">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm border-gray-200 text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizess, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <div>
        <RelatedProducts currentProduct={productData} />
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center">
      <p>Loading products...</p>
    </div>
  );
};

export default Product;
