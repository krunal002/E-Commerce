import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { createContext, useEffect, useState } from "react";
export const WishlistContext = createContext();

export const WishlishContextHandler = ({ children }) => {
  const notify_wishlist = () => toast("Added to Wishlist!");
  const notify_wishlist_remove = () => toast("Removed from Wishlist!");

  const [data_Wishlist, setData_Wishlist] = useState([]);
  const encodedToken = localStorage.getItem("encodedToken");

  const getWishlistData = async () => {
    try {
      const res = await fetch("/api/user/wishlist", {
        headers: { authorization: encodedToken },
      });
      const reqData = await res.json();
      console.log(await res.json())
      setData_Wishlist( reqData.wishlist );
    } catch (e) {
      console.log("wishlist error");
    }
  };

  useEffect(() => {
    getWishlistData();
  });

  const addToWishlistHandler = async ( product ) => {
      try{
          const resp = await fetch("/api/user/wishlist",{
              method:"POST",
              headers: { authorization : encodedToken },
              body: JSON.stringify({ product:product })
          })
          console.log( await resp.json() )
      }catch(e){ console.log(e) }
      notify_wishlist()
  }

  const removeWishlistProduct = async ( product ) => {
    const url = `/api/user/wishlist/${product._id}`
    try{
      await fetch(url, {
        method:"DELETE",
        headers: { authorization : encodedToken }
      })
    } catch(e) { console.log(e) }
    notify_wishlist_remove()
  }

  return (
    <WishlistContext.Provider value={{ data_Wishlist, addToWishlistHandler, removeWishlistProduct }}>
      {children}
    </WishlistContext.Provider>
  );
};
