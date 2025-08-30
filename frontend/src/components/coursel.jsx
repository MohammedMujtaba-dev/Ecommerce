import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  // contain an array which have objects of image title and decrption
  const slides = [
    {
      image:
        "https://stagprovisions.com/cdn/shop/files/STAG_Store_Image.jpg?v=1694660131",
      title: "Welcome to Caliber Threads",
      description: "Discover unique styles and premium fashion.",
    },
    {
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      title: "Our New Collection",
      description: "Fresh arrivals for every season.",
    },
    {
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      title: "Sale is On!",
      description: "Grab your favorite pieces at discounted prices.",
    },
  ];

  // Current slide index is 0
  const [current, setCurrent] = useState(0);

  //    Auto-slide every 5 seconds
  // contain setinterval which adds every 5 sec
  // like if prev is 0 + 1 = 1 % 3(total no of objects)
  // 1 % 3 = 1 , 2 % 3 = 2 , 3 % 3 = 0
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    // set or clean timer
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    // contain all coursel elements
    <div
      id="home"
      className="relative w-full h-[651px] overflow-hidden transition-all duration-300 ease-in-out"
    >
      {/* Image */}
      {/* slides[0].title */}
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="w-full h-full object-cover"
      />

      {/* Prev Button */}
      <button
        onClick={() => prevSlide()}
        className="absolute z-20 top-3/4 sm:top-1/2 left-3 cursor-pointer transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={() => nextSlide()}
        className="absolute z-20 top-3/4 sm:top-1/2 right-3 cursor-pointer transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ❯
      </button>
      {/* Text  */}
      <div className="absolute  inset-0 bg-black/40  flex flex-col items-center justify-center text-white text-center p-4">
        <div className="border-0 md:border border-gray-200 md:p-6 rounded-xl">
          <h2 className="text-xl sm:text-3xl font-bold">
            {slides[current].title}
          </h2>
          <p className="text-md sm:text-lg mt-2">
            {slides[current].description}
          </p>
          <Link to={"/collection"}>
            <button className="mt-2 bg-black/75 shadow-sm w-20 hover:w-40 transition-all duration-500 cursor-pointer shadow-white px-3 py-2 rounded-lg ">
              Explore
            </button>
          </Link>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 flex w-full justify-center space-x-2 ">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
