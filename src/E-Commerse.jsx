import Cart from "./Pages/Cart"
import Home from "./Pages/Home"
import LoginPage from "./Pages/LoginPage"
import Store from "./Pages/Store"
import Wishlist from "./Pages/Wishlist"

import { Routes, Route } from "react-router-dom"
import Mockman from "mockman-js"

import { ProductContext } from "./Context/ProductContext";
export { ProductContext }

const ECommerse = () => {
    return <div>
        <h1>siteName</h1>
        

        <Routes>
            <Route path="/mockman" element={ <Mockman /> } />
            <Route path="/" element={ <Home/> } />
            <Route path="/cart" element={ <Cart/> } />
            <Route path="/store" element={ <Store/> } />
            <Route path="/wishlist" element={ <Wishlist/> }/>
            <Route path="/login" element={ <LoginPage/> }/>
        </Routes>
    </div>
}
export default ECommerse;