import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createContext, useState } from "react";
export const WishlistContext = createContext();

export const WishlishContextHandler = ({ children }) => {
  const notify_wishlist = () =>
    toast.success("Added to Wishlish!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notify_wishlist_remove = () =>
    toast.success("Removed from Wishlist!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [data_Wishlist, setData_Wishlist] = useState([]);
  const encodedToken = localStorage.getItem("encodedToken");

  const addToWishlistHandler = async (product) => {
    try {
      const res = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: { authorization: encodedToken },
        body: JSON.stringify({ product: product }),
      });
      const result = await res.json();
      setData_Wishlist(result.wishlist);
      notify_wishlist();
    } catch (e) {
      console.log("ERROR - add to wishlist");
    }
  };

  const removeWishlistProduct = async (product) => {
    const url = `/api/user/wishlist/${product._id}`;
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: { authorization: encodedToken },
      });
      const result = await res.json();
      setData_Wishlist(result.wishlist);
      notify_wishlist_remove();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ data_Wishlist, addToWishlistHandler, removeWishlistProduct }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
