import React, { useContext, useEffect } from "react"
// import { useHistory } from "react-router"
import {EmployeeContext } from "./EmployeeProvider"
import { useHistory } from 'react-router-dom';
import "./Employee.css"

export const EmployeeList = () => {
    const { getEmployees, employees, deleteEmployee } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    const history = useHistory()

    return (
        <>
        <h1>Kandy Employees</h1>

        <button className="hireButton" onClick={() => history.push("/employees/create")}>
            Hire Employee
        </button>

        <div className="employees">
            {
                employees.map(employee => 
                    <>
                    <div className="employee">
                        <h3>{employee.name}</h3>
                        <div>{employee.location.name}</div>
                        <div>{employee.isManager ? "Is a Manager" : ""}</div>
                        <div>{employee.fullTime ? "Is Full Time" : ""}</div>
                        <div>Makes ${employee.hourlyRate} per hour</div>
                        <button onClick={() => {history.push("/employees")
                            deleteEmployee(employee.id)}
                            }>Fire Employee</button>
                    </div>
                    </>
                    )
            }
        </div>
        </>
    )
}