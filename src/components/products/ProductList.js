import React, { useContext, useEffect, useState } from "react"
// import { useHistory } from "react-router"
import {ProductContext } from "./ProductProvider"
import "./Product.css"

export const ProductList = () => {
    const { getProducts, products } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
        <h1>Kandy Products</h1>

        <div className="products">
            {
                products.map(product => 
                    <div className="product">
                        {product.name}
                        <div className="product_type">
                            - Product Type: {product.productType.type}
                        </div>
                    </div>
                    )
            }
        </div>
        </>
    )
}