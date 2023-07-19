import "./Wishlist.css";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ProductCard from "../../Cards/ProductCard/ProductCard";
import Header from "../../Component/Header/Header";
import { WishlistContext } from "../../E-Commerse";

const Wishlist = () => {
  const { data_Wishlist, setData_Wishlist } =
    useContext(WishlistContext);
  const navigate = useNavigate();

  const flag =
    data_Wishlist?.length === 0 || data_Wishlist?.length === undefined
      ? true
      : false;

  return (
    <div>
      <ToastContainer />
      <Header />

      {flag ? (
        <div className="empty-cart">
        <div>
          <i class="fa fa-heart fa-5x" aria-hidden="true"></i>
        </div>
        <h1>Wishlish is Empty</h1>
        <button
          onClick={() => navigate("/store")}
          className="wishlistButton"
        >
          Go to Store
        </button>
      </div>
      ) : (
        <div>
          <ProductCard products={data_Wishlist}/>
          <button onClick={() => setData_Wishlist([])} className="wishlistButton">Empty Wishlist</button>
        </div>
      )}
    </div>
  );
};
export default Wishlist;
