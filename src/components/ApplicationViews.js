import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"


export const ApplicationViews = () => {
    return (
        <>
            <ProductProvider>
                <LocationProvider>
                    <Route exact path="/locations">
                        <LocationList />
                    </Route>

                    <Route exact path="/products">
                        <ProductList />
                    </Route>
                </LocationProvider>
            </ProductProvider>
        </>
    )
}