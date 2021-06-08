import React, { useState, createContext } from "react"

export const CustomerContext = createContext()

export const CustomerProvider = (props) => {

    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("https://kandy-korner-api.herokuapp.com/customers?_embed=customerCandies")
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