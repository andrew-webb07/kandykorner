import React, { useState, createContext } from "react"

export const CustomerContext = createContext()

export const CustomerProvider = (props) => {

    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers?_embed=customerCandies")
        .then(res => res.json())
        .then(setCustomers)
    }

    return (
        <CustomerContext.Provider value={{
            customers, getCustomers
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}