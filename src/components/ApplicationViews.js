import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerCandyProvider} from "./customerCandy/CustomerCandyProvider"
import { CustomerCandyList } from "./customerCandy/CustomerCandyList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"


export const ApplicationViews = () => {
    return (
        <>
            <ProductProvider>
                <LocationProvider>
                    <EmployeeProvider>
                        <CustomerCandyProvider>
                            <CustomerProvider>
                                <Route exact path="/locations">
                                    <LocationList />
                                </Route>

                                <Route exact path="/products">
                                    <ProductList />
                                </Route>

                                <Route exact path="/employees">
                                    <EmployeeList />
                                </Route>

                                <Route exact path="/employees/create">
                                    <EmployeeForm />
                                </Route>

                                <Route exact path="/customerCandies">
                                    <CustomerCandyList />
                                </Route>

                                <Route exact path="/customers">
                                    <CustomerList />
                                </Route>
                            </CustomerProvider>
                        </CustomerCandyProvider>
                    </EmployeeProvider>
                </LocationProvider>
            </ProductProvider>
        </>
    )
}