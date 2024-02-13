import React from "react";
import { createContext, useContext } from "react";

export const CatContext = createContext({
    category:[
        {
            
            category: "Category",
            
        }
    ],
    addCat: (category) => {},
    updateCat: (id) => {},
    deleteCat: (category) => {},
})

export const useCat = () => {
    return useContext(CatContext)
}

export const CatProvider = CatContext.Provider;