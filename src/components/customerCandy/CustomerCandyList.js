import { CustomerCandyContext } from "./CustomerCandyProvider"
// import { useHistory } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react"
import "./CustomerCandy.css"

export const CustomerCandyList= () => {
    const { getCustomerCandies, customerCandies } = useContext(CustomerCandyContext)

    useEffect(() => {
        getCustomerCandies()
    }, [])

    const currentUserId = parseInt(localStorage.getItem("kandy_customer"))

    const [candies, setCandy] = useState([])

    const sortedCandies = candies.sort((candy1, candy2) => candy2.price - candy1.price)

    useEffect(() => {
        const currentUserCandies = customerCandies.filter(customerCandy => customerCandy.customerId === currentUserId)

       
        let singleUserCandies = []
        let candyQuantityObject = {}

        const oneRingToRuleThemAll = []

        for (const currentUserCandy of currentUserCandies) {
            console.log(currentUserCandy)
            if(currentUserCandy.product.name in candyQuantityObject) {
                candyQuantityObject[currentUserCandy.product.name] += 1
            } else {
                candyQuantityObject[currentUserCandy.product.name] = 1
                singleUserCandies.push(currentUserCandy.product)
            }
        }

        for (const candyQuantityObjectProperty in candyQuantityObject) {
            const foundCandy = singleUserCandies.find(candy => candy.name === candyQuantityObjectProperty)
            foundCandy.quantity = candyQuantityObject[foundCandy.name]
            oneRingToRuleThemAll.push(foundCandy)
        }

        setCandy(oneRingToRuleThemAll)
        console.log(candyQuantityObject)
        console.log(singleUserCandies)
    }, [customerCandies])

    const totalPrice = (candyObject) => {
        return candyObject.price * candyObject.quantity
    }

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
                                  customerCandy.name
                                }
                                </div>
                        </>
                    )
                }
            </h3>
            <h3>Quantity
                {
                    sortedCandies.map(customerCandy => 
                        <>
                            <div className="customerCandy_name">
                                {
                                  customerCandy.quantity
                                }
                                </div>
                        </>
                    )
                }
            </h3>
            <h3>
                Price
                {
                    sortedCandies.map(customerCandy =>
                        <div className="customerCandy_price">{totalPrice(customerCandy).toLocaleString('en-US', {
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