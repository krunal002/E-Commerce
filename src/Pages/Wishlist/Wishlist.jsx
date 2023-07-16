import "./Wishlist.css";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext, WishlistContext } from "../../E-Commerse";

const Wishlist = () => {
  const { data_Wishlist, setData_Wishlist, removeWishlistProduct } = useContext(WishlistContext);
  const navigate = useNavigate();
  const { cartData, addToCartHandler } = useContext(CartContext);

  const flag =
    data_Wishlist?.length === 0 || data_Wishlist?.length === undefined
      ? true
      : false;

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

      {flag ? (
        <div>
          <h4>Wishlist is Empty</h4>
        </div>
      ) : (
        <div>
          <div className="wishlistContainer">
          {data_Wishlist?.map((product) => {
            const addedToCart = cartData?.find(
              ({ _id }) => _id === product._id
            );

            return (
              <div key={product.id} className="wishlistProducts">
                <img
                  src={product.image}
                  alt="clothingImage"
                  className="storeImage"
                />

                <p>{product.name}</p>
                <p>
                  <b>₹{product.sellingPrice}</b>{" "}
                  <span className="printedPrice">{product.price}</span>
                </p>
                <p>
                  <i class="fa fa-star" aria-hidden="true"></i> {product.rating}
                  /5
                </p>
                <button
                  className="wishlistButton"
                  onClick={() =>
                    addedToCart ? navigate("/cart") : addToCartHandler(product)
                  }
                >
                  <i class="fa fa-cart-plus" aria-hidden="true"></i>{" "}
                  {addedToCart ? "Go to Cart" : "Add to Cart"}
                </button>
                <button
                  className="wishlistButton"
                  onClick={() => removeWishlistProduct(product)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          
        </div>
        <button onClick={() => setData_Wishlist([])}>Empty Wishlist</button>
        </div>
      )}
    </div>
  );
};
export default Wishlist;
