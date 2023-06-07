import "./ProductDetails.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import { useContext, useEffect, useState } from "react";
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
      <Link to="/store" className="headerLink">
        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
      </Link>
      <div key={_id} className="singleProduct">
        <img src={image} alt="clothingImage" className="storeImage" />
        <p>
          <h1>{name}</h1>
          <h3>
            ₹{sellingPrice} <small className="printedPrice">{price}</small>
          </h3>{" "}
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
  );
};
export default ProductDetails;
