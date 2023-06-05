import { createContext, useEffect, useState } from "react";
export const WishlistContext = createContext();

export const WishlishContextHandler = ({ children }) => {
  const [data_Wishlist, setData_Wishlist] = useState([]);
  const encodedToken = localStorage.getItem("encodedToken");

  const getWishlistData = async () => {
    try {
      const res = await fetch("/api/user/wishlist", {
        headers: { authorization: encodedToken },
      });
      const reqData = await res.json();
      setData_Wishlist( reqData.wishlist );
    } catch (e) {
      console.log("error");
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
  }

  return (
    <WishlistContext.Provider value={{ data_Wishlist, addToWishlistHandler }}>
      {children}
    </WishlistContext.Provider>
  );
};
