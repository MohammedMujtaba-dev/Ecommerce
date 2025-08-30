import React from "react";

const Contact = () => {
  return (
    <div className="px-6 sm:mt-0 mt-20 transition-all duration-500">
      <form className="max-w-lg max-h-screen mx-auto border-2 py-4 rounded-xl shadow-2xl border-gray-200 border-double px-8 sm:px-16">
        <h1 className="text-2xl sm:text-3xl font-[prata] font-bold text-gray-500 text-center my-6">
          Contact Us
        </h1>
        <hr className="border border-gray-300 my-6" />
        <div className="space-y-3">
          <p className="text-md sm:text-lg text-gray-700">Name :</p>
          <input
            type="text"
            name="name"
            className="outline-none border-gray-400 border w-full py-3 px-5 rounded-xl"
            placeholder="Enter name"
          />
        </div>
        <div className="space-y-3 mt-4">
          <p className="text-md sm:text-lg text-gray-700">Email :</p>
          <input
            type="email"
            name="email"
            className="outline-none border-gray-400 border w-full py-3 px-5 rounded-xl"
            placeholder="Enter email"
          />
        </div>
        <div className="space-y-3 mt-4">
          <p className="text-md sm:text-lg text-gray-700">Message :</p>
          <textarea
            name=""
            id=""
            rows="5"
            placeholder="Write your message here..."
            className=" p-3 w-full border border-gray-400 rounded-xl"
          ></textarea>
        </div>
        <button className="cursor-pointer hover:bg-black/75 my-6 py-3 bg-blue-500 text-white w-full rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
