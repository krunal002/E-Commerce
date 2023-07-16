import "./Home.css";
import { useContext } from "react";
import Header from "../../Component/Header/Header";
import { CategoryContext, ProductContext } from "../../E-Commerse";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { categoryData } = useContext(CategoryContext);
  const { dispatch } = useContext(ProductContext);

  const navigate = useNavigate();

  const clickHandler = (value) => {
    navigate("/store");
    dispatch({ type: "category", payload: value });
  };

  return (
    <div>
      <Header />

      <div className="categoryContainer">
        <h1>Get your Choice</h1>

        <div className="showCategory">
          {categoryData.map((category) => (
            <div
              className="categoryProductContainer"
              onClick={() => clickHandler(category.categoryName)}
            >
              <h2>{category.categoryName}</h2>
              <p>{category.description}</p>
            </div>
          ))}
        </div>

        <div className="storeRoute" onClick={() => clickHandler("all")}>
          <h2>Go to store</h2>
        </div>

        <div className="collectionContainer">
          <p
            className="collectionCategory"
            onClick={() => clickHandler("women")}
          >
            wedding Sarree collection
          </p>
          <p className="collectionCategory" onClick={() => clickHandler("men")}>
            latest Kurta collection
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
