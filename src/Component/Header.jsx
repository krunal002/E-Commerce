import "./header.css"

import { Link } from "react-router-dom"

const Header = () => {
    
    return <div>
    <div className="header">
      <h2>AppName</h2>

      <div className="search">
        <input type="search" placeholder="Search..."/>
      </div>

      <div>
        <button 
          className="headerButton"  
        >Login</button>
      </div>

      <div>
        <Link to="/cart" className="headerLink">cart </Link>
        <Link to="/wishlist" className="headerLink">wishlish </Link>
        <Link to="/store" className="headerLink">store</Link>
      </div>

    </div>
    <hr />
  </div>
}
export default Header;