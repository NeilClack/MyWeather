import { useState } from "react";

function App() {
  const [enteredLocation, setEnteredLocation] = useState("");
  const [locationList, setLocationList] = useState(null);

  async function geoQuery() {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${enteredLocation}&limit=5&appid=${process.env.REACT_APP_OW_API_KEY}`
      );
      const data = await res.json();
      return data;
    }
    catch (err) {
      console.error(err);
    }
  }

  const updateLocation = (event) => {
    setEnteredLocation(event.target.value);
  };

  const handleSubmit = async () => {
    const list = await geoQuery();
    setLocationList(list);
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
      {locationList && locationList.map(location => {
        return <li key={`${location.lat}${location.lon}`}>{location.name}, {location.state}</li>
      })}

    </div>
  );
}

export default App;
