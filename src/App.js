import { useEffect, useState } from "react";
import "./App.css";
// import LocationSearchBar from "./components/locationSearchBar";

function App() {
  const [enteredLocation, setEnteredLocation] = useState("");
  const [locationList, setLocationList] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  async function queryLocationsHandler(enteredLocation) {
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${enteredLocation}&limit=5&appid=${process.env.REACT_APP_OW_API_KEY}`;

    try {
      const response = await fetch(geoUrl);

      if (!response.ok) {
        throw new Error(`HTTP error. status: ${response.status}`);
      }

      const locationList = await response.json();
      setLat(locationList[0]["lat"]);
      setLon(locationList[0]["lon"]);
      return locationList;
    } catch (error) {
      console.error(error);
    }
  }

  const updateLocation = (event) => {
    setEnteredLocation(event.target.value);
    console.log(enteredLocation);
  };

  const handleSubmit = async (event) => {
    let tempLocationList = [];
    event.preventDefault();
    console.log(enteredLocation);
    const data = await queryLocationsHandler(enteredLocation);
    data.map((i) => {
      tempLocationList.push(`${i["name"]}, ${i["state"]}`);
    });
    setLocationList(tempLocationList);
  };

  return (
    <div>
      <header>
        <h1>My Weather</h1>
        <h2>Quickly Check your Local Weather</h2>
        <p>
          <sub>
            <i>Powered by OpenWeather</i>
          </sub>
        </p>
      </header>
      <label for="location">Location</label>
      <input id="location" type="text" onChange={updateLocation}></input>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {locationList.map((location) => {
        return <li key={location}>{location}</li>;
      })}
    </div>
  );
}

export default App;
