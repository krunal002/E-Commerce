import { createContext, useEffect, useState } from "react"
export const CartContext = createContext();

export const CartContextHandler = ({ children }) => {
    const [ cartData, setCartData ] = useState([])
    const encodedToken = localStorage.getItem("encodedToken")

    const getCartdata = async () => {
        try{
            const res = await fetch("/api/user/cart", {
                headers: { authorization : encodedToken }
              })
            setCartData( await res.json() )
            // console.log(res)
        } catch(e){ console.log("error") }
    }

    useEffect(() => {
        getCartdata()
    },[getCartdata])

    const addToCartHandler = async ( product ) => {
        try{
            const resp = await fetch("/api/user/cart",{
                method:"POST",
                headers: { authorization : encodedToken },
                body: JSON.stringify({ product:product })
            })
            console.log( await resp.json() )
        }catch(e){ console.log(e) }
    }

    return <CartContext.Provider value={{ cartData, addToCartHandler }}>
        { children }
    </CartContext.Provider>
}