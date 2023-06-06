import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/Login/LoginPage";
import Store from "./Pages/Store/Store";
import Wishlist from "./Pages/Wishlist/Wishlist";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import { RequiresAuth } from "./Component/RequiresAuth";

import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { ProductContext } from "./Context/ProductContext";
import { CategoryContext } from "./Context/CategoryContext";
import { CartContext } from "./Context/CartContext";
import { WishlistContext } from "./Context/WishlistContext"

export { ProductContext };
export { CategoryContext };
export { CartContext };
export { WishlistContext }

const ECommerse = () => {
  return (
    <div>
      <h1 id="siteName">Outfit_Adda</h1>

      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route
          path="/"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store" element={<Store />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/details/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};
export default ECommerse;
