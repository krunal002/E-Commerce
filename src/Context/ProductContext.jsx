import { createContext, useEffect, useReducer, useState } from "react";

export const ProductContext = createContext();

export const ProductContextHandler = ({ children }) => {
  const [tempData, setTempData] = useState([]);

  const reducerFun = (state, action) => {
    switch (action.type) {
      case "productSearch":
        return { ...state, productSearch: action.payload };
      case "price":
        return {
          ...state,
          priceFilterValue: action.payload,
          productSearch: "",
        };
      case "category":
        return { ...state, categoryFilter: action.payload, productSearch: "" };
      case "rating":
        return { ...state, ratingFilter: action.payload, productSearch: "" };
      case "sort":
        return { ...state, sortPrice: action.payload, productSearch: "" };
      case "clear":
        return {
          ...state,
          priceFilterValue: 0,
          categoryFilter: "all",
          ratingFilter: "all",
          sortPrice: "none",
          productSearch: "",
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFun, {
    priceFilterValue: 0,
    categoryFilter: "all",
    ratingFilter: "all",
    sortPrice: "none",
    productSearch: "",
  });

  const getData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setTempData(data.products);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const priceData =
    state.priceFilterValue === 0
      ? tempData
      : tempData.filter(
          ({ sellingPrice }) => sellingPrice < Number(state.priceFilterValue)
        );

  const categoryData =
    state.categoryFilter === "all"
      ? priceData
      : priceData.filter(({ category }) => category === state.categoryFilter);

  const ratingData =
    state.ratingFilter === "all"
      ? categoryData
      : categoryData.filter(
          ({ rating }) => rating > Number(state.ratingFilter)
        );

  const sortedData =
    state.sortPrice === "none"
      ? ratingData
      : state.sortPrice === "lowToHigh"
      ? ratingData.sort((a, b) => a.sellingPrice - b.sellingPrice)
      : ratingData.sort((a, b) => b.sellingPrice - a.sellingPrice);

  const searchItems =
    state.productSearch === ""
      ? sortedData
      : sortedData.filter(({ name }) =>
          name.toLowerCase().includes(state.productSearch.toLowerCase())
        );

  const productData = searchItems;

  return (
    <div>
      <ProductContext.Provider
        value={{
          productData,
          state,
          dispatch,
        }}
      >
        {children}
      </ProductContext.Provider>
    </div>
  );
};
