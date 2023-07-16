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
          <small>Number of products : {productData.length}</small>
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
