import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/Login/LoginPage";
import Store from "./Pages/Store/Store";
import Wishlist from "./Pages/Wishlist/Wishlist";
import { RequiresAuth } from "./Component/RequiresAuth";

import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { ProductContext } from "./Context/ProductContext";
import { CategoryContext } from "./Context/CategoryContext";
import { CartContext } from "./Context/CartContext";

export { ProductContext };
export { CategoryContext };
export { CartContext };

const ECommerse = () => {
  return (
    <div>
      <h1>siteName</h1>

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
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};
export default ECommerse;
