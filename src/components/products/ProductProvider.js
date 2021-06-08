import React, { useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {

    const [products, setProducts ] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getProducts = () => {
        return fetch("https://kandy-korner-api.herokuapp.com/products?_expand=productType")
        .then(res => res.json())
        .then(setProducts)
    }

    return (
        <ProductContext.Provider value={
            {products, getProducts, searchTerms, setSearchTerms}
        }>{props.children}</ProductContext.Provider>
    )
}