import React, { useContext, useEffect, useState } from "react";
import ShowProducts from "../components/ShowProducts";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ContextProvider";

const Collection = () => {
  const { products, search } = useContext(ShopContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [dropFilter, setDropFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const toggleCategory = (e) => {
    // this will be truw when and only when there is option selected in category
    if (category.includes(e.target.value)) {
      // we are checking the array existed and applying the filter to render in the array and acces each item and if that item is not eqal to e.traget like ['men','women'] and if we clikc kids option since men and women are not = to kids then it goes for else
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      //if if condition fails then it adds the selecetd option in the array
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (search !== "") {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        // if productcopy array containg each item includes same category as selected then
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        // if productcopy array containg each item includes same category as selected then
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(productsCopy);
  };

  const sortProducts = () => {
    let fpCopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(
          fpCopy.sort((item1, item2) => item1.price - item2.price)
        );
        break;
      case "high-low":
        setFilterProduct(
          fpCopy.sort((item1, item2) => item2.price - item1.price)
        );
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProducts();
  }, [sortType]);
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products, search]);

  return (
    <>
      <div className="flex flex-col gap-[2%] md:grid grid-cols-[2fr_10fr]  sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        {/* <div className=" w-full border-r-0 md:border-r-1 border-gray-300 pt-14 mr-10"> */}
        <div className="w-full sm:p-0 px-[5vw] ">
          <p
            className="text-md sm:text-lg font-medium text-gray-500 mb-5 mt-16 w-full flex items-center gap-6"
            onClick={() => setDropFilter(!dropFilter)}
          >
            FILTERS{" "}
            <img
              src={assets.dropdown_icon}
              className={`  w-2 h-4 transition-all duration-300 ${
                dropFilter === true ? "rotate-270" : "rotate-90"
              }`}
              alt=""
            />{" "}
          </p>
          <div className={`${dropFilter ? "flex" : "hidden"}  flex-col `}>
            <ul className=" border p-3 border-gray-300 text-gray-500 space-y-2 mb-3 ">
              <p className="text-md font-bold my-2">Category</p>
              <li className="flex items-center gap-1">
                {" "}
                <input
                  type="checkbox"
                  name="Men"
                  value={"Men"}
                  onChange={toggleCategory}
                />
                <p className="ml-1">Men</p>
              </li>
              <li className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="Women"
                  value={"Women"}
                  onChange={toggleCategory}
                />
                <p className="ml-1">Women</p>
              </li>
              <li className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="Kids"
                  value={"Kids"}
                  onChange={toggleCategory}
                />
                <p className="ml-1">Kids</p>
              </li>
            </ul>
            <ul className=" border p-3 border-gray-300 text-gray-500 space-y-2  ">
              <p className="text-md font-bold my-2">Sub-Category</p>
              <li className="flex items-center gap-1">
                {" "}
                <input
                  type="checkbox"
                  name="Topwear"
                  value={"Topwear"}
                  onChange={toggleSubCategory}
                />
                <p className="ml-1">Top wear</p>
              </li>
              <li className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="Bottomwear"
                  value={"Bottomwear"}
                  onChange={toggleSubCategory}
                />
                <p className="ml-1">Bottom wear</p>
              </li>
              <li className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="Winterwear"
                  value={"Winterwear"}
                  onChange={toggleSubCategory}
                />
                <p className="ml-1">Winter wear</p>
              </li>
            </ul>
          </div>
          <div className="border-l border-gray-400"></div>
        </div>
        <div>
          <div className="flex sm:flex-row flex-col items-center justify-between pb-4 sm:pb-0 px-8 pt-6">
            <h1 className=" text-2xl sm:text-3xl text-gray-600 font-[Prata] my-6 text-start">
              All Collections
            </h1>
            <div>
              <select
                className="border-2 outline-none border-gray-300 sm:text-md text-sm  px-2 rounded-xl  h-10"
                onChange={(e) => {
                  setSortType(e.target.value);
                }}
              >
                <option value="relavent">Sort by: Relavent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-6 px-6 sm:px-0 ">
            {filterProduct.length !== 0 ? (
              filterProduct.map((item, index) => (
                <ShowProducts
                  key={index}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))
            ) : (
              <p className="text-red-600 text-3xl font-bold">
                Product not available . Coming Soon !
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
