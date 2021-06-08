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
    const currentUserId = parseInt(localStorage.getItem("kandy_customer"))

    const currentUserCandies = customerCandies.filter(customerCandy => customerCandy.customerId === currentUserId)

    const sortedCandies = currentUserCandies.sort((candy1, candy2) => candy2.product.price - candy1.product.price)

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
                        <div className="customerCandy_price">{customerCandy.product.price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          })}</div>
                    )
                }
            </h3>
        </div>

        </>
    )
}