import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../E-Commerse";

const Cart = () => {
    const { cartData } = useContext(CartContext)

    const cartProductData = cartData.cart;

    const clickHandle = () => {
        console.log("cart",cartData)
    }
    return <div>
        <h2>Cart is ready</h2>
        <button onClick={clickHandle}>click</button>
        <Link to="/" className="headerLink">Home</Link>

        {cartProductData.map((product) => {
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
export default Cart;