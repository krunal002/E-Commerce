import { useContext, useState } from "react";
import "./placeOrder.css";
import { CartContext } from "../../E-Commerse";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [deliveryAdd, setDeliveryAdd] = useState(
    {
        name: "",
        add: "",
        pin: "",
        mobile: "",
      }
  );
  const { cartData } = useContext(CartContext);
  const navigate = useNavigate()

  const price = cartData.reduce((acc, curr) => (acc += curr.sellingPrice), 0);
  const totalPtice = Math.round(price - price / 4);
  const priceSave = price - totalPtice;

  const address = [
    {
      name: "Raghav Pande",
      add: "Gokul peth, bhandewadi, Nagpur",
      pin: "pin : 444444",
      mobile: "Mo : +91 9420247486",
    },
    {
      name: "Saniya Rakhe",
      add: "Pratap nagar, ram temple, Wardha",
      pin: "pin : 555555",
      mobile: "Mo : +91 8999908645",
    },
    {
      name: "Nayan Handekar",
      add: "pavan naka, janewadi, Amravati",
      pin: "pin : 777777",
      mobile: "Mo : +91 9130112665",
    },
  ];

  return (
    <div className="placeOrder">
      <div className="leftContainer-placeOrder">
      <h4>Choose your address</h4>
        {address.map((userAdd) => (
          <div 
            className="addContainer" 
            onClick={() => setDeliveryAdd(userAdd)}
            >
            <h3>{userAdd.name}</h3>
            <p>{userAdd.add}</p>
            <p>{userAdd.pin}</p>
            <p>Mo : {userAdd.mobile}</p>
          </div>
        ))}
      </div>

      <div className="rightContainer-placeOrder">
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

        <div className="deliveryAdd">
        <p><b>Delivery Address : </b></p>
        <hr></hr>
          <h3>{deliveryAdd.name}</h3>
          <p>{deliveryAdd.add}</p>
          <p>{deliveryAdd.pin}</p>
          <p>{deliveryAdd.mobile}</p>
        </div>

        <button 
            className="finalButton placeOrderBtn"
            onClick={() => navigate("/payment")}
            disabled={!deliveryAdd.name.length}
            >
          <b>Place Order</b>
        </button>
      </div>
    </div>
  );
};
export default PlaceOrder;
