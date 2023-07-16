import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextHandler = ({ children }) => {
  const notify_cart = () =>
    toast.success("Added to Cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notify_remove = () =>
    toast.success("Removed from Cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [cartData, setCartData] = useState([]);
  const encodedToken = localStorage.getItem("encodedToken");

  const addToCartHandler = async (product) => {
    try {
      const res = await fetch("/api/user/cart", {
        method: "POST",
        headers: { authorization: encodedToken },
        body: JSON.stringify({ product: product }),
      });
      const result = await res.json();
      setCartData(result.cart);
      notify_cart();
    } catch (e) {
      console.log(e);
    }
  };

  const removeProduct = async (product) => {
    const url = `/api/user/cart/${product._id}`;
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: { authorization: encodedToken },
      });
      const result = await res.json();
      setCartData(result.cart);
      notify_remove();
    } catch (e) {
      console.log(e);
    }
  };

  const incrementQuant = async (product) => {
    const url = `/api/user/cart/${product._id}`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { authorization: encodedToken },
        body: JSON.stringify({
          action: {
            type: "increment",
          },
        }),
      });
      const result = await res.json();
      setCartData(result.cart);
    } catch (e) {
      console.log(e);
    }
  };

  const decrementQuant = async (product) => {
    const url = `/api/user/cart/${product._id}`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { authorization: encodedToken },
        body: JSON.stringify({
          action: {
            type: "decrement",
          },
        }),
      });
      const result = await res.json();
      setCartData(result.cart);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        addToCartHandler,
        removeProduct,
        incrementQuant,
        decrementQuant,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
