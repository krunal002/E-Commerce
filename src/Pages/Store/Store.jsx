import "./store.css";

import { ToastContainer } from "react-toastify";

import Filters from "../../Component/Filters/filters";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import { ProductContext } from "../../E-Commerse";

import { Link } from "react-router-dom";
import { useContext } from "react";

const Store = () => {
  const { productData } = useContext(ProductContext);

  return (
    <div>
      <ToastContainer />

      {/* Links */}
      <Link to="/" className="headerLink">
        <i class="fa fa-home" aria-hidden="true"></i>
      </Link>
      <Link to="/cart" className="headerLink">
        <i class="fa fa-cart-plus" aria-hidden="true"></i>{" "}
      </Link>
      <Link to="/wishlist" className="headerLink">
        {" "}
        <i class="fa fa-heart" aria-hidden="true"></i>{" "}
      </Link>
      <hr></hr>

      <div className="container">
        <div className="leftContainer">
          <Filters />
        </div>

        <div className="rightContainer">
          <small>Number of products : {productData.length}</small>
          {!productData.length ? <h2>Nothing to Show</h2> : <ProductCard products={productData}/>}
        </div>
      </div>
    </div>
  );
};
export default Store;
