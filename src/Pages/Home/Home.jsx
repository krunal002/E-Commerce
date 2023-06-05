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
        <h1>Home is READY</h1>

        <div className="showCategory">
          {categoryData.map((category) => (
            <div
              className="categoryProductContainer"
              onClick={() => clickHandler(category.categoryName)}
              style={{
                backgroundImage: `url(${category.pic})`,
                backgroundsize: "10px 10px",
              }}
            >
              <h2>{category.categoryName}</h2>
              <p>{category.description}</p>
            </div>
          ))}
        </div>

        <div className="storeRoute" onClick={() => clickHandler("all")}>
          Go to store
        </div>

        <div className="collectionContainer">
          <p className="collectionCategory">wedding Sarree collection</p>
          <p className="collectionCategory">latest Kurta collection</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
