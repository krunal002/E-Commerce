import "./header.css"

import { Link, useNavigate } from "react-router-dom"

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

const Header = () => {
  const navigate = useNavigate()
    
    return <div>
    <div className="header">
      <h2>AppName</h2>

      <div className="search">
        <input type="search" placeholder="Search..."/>
      </div>

      <div>
        <button 
          className="headerButton"  
          onClick={() => navigate("/login")}
        >Login</button>
      </div>

      <div>
        <Link to="/cart" className="headerLink">cart </Link>
        <Link to="/wishlist" className="headerLink"><span class="material-symbols-outlined">
favorite
</span> </Link>
        <Link to="/store" className="headerLink">store</Link>
      </div>

    </div>
    <hr />
  </div>
}
export default Header;