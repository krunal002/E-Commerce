import "./Cart.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../E-Commerse";

const Cart = () => {
  const { cartData } = useContext(CartContext);

  const clickHandle = () => {
    console.log("cart", cartData);
  };
  return (
    <div className="cart">
      <h2>Cart is ready</h2>
      <button onClick={clickHandle}>click</button>
      <Link to="/" className="headerLink">
        Home
      </Link>

      <div className="cartContainer">
        <div className="leftCartContainer">
          {cartData.map((product) => {
            return (
              <div key={product.id}>
                <div className="image">
                    <img
                      src={product.image}
                      alt="clothingImage"
                      className="storeImage"
                    />
                </div>
                <div className="information">
                  <p>
                    Price : ₹{product.sellingPrice}{" "}
                    <span className="printedPrice">{product.price}</span>
                  </p>
                  <p>Category : {product.category}</p>
                  <p>Rating : {product.rating}/5</p>
                  <button
                  // onClick={() => wishlisthandler(product)}
                  >
                    Add to wishlist
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rightCartContainer">
          <b>Price Details</b>
          <p>Price : </p>
          <p>Discount : </p>
          <p>Delivery Charges : </p>
          <b>Total Amount : </b>
          <p>You will save ₹0000 on this order</p>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
