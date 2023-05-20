import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext();

export const ProductContextHandler = ( {children} ) => {
    const [ data, setData] = useState([])

    const getData = async () => {
        try{
            const response = await fetch("/api/products")
            setData(await response.json())
        }
        catch(e) { console.log(e) }
    }

    useEffect(()=>{
        getData();
    },[])

    return <div>
        <ProductContext.Provider value={{data}}>
            {children}
        </ProductContext.Provider>
    </div>
}