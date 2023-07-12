import "./store.css";

import { ToastContainer } from 'react-toastify';

import Filters from "../../Component/Filters/filters";
import { CartContext, ProductContext, WishlistContext } from "../../E-Commerse";

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

const Store = () => {
  const navigate = useNavigate();
  const { productData } = useContext(ProductContext);
  const { cartData, addToCartHandler } = useContext(CartContext);
  console.log(cartData)
  const { data_Wishlist, addToWishlistHandler, removeWishlistProduct } =
    useContext(WishlistContext);

  return (
    <div>
    <ToastContainer />
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

          {!productData.length ? (
            <h2>Nothing to Show</h2>
          ) : (
            <div className="products">
              {productData.map((product) => {
                const addedToCart = cartData.find(
                  ({ _id }) => _id === product._id
                );
                const addedToWishlist = data_Wishlist.find(
                  ({ _id }) => _id === product._id
                );

                return (
                  <div key={product._id} className="storeProducts">
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
                    <Link to={`/details/${product._id}`}>
                      <img
                        src={product.image}
                        alt="clothingImage"
                        className="storeImage"
                      />
                    </Link>

                    <p>
                      <b>{product.name}</b>
                    </p>
                    <p>
                      ₹{product.sellingPrice}{" "}
                      <small className="printedPrice">{product.price}</small>
                    </p>
                    <p>Rating : {product.rating}/5</p>

                    <button
                      className="cartButton"
                      onClick={() =>
                        addedToCart
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
          )}
        </div>
      </div>
    </div>
  );
};
export default Store;
