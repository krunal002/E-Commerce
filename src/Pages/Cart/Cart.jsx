import "./Cart.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../E-Commerse";

const Cart = () => {
  const { cartData, removeProduct } = useContext(CartContext);
  const flag = cartData.length === 0 ? true : false;

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
        <div>cart is empty</div>
      ) : (
        <div className="cart">
          <div className="cartContainer">
            <div className="leftCartContainer">
              {cartData.map((product) => {
                return (
                  <div key={product.id} className="initial">
                    <div className="image">
                      <img
                        src={product.image}
                        alt="clothingImage"
                        className="storeImage"
                      />
                    </div>

                    <div className="information">
                      <div className="value">
                        <p>{product.name}</p>
                        <b>
                          ₹{product.sellingPrice}{" "}
                          <span className="printedPrice">{product.price}</span>
                        </b>
                        <p>Rating : {product.rating}/5</p>
                      </div>
                      <button
                        className="fullButton"
                        // onClick={() => wishlisthandler(product)}
                      >
                        Move to wishlist
                      </button>
                      <button
                        className="fullButton"
                        onClick={() => removeProduct(product)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rightCartContainer">
              <b>Price Details</b>
              <hr></hr>
              <div className="final">
                <div className="key">
                  <p>Price : </p>
                  <p>Discount : </p>
                  <p>Delivery Charges : </p>
                  <b>Total Amount : </b>
                </div>

                <div className="value">
                  <p>1000</p>
                  <p>50</p>
                  <p>Free</p>
                  <b>1000</b>
                </div>
              </div>
              <hr></hr>
              <p>You will save ₹0000 on this order</p>
              <button className="finalButton">
                <b>Place Order</b>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
