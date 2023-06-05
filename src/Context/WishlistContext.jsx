// import { createContext, useEffect, useState } from "react"
// export const WishlistContext = createContext();

// export const WishlishContextHandler = ({ children }) => {
//     const [ wishlistData, setWishlistData ] = useState([])
//     const encodedToken = localStorage.getItem("encodedToken")

//     const getWishlistData = async () => {
//         try{
//             const res = await fetch("/api/user/wishlist", {
//                 headers: { authorization : encodedToken }
//               })
//             setWishlistData( await res.json() )
//         } catch(e){ console.log("error") }
//     }
//     useEffect(() => {
//         getWishlistData()
//     }, [getWishlistData])

//     return <WishlistContext.Provider value={{ wishlistData }}>
//         { children }
//     </WishlistContext.Provider>
// }


import { createContext, useEffect, useState } from "react"
export const WishlistContext = createContext();

export const WishlishContextHandler  = ({ children }) => {
    const [ wishlistData, setWishlistData ] = useState([])
    const encodedToken = localStorage.getItem("encodedToken")

    const getWishlistdata = async () => {
        try{
            const res = await fetch("/api/user/wishlist", {
                headers: { authorization : encodedToken }
              })
            setWishlistData( await res.json() )
        } catch(e){ console.log("error") }
    }

    useEffect(() => {
        getWishlistdata()
    },[getWishlistdata])

    // const addToCartHandler = async ( product ) => {
    //     try{
    //         const resp = await fetch("/api/user/cart",{
    //             method:"POST",
    //             headers: { authorization : encodedToken },
    //             body: JSON.stringify({ product:product })
    //         })
    //         console.log( await resp.json() )
    //     }catch(e){ console.log(e) }
    // }

    return <WishlistContext.Provider value={{ wishlistData }}>
        { children }
    </WishlistContext.Provider>
}