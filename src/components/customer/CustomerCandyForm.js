import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { CustomerCandyContext } from "./CustomerCandyProvider"
import "./CustomerCandy.css"
import { useHistory, useParams } from 'react-router-dom';

export const CustomerCandyForm = () => {
    const { addCustomerCandy, getCustomerCandyById, updateCustomerCandy } = useContext(CustomerCandyContext)
    const { locations, getLocations } = useContext(LocationContext)

   
    const [customerCandy, setCustomerCandy] = useState({})
    
    const [isLoading, setIsLoading] = useState(true);

    const {customerCandyId} = useParams();
	  const history = useHistory();

    const handleControlledInputChange = (event) => {

      const newCustomerCandy = { ...CustomerCandy }
 
      newCustomerCandy[event.target.name] = event.target.value
      
      setCustomerCandy(newCustomerCandy)
    }

    const handleSaveCustomerCandy = () => {
      if (parseInt(customerCandy.locationId) === 0) {
          window.alert("Please select a location")
      } else {
       
        setIsLoading(true);
        if (customerCandyId){
          //PUT - update
          updateCustomerCandy({
              id: customerCandy.id,
              customerId: customerCandyId,
              locationId: parseInt(customerCandy.locationId)
          })
          .then(() => history.push(`/CustomerCandys/detail/${CustomerCandy.id}`))
        } else {
          //POST - add
          addCustomerCandy({
              name: CustomerCandy.name,
              locationId: parseInt(CustomerCandy.locationId),
              isManager: CustomerCandy.isManager,
              fullTime: CustomerCandy.fullTime,
              hourlyRate: CustomerCandy.hourlyRate
          })
          .then(() => history.push("/CustomerCandys"))
        }
      }
    }

    // Get locations. If CustomerCandyId is in the URL, getCustomerCandyById
    useEffect(() => {
      getLocations().then(() => {
        if (CustomerCandyId){
          getCustomerCandyById(CustomerCandyId)
          .then(CustomerCandy => {
              setCustomerCandy(CustomerCandy)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    //since state controlls this component, we no longer need
    //useRef(null) or ref

    return (
      <form className="CustomerCandyForm">
        <h2 className="CustomerCandyForm__title">{CustomerCandyId ? <>Edit CustomerCandy</> : <>New CustomerCandy</>}</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="CustomerCandyName">CustomerCandy name: </label>
            <input type="text" id="CustomerCandyName" name="name" required autoFocus className="form-control"
            placeholder="CustomerCandy name"
            onChange={handleControlledInputChange}
            defaultValue={CustomerCandy.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="CustomerCandyLocation">Assign to location: </label>
            <select value={CustomerCandy.locationId} name="locationId" id="CustomerCandyLocation" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="CustomerCandyManager">Is a Manager?</label>
            <input type="checkbox" id="CustomerCandyManager" name="CustomerCandyManager" checked={CustomerCandy.isManager} required autoFocus className="form-control"
            placeholder="CustomerCandy Manager"
            onChange={handleIsManager} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="CustomerCandyFullTime">Is full-time?</label>
            <input type="checkbox" id="CustomerCandyFullTime" name="CustomerCandyFullTime" checked={CustomerCandy.isFullTime} required autoFocus className="form-control"
            placeholder="CustomerCandy Manager"
            onChange={handleIsFullTime} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="CustomerCandyHourlyRate">Hourly Rate: </label>
            <input type="number" id="CustomerCandyHourlyRate" name="hourlyRate" required autoFocus className="form-control"
            placeholder="CustomerCandy Hourly Rate"
            onChange={handleControlledInputChange}
            defaultValue={CustomerCandy.hourlyRate}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveCustomerCandy()
          }}>
        {CustomerCandyId ? <>Save CustomerCandy</> : <>Add CustomerCandy</>}</button>
      </form>
    )
}