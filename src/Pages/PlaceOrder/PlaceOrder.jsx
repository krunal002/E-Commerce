import "./placeOrder.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext } from "../../E-Commerse";
import Header from "../../Component/Header/Header";
// import { Header } from "../../Component/Header/Header"

const PlaceOrder = () => {
  const { cartData } = useContext(CartContext);
  const navigate = useNavigate();

  const price = cartData.reduce(
    (acc, curr) => (acc += curr.sellingPrice * curr.qty),
    0
  );
  const totalPtice = Math.round(price - price / 4);
  const priceSave = price - totalPtice;

  // const address = [
  //   {
  //     name: "Raghav Pande",
  //     add: "Gokul peth, bhandewadi, Nagpur",
  //     pin: "pin : 444444",
  //     mobile: "Mo : +91 9420247486",
  //   },
  //   {
  //     name: "Saniya Rakhe",
  //     add: "Pratap nagar, ram temple, Wardha",
  //     pin: "pin : 555555",
  //     mobile: "Mo : +91 8999908645",
  //   },
  //   {
  //     name: "Nayan Handekar",
  //     add: "pavan naka, janewadi, Amravati",
  //     pin: "pin : 777777",
  //     mobile: "Mo : +91 9130112665",
  //   },
  // ];

  // chat GPT
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Header/>
    <div className="placeOrder-primary-container">
      
      <div className="placeholder-leftContainer placeOrder-container">
        <form className="address-container" onSubmit={handleSubmit}>
          <label className="address-label">
            First Name:
            <input
              className="address-input"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>

          <label className="address-label">
            Last Name:
            <input
              className="address-input"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>

          <label className="address-label">
            Address Line 1:
            <input
              className="address-input"
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
            />
          </label>

          <label className="address-label">
            Address Line 2:
            <input
              className="address-input"
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
            />
          </label>

          <label className="address-label">
            City:
            <input
              className="address-input"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </label>

          <label className="address-label">
            State:
            <input
              className="address-input"
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </label>

          <label className="address-label">
            Postal Code:
            <input
              className="address-input"
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </label>

          <label className="address-label">
            Country:
            <input
              className="address-input"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </label>

          <button className="productButton" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div>
        <div className="placeholder-rightContainer placeOrder-container">
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

          <div
            className="deliveryAdd"
            style={
              formData.firstName && formData.state && formData.addressLine1
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <p>
              <b>Delivery Address : </b>
            </p>

            <hr />
            <h3>
              {formData.firstName} {formData.lastName}
            </h3>
            <p>{formData.addressLine1}</p>
            <p>
              {formData.city}, {formData.state}, {formData.postalCode}
            </p>
            <p>{formData.country}</p>
          </div>

          <button
            className="productButton"
            onClick={() => navigate("/payment")}
            disabled={!formData}
          >
            <b>Place Order</b>
          </button>
        </div>
      </div>
    </div> 
    </div>
  );
};
export default PlaceOrder;
