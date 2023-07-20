import { useEffect, useState } from "react";
import { weatherQuery } from "./utils/queries";
import LocationSearchBar from "./components/locationSearchBar";
import WeatherDisplay from "./components/weatherDisplay";

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [weather, setWeather] = useState(null);
  const [locationName, setLocationName] = useState("");

  const handleUpdateLocation = ([lat, lon, enteredLocation]) => {
    setLat(lat);
    setLon(lon);
    setLocationName(enteredLocation);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await weatherQuery(lat, lon);
      setWeather(data);
    };
    fetchWeather();
  }, [lat, lon]);

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
      <LocationSearchBar updateLocation={handleUpdateLocation} />
      {weather && <WeatherDisplay location={locationName} />}
    </div>
  );
}

export default App;
