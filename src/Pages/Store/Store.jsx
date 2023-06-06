import "./store.css"
import Filters from "../../Component/Filters/filters"
import { CartContext, ProductContext, WishlistContext } from "../../E-Commerse";

import { Link } from "react-router-dom"
import { useContext } from "react";

const Store = () => {
    const { productData } = useContext(ProductContext);
    const { addToCartHandler } = useContext(CartContext)
    const { addToWishlistHandler } = useContext(WishlistContext)
 
    return <div>
        <h2>Store is Ready</h2>
        <Link to="/" className="headerLink">Home</Link>
        <hr></hr>

        <div className="container">
      

        <div className="leftContainer"> 
          <Filters />
        </div>

        <div className="rightContainer">
        <small>Number of products : {productData.length}</small>
          <div className="products">
          {productData.map((product) => {
            return (
              <div key={product._id} className="storeProducts">
                <Link to={`/details/${product._id}`}>
                  <img
                    src={product.image}
                    alt="clothingImage"
                    className="storeImage"
                  />
                </Link>

                <p><b>{product.name}</b></p>
                <p>₹{product.sellingPrice} <span className="printedPrice">{product.price}</span></p>
                <p>Rating : {product.rating}/5</p>
                {/* <p><Link to={`/details/${product._id}`}>Details</Link></p> */}

                <button 
                    onClick={() => addToWishlistHandler(product)}
                >
                  Add to wishlist
                </button>

                <button
                  className="cartButton"
                  onClick={() => addToCartHandler(product)}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
          </div>
          </div>
        </div>
    </div>
}
export default Store;