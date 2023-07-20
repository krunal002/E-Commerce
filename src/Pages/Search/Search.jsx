import "./Search.css";
import { useContext, useState } from "react";

import Header from "../../Component/Header/Header";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import { ProductContext } from "../../E-Commerse";

const Search = () => {
  const { productData } = useContext(ProductContext);
  const [searchText, setSearchText] = useState("");

  const searchData =
    searchText === ""
      ? productData.filter(({ rating }) => rating >= 4)
      : productData.filter(({ name }) =>
          name.toLowerCase().includes(searchText.toLowerCase())
        );

  return (
    <div>
      <Header />
    
      <div className="search-container">
        <header className="search-icon">
          <input
            type="search"
            autofocus
            value={searchText}
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <i class="fa fa-search" aria-hidden="true"></i>

        </header>
        <h2 style={{ color: "gray" }}>Suggested Products : </h2>
        <ProductCard products={searchData} />
      </div>
    </div>
  );
};
export default Search;
