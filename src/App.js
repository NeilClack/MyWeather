import { useEffect, useState } from "react";
import { weatherQuery } from "./utils/queries";
import LocationSearchBar from "./components/locationSearchBar";
import WeatherDisplay from "./components/weatherDisplay";

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [weather, setWeather] = useState({});
  const [weatherIsLoading, setWeatherIsLoading] = useState(true);
  const [locationName, setLocationName] = useState("");

  const handleUpdateLocation = ([lat, lon, enteredLocation]) => {
    setLat(lat);
    setLon(lon);
    setLocationName(enteredLocation);
  };

  useEffect(() => {
    if (lat !== "" || lon !== "") {
      const fetchWeather = async () => {
        const data = await weatherQuery(lat, lon);
        console.log(`Weather data in useEffect function: ${data}`);
        setWeather(data);
        if (data) {
          setWeatherIsLoading(false);
        }
      };
      fetchWeather();
    }
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
      {!weatherIsLoading && (
        <WeatherDisplay location={locationName} weatherData={weather} />
      )}
    </div>
  );
}

export default App;
