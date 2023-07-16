import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { CartContext, WishlistContext } from "../../E-Commerse";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  const { cartData, addToCartHandler } = useContext(CartContext);
  const { data_Wishlist, addToWishlistHandler, removeWishlistProduct } =
    useContext(WishlistContext);

  return (
    <div>
      <div className="products">
        {products.map((product) => {
          const addedToCart = cartData?.find(({ _id }) => _id === product._id);
          const addedToWishlist = data_Wishlist?.find(
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
                  addedToCart ? navigate("/cart") : addToCartHandler(product)
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
