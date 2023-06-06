import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext, WishlistContext } from "../../E-Commerse";

const Wishlist = () => {
  const { data_Wishlist } = useContext(WishlistContext);
  const navigate = useNavigate();
  const { cartData, addToCartHandler } = useContext(CartContext);

  const flag = data_Wishlist.length === 0 ? true : false;

  return (
    <div>
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
        <div>empty</div>
      ) : (
        <div>
          {data_Wishlist.map((product) => {
            const addedToCart = cartData.find(({ _id }) => _id === product._id);

            return (
              <div key={product.id} className="storeProducts">
                <Link to={`/product-details/${product.id}`}>
                  <img
                    src={product.image}
                    alt="clothingImage"
                    className="storeImage"
                  />
                </Link>

                <p>
                  Price : ₹{product.sellingPrice}{" "}
                  <span className="printedPrice">{product.price}</span>
                </p>
                <p>Category : {product.category}</p>
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
      )}
    </div>
  );
};
export default Wishlist;
