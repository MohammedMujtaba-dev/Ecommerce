import React, { useContext } from "react";
import { ShopContext } from "../context/ContextProvider";

const cartTotal = () => {
  const { getCartTotal } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-xl font-semibold ">
        <h1>Cart Total</h1>
      </div>

      <div className="flex flex-col gap-2 mt-2 text-base">
        <div className="flex justify-between">
          <p>Subtotal </p>
          <p>$ {getCartTotal()}.00</p>
        </div>

        <hr className="text-gray-300" />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>$ 10.00</p>
        </div>
        <hr className="text-gray-300" />
        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p>${getCartTotal() === 0 ? 0 : getCartTotal() + 10}.00</p>
        </div>
      </div>
    </div>
  );
};

export default cartTotal;
