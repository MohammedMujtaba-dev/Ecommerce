import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { method, setMethod } = useContext(ShopContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const formData = { firstName, lastName, phone, email };
  // const address = { street, city, state, zipcode, country };
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");

  // inside PlaceOrder
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();

    // if all fields filled, you can navigate
    if (
      firstName &&
      lastName &&
      email &&
      phone &&
      street &&
      city &&
      state &&
      zipcode &&
      country &&
      method
    ) {
      navigate("/orders");
    } else {
      alert("Please fill all fields and select payment method.");
    }
  };

  return (
    <form
      onSubmit={formSubmit}
      className="my-15 flex flex-col mt-24 lg:flex-row justify-between sm:gap-10 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
    >
      <div className="sm:max-w-[480px] w-full gap-4 flex flex-col px-6 sm:px-0">
        <div className="text-xl sm:text-2xl font-semibold flex justify-start">
          <p className="text-2xl sm:text-3xl mb-2  sm:mb-4 text-gray-600">
            Delivery Information
          </p>
        </div>
        <div className="flex gap-3 ">
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            className="border outline-none rounded w-full border-gray-300 px-3.5 py-1.5"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            className="border outline-none rounded w-full border-gray-300 px-3.5 py-1.5"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            className="border outline-none w-full rounded  border-gray-300 px-3.5 py-1.5"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Street"
            name="street"
            className="border outline-none rounded w-full border-gray-300 px-3.5 py-1.5"
            required
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            name="city"
            className="border outline-none rounded w-full border-gray-300 px-3.5 py-1.5"
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            className="border outline-none rounded w-full border-gray-300 px-3.5 py-1.5"
            required
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Zipcode"
            name="zipcode"
            className="border outline-none rounded w-full border-gray-300 px-3.5 py-1.5"
            required
            onChange={(e) => setZipcode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            className="border outline-none rounded w-full border-gray-300 px-3.5 py-1.5"
            required
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Phone no"
            name="phone"
            min={1}
            className="border outline-none rounded w-full border-gray-300 px-3.5 py-1.5"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-10 px-6 sm:px-0">
        <div className="mt-5">
          <div className="text-lg font-semibold">
            <p>Payment Method</p>
          </div>
          <div className="flex gap-3 flex-col lg:flex-row mt-5">
            <div
              className="border rounded border-gray-300 flex items-center p-2 pr-6 cursor-pointer gap-2 "
              onClick={() => {
                setMethod("stripe");
              }}
            >
              <p
                className={`border border-gray-300 rounded-full h-3.5 min-w-3.5 ${
                  method === "stripe" ? "bg-amber-400" : "bg-none"
                } `}
              ></p>
              <img className="h-5 " src={assets.stripe_logo} alt="" />
            </div>
            <div
              className="border rounded border-gray-300 flex  items-center p-2 pr-6 cursor-pointer   gap-2"
              onClick={() => {
                setMethod("razorpay");
              }}
            >
              <p
                className={`border border-gray-300 rounded-full  h-3.5 min-w-3.5 ${
                  method === "razorpay" ? "bg-amber-400" : "bg-none"
                } `}
              ></p>
              <img className="h-5" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              className="border rounded border-gray-300 flex items-center p-2 pr-6 cursor-pointer gap-2 "
              onClick={() => {
                setMethod("cod");
              }}
            >
              <p
                className={`border border-gray-300 rounded-full h-3.5 min-w-3.5 ${
                  method === "cod" ? "bg-amber-400" : "bg-none"
                } `}
              ></p>
              <p className="text-sm text-gray-500 font-medium mx-2">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black text-white px-4 text-sm py-2 rounded mt-4 cursor-pointer "
          >
            <p> PLACE ORDER</p>
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
