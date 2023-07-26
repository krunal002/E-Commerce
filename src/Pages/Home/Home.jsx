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
        <h1 className="home-heading">Get your Choice</h1>

        <div className="showCategory">
          {categoryData.map((category) => (
            <div
              className="categoryProductContainer"
              onClick={() => clickHandler(category.categoryName)}
            >
              <img src={category.pic} alt="category" className="category-picture"/>
              <div className="category-info">
              <h2>{category.categoryName}</h2>
              <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="storeRoute" onClick={() => clickHandler("all")}>
          <h1 className="storeRoute-heading">Go to store</h1>
          <img src="https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg" alt="storePicture" />
          
        </div>

        <div className="collectionContainer">
          <p
            className="collectionCategory"
            onClick={() => clickHandler("women")}
            style={{backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/000/678/669/original/simple-happy-diwali-greeting-with-diya.jpg)"}}
          >
            Diwali collection
          </p>
          <p className="collectionCategory" onClick={() => clickHandler("men")} style={{backgroundImage:"url(https://img.freepik.com/free-vector/raksha-bandhan-indian-festival-brother-sister-banner-background_1035-24199.jpg)"}}> 
            Latest Raksha Bandhan collection
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
