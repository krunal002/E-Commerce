import "./header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <div>
          <h1>Pristiiine</h1>
        </div>

        <div>
          <div className="header-link-wrapper">
            {/* search */}
            <Link to="/search" className="headerLink">
              <i class="fa fa-search" aria-hidden="true"></i>
            </Link>

            {/* store */}
            <Link to="/store" className="headerLink">
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </Link>

            {/* cart */}
            <Link to="/cart" className="headerLink">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
            </Link>

            {/* wishlist */}
            <Link to="/wishlist" className="headerLink">
              <i class="fa fa-heart" aria-hidden="true"></i>{" "}
            </Link>

            {/* profile */}
            <Link to="/profile" className="headerLink">
              <i class="fa fa-user" aria-hidden="true"></i>
            </Link>

            <button className="headerButton" onClick={() => navigate("/login")}>
              Login <i class="fa fa-sign-in" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
