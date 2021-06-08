import React, { useContext, useEffect } from "react"
import {CustomerContext } from "./CustomerProvider"
import "./Customer.css"

export const CustomerList = () => {
    const { getCustomers, customers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    const sortedCustomers = customers.sort((customer1, customer2) => customer2.customerCandies.length - customer1.customerCandies.length)

    return (
        <>
        <h1>Kandy Customers</h1>


        <div className="customer">
            <h3> Customer
            {
                sortedCustomers.map(customer => 
                    <>
                    <div className="customer_detail">
                        <div>{customer.name}</div>
                    </div>
                    </>
                    )
            }
            </h3>
            <h3> Candies Bought
            {
                sortedCustomers.map(customer => 
                    <>
                    <div className="customer_detail">
                        <div>{customer.customerCandies.length}</div>
                    </div>
                    </>
                    )
            }
            </h3>
        </div>  
        </>
    )
}