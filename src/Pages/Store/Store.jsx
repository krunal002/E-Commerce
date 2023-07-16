import "./store.css";

import { ToastContainer } from "react-toastify";
import { useContext } from "react";

import Header from "../../Component/Header/Header";
import Filters from "../../Component/Filters/filters";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import { ProductContext } from "../../E-Commerse";

const Store = () => {
  const { productData } = useContext(ProductContext);

  return (
    <div>
      <ToastContainer />
      <Header />

      <div className="container">
        <div className="leftContainer">
          <Filters />
        </div>

        <div className="rightContainer">
          <span className="product-number"><small>Available products - {productData.length}</small></span>
          {!productData.length ? (
            <h2>Nothing to Show</h2>
          ) : (
            <ProductCard products={productData} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Store;
