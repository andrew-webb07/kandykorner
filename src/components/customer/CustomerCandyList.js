import { CustomerCandyContext } from "./CustomerCandyProvider"
// import { useHistory } from 'react-router-dom';
import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import "./CustomerCandy.css"

export const CustomerCandyList= () => {
    const { getCustomerCandies, customerCandies } = useContext(CustomerCandyContext)

    useEffect(() => {
        getCustomerCandies()
    }, [])

    // const history = useHistory()

    const sortedCandies = customerCandies.sort((candy1, candy2) => candy2.product.price - candy1.product.price)

    // let duplicateCandies = sortedCandies => sortedCandies.filter((item,index) => sortedCandies.indexOf(item) != index)
   

    return (
        <>
        <h1>My Order</h1>

        <div className="customerCandy">
            <h3>Candy
                {
                    sortedCandies.map(customerCandy => 
                        <>
                            <div className="customerCandy_name">
                                {
                                    customerCandy.product.name ? customerCandy.product.name : ""
                                }
                                </div>
                        </>
                    )
                }
            </h3>
            {/* <h3>Quantity
                {
                    duplicateCandies(sortedCandies).length
                }
            </h3> */}
            <h3>
                Price
                {
                    sortedCandies.map(customerCandy =>
                        <div className="customerCandy_price">${customerCandy.product.price}</div>
                    )
                }
            </h3>
        </div>

        </>
    )
}