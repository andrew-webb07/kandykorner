import React, { useContext, useEffect } from "react"
// import { useHistory } from "react-router"
import {LocationContext } from "./LocationProvider"

export const LocationList = () => {
    const { getLocations, locations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    // const history = useHistory()

    return (
        <>
        <h1>Kandy Locations</h1>

        <div className="locations">
            {
                locations.map(location => 
                    <div className="location">{location.name}</div>
                    )
            }
        </div>
        </>
    )
}