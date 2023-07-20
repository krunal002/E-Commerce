import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./ProductCard.css";
import { CartContext, WishlistContext } from "../../E-Commerse";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  const notifyOOS = () =>
    toast.error("Out Of Stock!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const { cartData, addToCartHandler } = useContext(CartContext);
  const { data_Wishlist, addToWishlistHandler, removeWishlistProduct } =
    useContext(WishlistContext);

  return (
    <div className="primary-product-container">
      <div className="products">
        {products.map((product) => {
          const addedToCart = cartData?.find(({ _id }) => _id === product._id);
          const addedToWishlist = data_Wishlist?.find(
            ({ _id }) => _id === product._id
          );

          return (
            <div key={product._id} className="product-container">
              <div className="product-shadow">
                <div className="product-pic">
                  <div
                    onClick={() =>
                      addedToWishlist
                        ? removeWishlistProduct(product)
                        : addToWishlistHandler(product)
                    }
                    className="wishlistIcon"
                  >
                    {addedToWishlist ? (
                      <i class="fa fa-heart" aria-hidden="true"></i>
                    ) : (
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                    )}
                  </div>
                  <div
                    className="bestSeller"
                    style={
                      product.status === "Best Seller"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    {product.status}
                  </div>
                  <div
                    className="trendy"
                    style={
                      product.status === "Trendy"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    {product.status}
                  </div>
                  <div
                    className="outOfStock"
                    style={
                      product.status === "Out of Stock"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    {product.status}
                  </div>
                  <div>
                    <Link to={`/details/${product._id}`}>
                      <img
                        src={product.image}
                        alt="productImage"
                        className="productImage"
                      />
                    </Link>
                  </div>
                </div>

                <div className="product-info">
                  <div>
                    <b>{product.name}</b>
                  </div>
                  <div className="printedPrice">
                    <small>MRP {product.price}</small> ₹{product.sellingPrice}
                  </div>
                  <div>
                    {Array(product.rating)
                      .fill()
                      .map((_, index) => (
                        <span key={index} className="product-rating">
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              <button
                className="cartButton"
                onClick={() =>
                  product.status === "Out of Stock"
                    ? notifyOOS()
                    : addedToCart
                    ? navigate("/cart")
                    : addToCartHandler(product)
                }
              >
                <i class="fa fa-cart-plus" aria-hidden="true"></i>{" "}
                {addedToCart ? "Go to Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductCard;
