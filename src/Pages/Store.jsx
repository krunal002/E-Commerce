import "./store.css"
import Filters from "../Component/Filters/filters"

import { Link } from "react-router-dom"
import { useContext, useEffect } from "react";

import { ProductContext } from "../E-Commerse";

const Store = () => {
    const { productData } = useContext(ProductContext);
    console.log(productData)
 
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
            {/* const isCartProduct = cartProduct.find(
              (reqProduct) => reqProduct.id === product.id
            );

            const isWishlishProduct = wishlistProduct.find(
              (reqProduct) => reqProduct.id === product.id
            ); */}

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
                  {/* {isWishlishProduct ? (
                    <Link to="/wishlist">Go to Wishlist</Link>
                  ) : (
                    "Add to wishlist"
                  )} */}
                  Add to wishlist
                </button>

                <button
                  className="cartButton"
                //   onClick={() => cartHandler(product)}
                >
                  {/* {isCartProduct ? (
                    <Link to="/cart">Go to Cart</Link>
                  ) : (
                    "Add to Cart"
                  )} */}
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