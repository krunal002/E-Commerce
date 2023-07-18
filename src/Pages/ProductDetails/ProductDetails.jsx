import "./ProductDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Header from "../../Component/Header/Header";
import { CartContext } from "../../E-Commerse";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { cartData, addToCartHandler } = useContext(CartContext);
  const { productId } = useParams();
  const [productDetailsData, setProductDetailsData] = useState({});
  const url = `/api/products/${productId}`;

  const getProductDetails = async () => {
    const res = await fetch(url);
    const reqData = await res.json();
    setProductDetailsData(reqData.product);
  };
  useEffect(() => {
    getProductDetails();
  });

  const { _id, name, image, sellingPrice, rating, price } = productDetailsData;

  const discount = price - sellingPrice;

  const addedToCart = cartData.find(
    ({ _id }) => _id === productDetailsData._id
  );

  return (
    <div>
      <Header />

      <div key={_id} className="productDetail-container">
        <div className="productDetail-image-container">
          <img
            src={image}
            alt="clothingImage"
            className="productDetail-image"
          />
        </div>

        <div className="productDetail-info">
          <p>
            <h1>{name}</h1>
            <h3 className="productDetail-price">
              <small>₹{price}</small>{" "}₹{sellingPrice} 
            </h3>
          </p>
          <p>
            Flat : <b className="discount">{discount}</b> off
          </p>
          <p>Rating : {rating}/5</p>
          <button
            className="detailsBtn"
            onClick={() =>
              addedToCart
                ? navigate("/cart")
                : addToCartHandler(productDetailsData)
            }
          >
            <i class="fa fa-cart-plus" aria-hidden="true"></i>{" "}
            {addedToCart ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
