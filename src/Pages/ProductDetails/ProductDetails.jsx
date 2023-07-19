import "./ProductDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Header from "../../Component/Header/Header";
import { CartContext, WishlistContext } from "../../E-Commerse";

const ProductDetails = () => {
  const navigate = useNavigate();

  // product details
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

  const { _id, name, desc, image, sellingPrice, rating, price } = productDetailsData;

  const discount = price - sellingPrice;

  // Cart Functions
  const { cartData, addToCartHandler } = useContext(CartContext);
  const addedToCart = cartData.find(
    ({ _id }) => _id === productDetailsData._id
  );

  // Wishlist Functions
  const { data_Wishlist, addToWishlistHandler, removeWishlistProduct } =
    useContext(WishlistContext);
  const addedToWishlist = data_Wishlist.find(
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
          <h1>{name}</h1>
          <p className="description">{desc}</p>
          <div className="productDetails-price-container">
            <h3 className="productDetail-price">
              <small>₹{price}</small> ₹{sellingPrice}
            </h3>
            <p>
              Flat <b className="discount">{discount}</b> off
            </p>
          </div>

          <p>
            Ratings :{" "}
            {Array(rating)
              .fill()
              .map((_, index) => (
                <span key={index} className="product-rating">
                  <i class="fa fa-star" aria-hidden="true"></i>
                </span>
              ))}
          </p>

          {/* cart button */}
          <div className="DetailBtn-container">
            <button
              className="DetailBtn"
              onClick={() =>
                addedToCart
                  ? navigate("/cart")
                  : addToCartHandler(productDetailsData)
              }
            >
              <i class="fa fa-cart-plus" aria-hidden="true"></i>{" "}
              {addedToCart ? "Go to cart" : "Add to cart"}
            </button>

            {/* wishlist button */}
            <button
              className="DetailBtn"
              onClick={() =>
                addedToWishlist
                  ? removeWishlistProduct(productDetailsData)
                  : addToWishlistHandler(productDetailsData)
              }
            >
              <i class="fa fa-heart" aria-hidden="true"></i>{" "}
              {addedToWishlist ? "Remove" : "Add"}
            </button>
          </div>
        </div>
      </div>

      {/* store button */}
      <button className="productButton" onClick={() => navigate("/store")} style={{backgroundColor:"lightgray", color:"black"}}>
        Store
      </button>
    </div>
  );
};
export default ProductDetails;
