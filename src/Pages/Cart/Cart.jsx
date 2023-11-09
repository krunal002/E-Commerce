import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../Component/Header/Header";
import { CartContext, WishlistContext } from "../../E-Commerse";

const Cart = () => {
  const minQuantity = () =>
    toast.warn("Minimum quantity reached!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const maxQuantity = () =>
    toast.warn("Maximum quantity reached!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const navigate = useNavigate();
  const {
    cartData,
    setCartData,
    removeProduct,
    incrementQuant,
    decrementQuant,
  } = useContext(CartContext);
  const { addToWishlistHandler } = useContext(WishlistContext);

  const wishlisthandler = (product) => {
    addToWishlistHandler(product);
    removeProduct(product);
  };

  const flag = cartData.length === 0 ? true : false;
  const price = cartData.reduce(
    (acc, curr) => (acc += curr.price * curr.qty),
    0
  );
  const totalPtice = cartData.reduce(
    (acc, curr) => (acc += curr.sellingPrice * curr.qty),
    0
  );
  const priceSave = price - totalPtice;
  const totalDiscount = Math.round((totalPtice / price) * 100);
  const deliveryCharges = cartData.reduce(
    (acc, curr) => (acc += curr.delivery * curr.qty),
    0
  );

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
          <button onClick={() => navigate("/store")} className="wishlistButton">
            Go to Store
          </button>
        </div>
      ) : (
        <div className="cart">
          <div className="cartContainer">
            <div className="leftCartContainer">
              {cartData.map((product) => {
                const discount = Math.round(
                  (product.sellingPrice / product.price) * 100
                );
                return (
                  <div key={product.id} className="cart-product-container">
                    <div className="image">
                      <img
                        src={product.image}
                        alt="productImage"
                        className="cart-productImage"
                      />
                    </div>

                    <div className="cart-product-info">
                      <div className="cart-product-details">
                        <h2>{product.name}</h2>
                        <b className="cart-product-price">
                          <div>
                            <span>₹{product.price}</span> ₹
                            {product.sellingPrice}
                          </div>
                          <div className="price-discount">{discount}% off</div>
                        </b>

                        <p>
                          Ratings :{" "}
                          {Array(product.rating)
                            .fill()
                            .map((_, index) => (
                              <span key={index} className="product-rating">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </span>
                            ))}
                        </p>

                        <div className="quantity-container">
                          <span
                            onClick={() =>
                              product.qty <= 1
                                ? minQuantity()
                                : decrementQuant(product)
                            }
                          >
                            <b>
                              <i
                                class="fa fa-minus-square"
                                aria-hidden="true"
                              ></i>
                            </b>
                          </span>
                          <span>Quntity : {product.qty}</span>
                          <span
                            onClick={() =>
                              product.qty >= 5
                                ? maxQuantity()
                                : incrementQuant(product)
                            }
                          >
                            <b>
                              <i
                                class="fa fa-plus-square"
                                aria-hidden="true"
                              ></i>
                            </b>
                          </span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="cart-button-container">
                        <button
                          className="cart-button"
                          onClick={() => wishlisthandler(product)}
                        >
                          Move to Wishlist
                        </button>
                        <button
                          className="cart-button"
                          onClick={() => removeProduct(product)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Container */}
            <div>
              <div className="placeorder-container">
                <h3>Price Details</h3>

                <div className="final">
                  <div className="key">
                    <p>Price : </p>
                    <p>Discount : </p>
                    <p>Delivery Charges : </p>
                    <b>Total Amount : </b>
                  </div>

                  <div className="value">
                    <p>₹{price}</p>
                    <p>{totalDiscount}% off</p>
                    <p>{deliveryCharges === 0 ? "Free" : deliveryCharges}</p>
                    <b>₹{totalPtice}</b>
                  </div>
                </div>

                <span>
                  You will save total <b>₹{priceSave}</b> on this order
                </span>

                <button
                  className="placeorder-button"
                  onClick={() => navigate("/placeorder")}
                >
                  <p>Place Order</p>
                </button>
              </div>
              <button
                onClick={() => setCartData([])}
                className="wishlistButton"
              >
                Empty Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
