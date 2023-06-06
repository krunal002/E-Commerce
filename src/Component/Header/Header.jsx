import "./header.css";

import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
        {/* <h2>Outfit Adda</h2> */}
        <div>
          <button className="headerButton" onClick={() => navigate("/login")}>
            Login <i class="fa fa-sign-in" aria-hidden="true"></i>
          </button>
        </div>

        <div>
          <input type="search" placeholder="Search..." className="search" />{" "}
          {/* <i class="fa fa-search" aria-hidden="true"></i> */}
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
