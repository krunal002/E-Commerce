import { useContext } from "react";

import "./filters.css";
import { ProductContext } from "../../E-Commerse";

import * as React from "react";
import Button from "@mui/material/Button";

const Filters = () => {
  const { dispatch, state } = useContext(ProductContext);
  const [hideFilters, setHideFilters] = React.useState(true);

  return (
    <div>
      <div className={hideFilters ? "hide-filters" : "filter-container"}>
        <div className="filterHeader">
          <h2>Filters </h2>
          <div>
            <button
              className="clear-button"
              onClick={(e) => {
                dispatch({ type: "clear" });
                setHideFilters(!hideFilters);
              }}
            >
              CLEAR
            </button>
          </div>
        </div>

        {/* priceRange */}
        <div className="priceRange fil-container">
          <div className="heading">PRICE RANGE</div>
          <input
            type="range"
            className="input"
            value={state.priceFilterValue}
            defaultValue={state.priceFilterValue}
            step="100"
            min="0"
            max="1000"
            onChange={(e) =>
              dispatch({ type: "price", payload: e.target.value })
            }
          />
          <div className="displayPrice">
            <small>100</small>
            <small>500</small>
            <small>1000</small>
          </div>
        </div>

        {/* categoryFilter */}
        <div className="categoryFilter fil-container">
          <div className="heading">CATEGORY</div>
          <div>
            <input
              type="radio"
              name="categoryFil"
              value="all"
              checked={state.categoryFilter === "all"}
              onClick={(e) =>
                dispatch({ type: "category", payload: e.target.value })
              }
            />
            <label htmlFor="men">All</label>
          </div>
          <div>
            <input
              type="radio"
              name="categoryFil"
              value="love"
              onClick={(e) =>
                dispatch({ type: "category", payload: e.target.value })
              }
            />
            <label htmlFor="love">Love</label>
          </div>
          <div>
            <input
              type="radio"
              name="categoryFil"
              value="festival"
              onClick={(e) =>
                dispatch({ type: "category", payload: e.target.value })
              }
            />
            <label htmlFor="festival">Festivals</label>
          </div>
          <div>
            <input
              type="radio"
              name="categoryFil"
              value="birthday"
              onClick={(e) =>
                dispatch({ type: "category", payload: e.target.value })
              }
            />
            <label htmlFor="birthday">Birthday</label>
          </div>
          <div>
            <input
              type="radio"
              name="categoryFil"
              value="anniversary"
              onClick={(e) =>
                dispatch({ type: "category", payload: e.target.value })
              }
            />
            <label htmlFor="anniversary">Anniversary</label>
          </div>
        </div>

        {/* ratingFilter */}
        <div className="ratingFilter fil-container">
          <div className="heading">RATINGS</div>
          <div>
            <input
              type="radio"
              name="ratingFil"
              value="1"
              checked={state.ratingFilter === "1"}
              onClick={(e) =>
                dispatch({ type: "rating", payload: e.target.value })
              }
            />
            <label htmlFor="kids">
              1{" "}
              <i class="fa fa-star" aria-hidden="true">
                {" "}
                & above
              </i>
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="ratingFil"
              value="2"
              checked={state.ratingFilter === "2"}
              onClick={(e) =>
                dispatch({ type: "rating", payload: e.target.value })
              }
            />
            <label htmlFor="kids">
              2{" "}
              <i class="fa fa-star" aria-hidden="true">
                {" "}
                & above
              </i>
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="ratingFil"
              value="3"
              checked={state.ratingFilter === "3"}
              onClick={(e) =>
                dispatch({ type: "rating", payload: e.target.value })
              }
            />
            <label htmlFor="kids">
              3{" "}
              <i class="fa fa-star" aria-hidden="true">
                {" "}
                & above
              </i>
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="ratingFil"
              value="4"
              checked={state.ratingFilter === "4"}
              onClick={(e) =>
                dispatch({ type: "rating", payload: e.target.value })
              }
            />
            <label htmlFor="kids">
              4{" "}
              <i class="fa fa-star" aria-hidden="true">
                {" "}
                & above
              </i>
            </label>
          </div>
        </div>

        {/* priceSort */}
        <div className="priceSort fil-container">
          <div className="heading">PRICE</div>
          <div>
            <input
              type="radio"
              name="priceSort"
              value="lowToHigh"
              checked={state.sortPrice === "lowToHigh"}
              onClick={(e) =>
                dispatch({ type: "sort", payload: e.target.value })
              }
            />
            <label htmlFor="kids">Low to High</label>
          </div>
          <div>
            <input
              type="radio"
              name="priceSort"
              value="highToLow"
              checked={state.sortPrice === "highToLow"}
              onClick={(e) =>
                dispatch({ type: "sort", payload: e.target.value })
              }
            />
            <label htmlFor="kids">High to Low</label>
          </div>
        </div>
      </div>

      <div className="filters-button-wrapper">
        <Button
          variant="contained"
          color="warning"
          onClick={() => setHideFilters(!hideFilters)}
        >
          {hideFilters ? "Filters" : "Hide Filters"}
        </Button>
      </div>
    </div>
  );
};
export default Filters;
