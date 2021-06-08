import React, { useState, createContext } from "react"

export const CustomerCandyContext = createContext()

export const CustomerCandyProvider = (props) => {

    const [customerCandies, setCustomerCandies] = useState([])

    const getCustomerCandies = () => {
        return fetch("http://localhost:8088/customerCandies?_expand=product&_expand=customer")
        .then(res => res.json())
        .then(setCustomerCandies)
    }

    const addCustomerCandy = CustomerCandyId => {
        return fetch("http://localhost:8088/customerCandies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(CustomerCandyId)
        })
        .then(getCustomerCandies)
    }

    return (
        <CustomerCandyContext.Provider value={{
            customerCandies, getCustomerCandies, addCustomerCandy
        }}>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}