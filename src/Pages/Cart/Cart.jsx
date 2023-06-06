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
                      Add to wishlist
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
          <button className="finalButton" ><b>Place Order</b></button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
