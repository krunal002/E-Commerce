import { useParams } from "react-router-dom";
import "./ProductDetails.css"
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const {productId} = useParams()
    const [ productDetailsData, setProductDetailsData ] = useState({})
    console.log(productDetailsData)

    const getProductDetails = async () => {
        const res = await fetch("/api/products/:productId")
        setProductDetailsData(await res.json())
    }
    useEffect(() => {
        getProductDetails()
    }, [])
    
    return <>
        <h1>{productId}</h1>
    </>
}
export default ProductDetails;