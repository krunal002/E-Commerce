import { useContext } from "react";
import { Link } from "react-router-dom"
import { WishlistContext } from "../../E-Commerse";

const Wishlist = ( ) => {
    const { WishlistData } = useContext(WishlistContext)
    // const wishlistProductData = WishlistData;
    const clickHandler = () => {
    console.log(WishlistData);
    }

    return <div>
        <h2>Wishlist is Ready</h2>
        <button onClick={clickHandler}>click</button>
        <Link to="/" className="headerLink">Home</Link>

        {[].map((product) => {
            return (
              <div key={product.id} className="storeProducts">
                <Link to={`/product-details/${product.id}`}>
                  <img
                    src={product.image}
                    alt="clothingImage"
                    className="storeImage"
                  />
                </Link>

                <p>Price : ₹{product.sellingPrice} <span className="printedPrice">{product.price}</span></p>
                <p>Category : {product.category}</p>
                <p>Rating : {product.rating}/5</p>
                <button 
                    // onClick={() => wishlisthandler(product)}
                >
                  Add to wishlist
                </button>
              </div>
            );
          })}
    </div>
}
export default Wishlist;
