import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetailsData, setProductDetailsData] = useState({});
  const url = `/api/products/${productId}`

  const getProductDetails = async () => {
    const res = await fetch(url);
    const reqData = await res.json();
    setProductDetailsData(reqData.product);
  };
  useEffect(() => {
    getProductDetails();
  });

  const { _id, image, sellingPrice, category, rating, price } = productDetailsData;
  return (
    <>
      <h1>{productId}</h1>
      <div key={_id} className="storeProducts">
          <img src={image} alt="clothingImage" className="storeImage" />
        <p>
          Price : ₹{sellingPrice}{" "}
          <span className="printedPrice">{price}</span>
        </p>
        <p>Category : {category}</p>
        <p>Rating : {rating}/5</p>
      </div>
    </>
  );
};
export default ProductDetails;
