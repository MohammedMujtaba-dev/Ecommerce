import React, { useContext } from "react";
import { ShopContext } from "../context/ContextProvider";
import { assets, products } from "../assets/assets";
import { Link } from "react-router-dom";
import CartTotal from "../components/cartTotal";
const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } =
    useContext(ShopContext);

  return (
    <div className="p-1 sm:p-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex flex-col gap-6 ">
      <div className="text-2xl my-10 sm:my-5 mb-4 font-semibold text-center">
        <p className="text-2xl  sm:text-3xl font-bold">Your Cart</p>
      </div>

      <div className=" hidden sm:grid grid-cols-[2fr_0.5fr_0.5fr_0.5fr_0.5fr] border-t border-b border-gray-300 py-4 font-medium text-gray-700">
        <p>Product Details</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>

      <div>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 ">
            Your cart is empty.{" "}
            <Link className="text-blue-500" to={"/collection"}>
              Start Shopping
            </Link>
          </p>
        ) : (
          cart.map((item, index) => {
            const product = products.find(
              (productsItem) => productsItem._id === item._id
            );
            return (
              // <div
              //   key={index}
              //   className="grid  sm:grid-cols-[2fr_0.5fr_0.5fr_0.5fr_0.5fr] items-center border-b border-gray-200 py-4"
              // >
              <div
                key={index}
                className="grid grid-cols-[2fr_1fr_0.5fr] sm:grid-cols-[2fr_0.5fr_0.5fr_0.5fr_0.5fr] mx-3 sm:mx-0 items-center gap-y-4  border-b border-gray-200 py-4"
              >
                <div className="flex gap-3 sm:gap-6 items-start text-gray-600">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-16 sm:w-20 rounded"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium text-sm sm:text-lg">
                      {product.name}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 py-0.5 mt-1 rounded border border-gray-200 bg-gray-100 w-fit text-sm">
                      Size: {item.size}
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-lg text-gray-700">
                  $ {product.price}
                </p>
                <input
                  type="number"
                  className="max-w-8 sm:max-w-16 px-1 sm:px-2 py-0.5 text-sm border border-gray-400 text-gray-500"
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                />
                <p>Total : ${getTotalPrice(item._id, item.size)}</p>

                <button
                  className="cursor-pointer text-red-500 flex items-center gap-3 hover:text-red-700 font-bold"
                  onClick={() =>
                    removeFromCart({ id: item._id, size: item.size })
                  }
                >
                  <img src={assets.bin_icon} className="w-4.5 h-4.5" alt="" />{" "}
                  Remove
                </button>
              </div>
            );
          })
        )}
      </div>
      <div className="flex  sm:mx-0 mx-4 my-20  ">
        <div className="w-full sm:w-[450px] border-0 sm:border-2 border-gray-500 p-0 sm:p-6 rounded-xl">
          <CartTotal />
          {cart.length === 0 ? (
            <button
              className={` rounded-md cursor-pointer px-3 py-2 bg-gray-500 text-white text-sm mt-5 `}
            >
              <Link> PROCEED TO PAYMENT</Link>
            </button>
          ) : (
            <button
              className={` rounded-md cursor-pointer px-3 py-2 bg-black active:bg-gray-500 text-white text-sm mt-5 `}
            >
              <Link to="/placeorder"> PROCEED TO PAYMENT</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
