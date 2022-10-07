import React,{ createContext, useState } from "react";

const ItemContext = createContext();

export function ItemProvider({children}){
    const [click, setClick] = useState(0)

    return(
        <ItemContext.Provider value={{click, setClick}} >{children}</ItemContext.Provider>
    )
}

export default ItemContext;