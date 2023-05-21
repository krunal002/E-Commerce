import { createContext, useEffect, useReducer, useState } from "react";

export const ProductContext = createContext();

export const ProductContextHandler = ({ children }) => {
  // const [ productData, setProductData] = useState([])
  const [tempData, setTempData] = useState([]);

  const reducerFun = (state, action) => {
    switch (action.type) {
      case "price":
        return { ...state, priceFilterValue: action.payload };
        
        case "category": return {...state, categoryFilter: action.payload }
        case "rating": return {...state, ratingFilter: action.payload }
    }
  };

  const [state, dispatch] = useReducer(reducerFun, {
    priceFilterValue: 0,
    categoryFilter: "all",
    ratingFilter: "all",
  });

  const getData = async () => {
    try {
      const response = await fetch("/api/products");
      // setData(await response.json())
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

    const categoryData = state.categoryFilter==="all"
        ? priceData
        : priceData.filter( ({category}) => category===state.categoryFilter )

    const productData = state.ratingFilter==="all"
        ? categoryData
        : categoryData.filter( ({rating}) => rating > Number(state.ratingFilter) )

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
