import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { weatherQuery } from "./utils/queries";
import LocationSearchBar from "./components/locationSearchBar";
import WeatherDisplay from "./components/weatherDisplay";

const Main = styled.main`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  text-align: center;
`;

const Heading = styled.h1`
  margin: auto;
  padding: 0;
`;

const SubHeading = styled.h2`
  margin: auto;
  padding: 0;
`;

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
    <Main>
      <Header>
        <Heading>My Weather</Heading>
        <SubHeading>Quickly Check your Local Weather</SubHeading>
        <p>
          <sub>
            <i>Powered by OpenWeather</i>
          </sub>
        </p>
      </Header>
      <LocationSearchBar updateLocation={handleUpdateLocation} />
      {!weatherIsLoading && (
        <WeatherDisplay location={locationName} weatherData={weather} />
      )}
    </Main>
  );
}

export default App;
