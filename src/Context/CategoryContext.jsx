import { createContext, useState, useEffect } from "react";

export const CategoryContext = createContext();

export const CategoryContextHandler = ({ children }) => {

  const [ categoryData, setCategoryData ] = useState([])

  const getData = async() => {
    const res = await fetch("/api/categories")
    const data = await res.json()
    setCategoryData(data.categories)
  }
  useEffect(() => {
    getData();
  }, [])
  
  return (
    <div>
      <CategoryContext.Provider value={{ categoryData }}>{children}</CategoryContext.Provider>
    </div>
  );
};
