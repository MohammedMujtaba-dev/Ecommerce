import React from "react";
import ShowProducts from "./ShowProducts";
import { products } from "../assets/assets";

const relatedProducts = ({ currentProduct }) => {
  const related = products.filter(
    (item) =>
      item.category === currentProduct.category &&
      item._id !== currentProduct._id
    //   item.subCategory === currentProduct.subCategory &&
    //   item._id !== currentProduct._id
  );
  return (
    <div className="mt-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-10">
        Related Products
      </h2>

      {related.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {related.map((item) => (
            <ShowProducts
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No related products found.</p>
      )}
    </div>
  );
};

export default relatedProducts;
