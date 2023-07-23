import { styled } from "styled-components";

const WeatherCard = styled.div``;

const WeatherIcon = styled.img``;

const WeatherDisplay = (props) => {
  if (props.weatherData.current) {
    return (
      <div>
        <div>
          <h2>{props.location}</h2>
        </div>
        <WeatherCard>
          <h2>
            Current Conditions: {props.weatherData.current.weather[0].main}
          </h2>
          <h3>{props.weatherData.current.weather[0].description}</h3>
          <WeatherIcon
            src={`https://openweathermap.org/img/wn/${props.weatherData.current.weather[0].icon}@2x.png`}
          />
          <div>
            <p>Sunrise: {props.weatherData.current.sunrise}</p>
            <p>Sunset: {props.weatherData.current.sunset}</p>
            <p>Temperature: {props.weatherData.current.temp}</p>
            <p>Feels Like: {props.weatherData.current.feels_like}</p>
            <p>Barometric Pressure: {props.weatherData.current.pressure}</p>
            <p>Humidity: {props.weatherData.current.humidity}</p>
            <p>Dew Point: {props.weatherData.current.dew_point}</p>
            <p>UV Index: {props.weatherData.current.uvi}</p>
            <p>Clouds: {props.weatherData.current.clouds}</p>
            <p>Visibility: {props.weatherData.current.visibility}</p>
            <p>Wind Speed: {props.weatherData.current.wind_speed}</p>
            <p>Wind Direction: {props.weatherData.current.wind_deg}</p>
          </div>
        </WeatherCard>
      </div>
    );
  } else {
    return <div>Please Select a Location</div>;
  }
};

export default WeatherDisplay;
