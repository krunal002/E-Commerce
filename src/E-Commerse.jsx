import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/Login/LoginPage";
import Store from "./Pages/Store/Store";
import Wishlist from "./Pages/Wishlist/Wishlist";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import UserProfile from "./Pages/Profile/UserProfile"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder"
import Payment from "./Pages/PlaceOrder/Payment"
import SignUp from "./Pages/Login/SignUp"
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
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <UserProfile />
            </RequiresAuth>
          }
        />
        
        <Route path="/store" element={<Store />} />
        <Route path="/details/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};
export default ECommerse;
