import React, { useContext } from "react";
import { ShopContext } from "../context/ContextProvider";

const Orders = () => {
  const { updateQuantity, cart, products, method } = useContext(ShopContext);

  return (
    <div className="my-30 ">
      <div className="text-2xl my-10 font-semibold">
        <h1 className="text-center">My Orders</h1>
      </div>

      <div>
        {cart.length === 0 ? (
          <p className="text-gray-500">No orders found.</p>
        ) : (
          cart.map((item, index) => {
            // find the matching product for this cart item
            const product = products.find((p) => p._id === item._id);
            if (!product) return null;

            return (
              <div
                key={index}
                className="mx-6 sm:mx-10 border-t border-b border-gray-300 py-6 text-gray-500  flex flex-col sm:flex-row items-start sm:items-center justify-evenly "
              >
                {/* Left Section */}
                <div className="flex items-center gap-6 text-sm">
                  <img
                    src={product.image[0]}
                    className="w-16 sm:w-20"
                    alt={product.name}
                  />
                  <div className="font-medium">
                    <p className="text-sm sm:text-base font-bold">
                      {product.name}
                    </p>
                    <div className="flex items-center sm:mt-0 mt-1 gap-3 text-sm sm:text-base">
                      <p className="text-sm sm:text-lg">$ {product.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className="my-1">
                      Date:{" "}
                      <span className="text-gray-400">
                        {new Date().toDateString()}
                      </span>
                    </p>
                    <p>Payment: {method || "Pending"}</p>
                  </div>
                </div>

                {/* Right Section */}
                <div className="sm:w-1/2 flex mt-4 sm:mt-0 justify-between w-full">
                  <div className="flex items-center gap-2 text-gray-600 text-base">
                    <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                    <p>{"Processing"}</p>
                  </div>
                  <button className="border border-gray-300 px-3 cursor-pointer hover:bg-black transition duration-600 ease-in-out hover:text-white sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-medium rounded text-gray-600">
                    Track order
                  </button>
                  {/* <button
                    onClick={() => updateQuantity(item._id, item.sizes, 0)}
                    className="border border-gray-300 px-3 cursor-pointer hover:bg-red-600 transition duration-600 ease-in-out hover:text-white sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-medium rounded text-gray-600"
                  >
                    Cancel Order
                  </button> */}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Orders;
