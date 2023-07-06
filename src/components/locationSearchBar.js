import { useState } from "react";
import { geoQuery } from "../utils/queries";

const LocationSearchBar = (props) => {
  const [enteredLocation, setEnteredLocation] = useState("");
  const [locationList, setLocationList] = useState(null);

  const updateLocation = (event) => {
    setEnteredLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const list = await geoQuery(enteredLocation);
    setLocationList(list);
  };

  return (
    <div>
      <form>
        <label>Location</label>
        <input
          type="text"
          value={enteredLocation}
          placeholder="Enter City Name"
          onChange={updateLocation}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {locationList && locationList.map((location) => {
        return <li key={`${location.lat}${location.lon}`}>{location.name}, {location.state}</li>
      })}
    </div>
  );
};

export default LocationSearchBar;
