import "./Cart.css";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../Component/Header/Header";
import { CartContext, WishlistContext } from "../../E-Commerse";

const Cart = () => {
  const navigate = useNavigate();
  const { cartData, removeProduct, incrementQuant, decrementQuant } =
    useContext(CartContext);
  const { addToWishlistHandler } = useContext(WishlistContext);

  const wishlisthandler = (product) => {
    addToWishlistHandler(product);
    removeProduct(product);
  };

  const flag = cartData.length === 0 ? true : false;
  const price = cartData.reduce(
    (acc, curr) => (acc += curr.sellingPrice * curr.qty),
    0
  );
  const totalPtice = Math.round(price - price / 4);
  const priceSave = price - totalPtice;

  return (
    <div>
      <ToastContainer />
      <Header />

      {flag ? (
        <div className="empty-cart">
          <div>
            <i class="fa fa-cart-plus fa-5x" aria-hidden="true"></i>
          </div>
          <h1>Cart is Empty</h1>
          <button onClick={() => navigate("/store")}>Go to Store</button>
        </div>
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
                        <div>
                          <button
                            className="quantityBtn"
                            onClick={() => decrementQuant(product)}
                            disabled={product.qty === 0}
                          >
                            <b>-</b>
                          </button>
                          <button className="quantityBtn">{product.qty}</button>
                          <button
                            className="quantityBtn"
                            onClick={() => incrementQuant(product)}
                          >
                            <b>+</b>
                          </button>
                        </div>
                      </div>
                      <button
                        className="fullButton"
                        onClick={() => wishlisthandler(product)}
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
                  <p>{price}</p>
                  <p>25%</p>
                  <p>Free</p>
                  <b>{totalPtice}</b>
                </div>
              </div>
              <hr></hr>
              <p>
                You will save total <b>₹{priceSave}</b> on this order
              </p>
              <button
                className="finalButton"
                onClick={() => navigate("/placeorder")}
              >
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
