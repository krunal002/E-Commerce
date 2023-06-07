import { useContext, useState } from "react";
import "./header.css";

import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../E-Commerse";

const Header = () => {
  const navigate = useNavigate();
  const [ searchValue, setSearchValue ] = useState("")
  const { state, dispatch } = useContext(ProductContext);

  const searchHandler = () =>{
    dispatch({ type: "productSearch", payload: searchValue})
    navigate("/store")
  }
  return (
    <div>
      <div className="header">
        <div>
          <button className="headerButton" onClick={() => navigate("/login")}>
            Login <i class="fa fa-sign-in" aria-hidden="true"></i>
          </button>
        </div>

        <div 
          className="searchContainer" 
          onChange={(e) => setSearchValue(e.target.value)}
          value={state.productSearch}
        >
          <input type="search" placeholder="Search..." className="search" />{" "}
          <button onClick={searchHandler} disabled={!searchValue}><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>

        <div>
          <Link to="/profile" className="headerLink">
            <i class="fa fa-user" aria-hidden="true"></i>
          </Link>
          <Link to="/cart" className="headerLink">
            <i class="fa fa-cart-plus" aria-hidden="true"></i>{" "}
          </Link>
          <Link to="/wishlist" className="headerLink">
            {" "}
            <i class="fa fa-heart" aria-hidden="true"></i>{" "}
          </Link>
          <Link to="/store" className="headerLink">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Header;
