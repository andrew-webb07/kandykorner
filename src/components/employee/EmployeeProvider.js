import React, { useState, createContext } from "react"

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {

    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("https://kandy-korner-api.herokuapp.com/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployee = employeeObj => {
        return fetch("https://kandy-korner-api.herokuapp.com/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }

    const deleteEmployee = employeeId => {
        return fetch(`https://kandy-korner-api.herokuapp.com/employees/${employeeId}`, {
            method: "DELETE"
        })
            .then(getEmployees)
    }

    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployee, deleteEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}