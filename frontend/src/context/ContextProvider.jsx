import React, { createContext, useEffect, useState, useMemo } from "react";
import { products as initialProducts } from "../assets/assets";

export const ShopContext = createContext();
const ContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cart, setCart] = useState([]);
  const [method, setMethod] = useState("cod");

  const addToCart = ({ size, id }) => {
    if (!size) {
      return alert("Please select a size");
    }

    const product = products.find((item) => item._id === id);
    console.log(product);

    if (product) {
      setCart((prev) => {
        const existing = prev.find(
          (item) => item._id === id && item.size === size
        );
        if (existing) {
          return prev.map((item) =>
            item._id === id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prev, { _id: id, size, quantity: 1 }];
        }
      });
    }
  };
  const removeFromCart = ({ id, size }) => {
    setCart((prev) =>
      prev.filter((item) => !(item._id === id && item.size === size))
    );
  };
  const updateQuantity = (id, size, newQuantity) => {
    if (newQuantity === 0) {
      setCart((prev) =>
        prev.filter((item) => !(item._id === id && item.size === size))
      );
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item._id === id && item.size === size
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };
  const cartCount = () => {
    let totalCount = 0;
    for (let items in cart) {
      for (let item in cart[items]) {
        try {
          if (cart[items][item] > 0) {
            totalCount += cart[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };

  const getTotalPrice = (id, size) => {
    const product = products.find((item) => item._id === id);
    const cartItem = cart.find((item) => item._id === id && item.size === size);

    if (product && cartItem) {
      return product.price * cartItem.quantity;
    }
    return 0;
  };
  const getCartTotal = () => {
    let total = 0;
    for (const cartItem of cart) {
      const product = products.find((item) => item._id === cartItem._id);
      if (product) {
        total += product.price * cartItem.quantity;
      }
    }
    return total;
  };

  const value = {
    search,
    setSearch,
    showSearch,
    setShowSearch,
    products,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartCount,
    getTotalPrice,
    getCartTotal,
    method,
    setMethod,
  };
  useEffect(() => {
    setProducts(initialProducts);
  }, []);
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ContextProvider;
