import "./filters.css";
const Filters = () => {
  return (
    <div className="filters">
      <div className="filterHeader">
        <h2>Filters </h2>
        <div> <button>Clear</button></div>
       
      </div>

      <div className="priceRange">
        <div className="heading">Price</div>
        <input
          type="range"
          className="input"
          defaultValue={0}
          step="100"
          min="100"
          max="1000"
          //   onChange={priceChangeHandler}
        />
        <div className="displayPrice">
          <small>100</small>
          <small>500</small>
          <small>1000</small>
        </div>
      </div>

      <div className="categoryFilter">
        <div className="heading">Category</div>
        <div>
          <input
            type="radio"
            name="categoryFil"
            value="all"
            // onClick={categoryHandler}
          />
          <label htmlFor="men">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="categoryFil"
            value="men"
            // onClick={categoryHandler}
          />
          <label htmlFor="men">men</label>
        </div>
        <div>
          <input
            type="radio"
            name="categoryFil"
            value="women"
            // onClick={categoryHandler}
          />
          <label htmlFor="women">women</label>
        </div>
        <div>
          <input
            type="radio"
            name="categoryFil"
            value="kids"
            // onClick={categoryHandler}
          />
          <label htmlFor="kids">kids</label>
        </div>
      </div>

      <div className="ratingFilter">
        <div className="heading">Rating</div>
        <div>
          <input
            type="radio"
            name="ratingFil"
            value="1"
            // onClick={ratingHandler}
          />
          <label htmlFor="kids">1 star & above</label>
        </div>
        <div>
          <input
            type="radio"
            name="ratingFil"
            value="2"
            // onClick={ratingHandler}
          />
          <label htmlFor="kids">2 star & above</label>
        </div>
        <div>
          <input
            type="radio"
            name="ratingFil"
            value="3"
            // onClick={ratingHandler}
          />
          <label htmlFor="kids">3 star & above</label>
        </div>
        <div>
          <input
            type="radio"
            name="ratingFil"
            value="4"
            // onClick={ratingHandler}
          />
          <label htmlFor="kids">4 star & above</label>
        </div>
      </div>

      <div className="priceSort">
        <div className="heading">Sort by</div>
        <input
          type="radio"
          name="priceSort"
          value="lowToHigh"
          //   onClick={sortPrice}
        />
        <label htmlFor="kids">price - low to high</label>
      </div>
      <div>
        <input
          type="radio"
          name="priceSort"
          value="highToLow"
          //   onClick={sortPrice}
        />
        <label htmlFor="kids">price - high to low</label>
      </div>
    </div>
  );
};
export default Filters;
