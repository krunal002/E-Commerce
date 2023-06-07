import { useContext } from "react";

import "./filters.css";
import { ProductContext } from "../../E-Commerse";

const Filters = () => {
  const { 
    dispatch,
    state
} = useContext(ProductContext);

  return (
    <div className="filters">
      <div className="filterHeader">
        <h2>Filters </h2>
        <div>
          <button 
          onClick={(e) => dispatch({type : "clear"})}
          >Clear</button>
        </div>
      </div>

{/* priceRange */}
      <div className="priceRange">
        <div className="heading">Price</div>
        <input
          type="range"
          className="input"
          defaultValue={state.priceFilterValue}
          step="100"
          min="0"
          max="1000"
          onChange={(e) => dispatch({type : "price", payload: e.target.value})}
        />
        <div className="displayPrice">
          <small>100</small>
          <small>500</small>
          <small>1000</small>
        </div>
        <p>value {state.priceFilterValue}</p>
      </div>

{/* categoryFilter */}
      <div className="categoryFilter">
        <div className="heading">Category</div>
        <div>
          <input
            type="radio"
            name="categoryFil"
            value="all"
            onClick={(e) => dispatch({type:"category", payload:e.target.value})}
          />
          <label htmlFor="men">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="categoryFil"
            value="men"
            onClick={(e) => dispatch({type:"category", payload:e.target.value})}
          />
          <label htmlFor="men">men</label>
        </div>
        <div>
          <input
            type="radio"
            name="categoryFil"
            value="women"
            onClick={(e) => dispatch({type:"category", payload:e.target.value})}
          />
          <label htmlFor="women">women</label>
        </div>
        <div>
          <input
            type="radio"
            name="categoryFil"
            value="kids"
            onClick={(e) => dispatch({type:"category", payload:e.target.value})}
          />
          <label htmlFor="kids">kids</label>
        </div>
      </div>

{/* ratingFilter */}
      <div className="ratingFilter">
        <div className="heading">Rating</div>
        <div>
          <input
            type="radio"
            name="ratingFil"
            value="1"
            onClick={(e) => dispatch({type:"rating", payload:e.target.value})}
          />
          <label htmlFor="kids">1 star & above</label>
        </div>
        <div>
          <input
            type="radio"
            name="ratingFil"
            value="2"
            onClick={(e) => dispatch({type:"rating", payload:e.target.value})}
          />
          <label htmlFor="kids">2 star & above</label>
        </div>
        <div>
          <input
            type="radio"
            name="ratingFil"
            value="3"
            onClick={(e) => dispatch({type:"rating", payload:e.target.value})}
          />
          <label htmlFor="kids">3 star & above</label>
        </div>
        <div>
          <input
            type="radio"
            name="ratingFil"
            value="4"
            onClick={(e) => dispatch({type:"rating", payload:e.target.value})}
          />
          <label htmlFor="kids">4 star & above</label>
        </div>
      </div>

{/* priceSort */}
      <div className="priceSort">
        <div className="heading">Sort by</div>
        <input
          type="radio"
          name="priceSort"
          value="lowToHigh"
          onClick={(e) => dispatch({type:"sort", payload:e.target.value})}
        />
        <label htmlFor="kids">price - low to high</label>
      </div>
      <div>
        <input
          type="radio"
          name="priceSort"
          value="highToLow"
          onClick={(e) => dispatch({type:"sort", payload:e.target.value})}
        />
        <label htmlFor="kids">price - high to low</label>
      </div>
    </div>
  );
};
export default Filters;
