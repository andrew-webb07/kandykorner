import React, { useState, createContext } from "react"

export const LocationContext = createContext()

export const LocationProvider = (props) => {

    const [locations, setLocations ] = useState([])

    const getLocations = () => {
        return fetch("https://kandy-korner-api.herokuapp.com/locations")
        .then(res => res.json())
        .then(setLocations)
    }

    return (
        <LocationContext.Provider value={
            {locations, getLocations}
        }>{props.children}</LocationContext.Provider>
    )
}