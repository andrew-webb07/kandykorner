import React, { useContext, useEffect, useState } from "react"
// import { useHistory } from "react-router"
import {ProductContext } from "./ProductProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Product.css"
import { CustomerCandyContext } from "../customerCandy/CustomerCandyProvider"

export const ProductList = () => {
    const { getProducts, products } = useContext(ProductContext)
    const { addCustomerCandy} = useContext(CustomerCandyContext)

    const { productId } = useParams();

    const productIdInt = parseInt(productId)

    const history = useHistory()

    useEffect(() => {
        getProducts()
    }, [])

    const currentUserId = parseInt(localStorage.getItem("kandy_customer"))


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
                        <button onClick={() => {history.push("/customerCandies")
                            addCustomerCandy({
                                customerId: currentUserId,
                                productId: product.id
                            })}
                            }>Order Candy</button>
                    </div>
                    )
            }
        </div>
        </>
    )
}