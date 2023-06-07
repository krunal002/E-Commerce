import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

export const CartContextHandler = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const encodedToken = localStorage.getItem("encodedToken");

  const getCartdata = async () => {
    try {
      const res = await fetch("/api/user/cart", {
        headers: { authorization: encodedToken },
      });
      const reqData = await res.json();
      setCartData(reqData.cart);
    } catch (e) {
      console.log("error");
    }
  };

  useEffect(() => {
    getCartdata();
  });

  const addToCartHandler = async (product) => {
    try {
      const resp = await fetch("/api/user/cart", {
        method: "POST",
        headers: { authorization: encodedToken },
        body: JSON.stringify({ product: product }),
      });
    } catch (e) {
      console.log(e);
    }
  };

  const removeProduct = async (product) => {
    const url = `/api/user/cart/${product._id}`;
    try {
      await fetch(url, {
        method: "DELETE",
        headers: { authorization: encodedToken },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const incrementQuant = async (product) => {
    const url = `/api/user/cart/${product._id}`;
    try {
      await fetch(url, {
        method: "POST",
        headers: { authorization: encodedToken },
        body: JSON.stringify({
          action: {
            type: "increment",
          },
        }),
      });
    } catch (e) {
      console.log(e);
    }
  };
  const decrementQuant = async (product) => {
    const url = `/api/user/cart/${product._id}`;
    try {
      await fetch(url, {
        method: "POST",
        headers: { authorization: encodedToken },
        body: JSON.stringify({
          action: {
            type: "decrement",
          },
        }),
      });
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
