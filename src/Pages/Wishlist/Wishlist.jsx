import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Wishlist = ( ) => {

    const [ wishlistData, setWishlistData ] = useState([])

    const getData = async() => {
        try{
            const res = await fetch("/api/user/wishlist")
            console.log("a",await res.json())
        } catch (e) { console.log(e)}
    }
    useEffect(()=>{ getData()}, [])


    return <div>
        <h2>Wishlist is Ready</h2>
        <Link to="/" className="headerLink">Home</Link>
    </div>
}
export default Wishlist;
