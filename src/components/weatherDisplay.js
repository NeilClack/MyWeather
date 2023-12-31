import { styled } from "styled-components";
import { convertTsToTime } from "../utils/datetime";
import Alert from "./alert";

const WeatherCard = styled.div`
  background-color: #adf0f7;
  padding: 0 1rem 1rem 1rem;
  width: 80%;
  border-radius: 2rem;
  box-shadow: 3px 3px 2px #adadad;
  margin-bottom: 1rem;
  @media (min-width: 450px) {
    width: 20rem;
  }
`;

const LocationName = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;

const CurCondition = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
`;

const IconContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const WeatherIcon = styled.img`
  background-color: #fcfcfc;
`;

const Table = styled.table`
  margin: auto;
`;

const TRow = styled.tr``;

const TCol = styled.td``;

const WeatherDisplay = (props) => {
  if (props.weatherData !== null) {
    return (
      <WeatherCard>
        <LocationName>{props.location}</LocationName>
        {props.weatherData.alerts && props.weatherData.alerts.map((a) => {
          return <Alert key={a.event} alert={a} />
        })}
        <CurCondition>
          {props.weatherData.current.weather[0].description}
        </CurCondition>
        <IconContainer>
          <WeatherIcon
            src={`https://openweathermap.org/img/wn/${props.weatherData.current.weather[0].icon}@2x.png`}
          />
        </IconContainer>
        <Table>
          <tbody>
            <TRow>
              <TCol>Sunrise</TCol>
              <TCol>{convertTsToTime(props.weatherData.current.sunrise)}</TCol>
            </TRow>
            <TRow>
              <TCol>Sunset</TCol>
              <TCol>{convertTsToTime(props.weatherData.current.sunset)}</TCol>
            </TRow>
            <TRow>
              <TCol>Temp.</TCol>
              <TCol>{props.weatherData.current.temp}</TCol>
            </TRow>
            <TRow>
              <TCol>Feels Like</TCol>
              <TCol>{props.weatherData.current.feels_like}</TCol>
            </TRow>
            <TRow>
              <TCol>Pressure</TCol>
              <TCol>{props.weatherData.current.pressure}</TCol>
            </TRow>
            <TRow>
              <TCol>Humidity</TCol>
              <TCol>{props.weatherData.current.humidity}</TCol>
            </TRow>
            <TRow>
              <TCol>Dew Point</TCol>
              <TCol>{props.weatherData.current.dew_point}</TCol>
            </TRow>
            <TRow>
              <TCol>UVI</TCol>
              <TCol>{props.weatherData.current.uvi}</TCol>
            </TRow>
            <TRow>
              <TCol>Clouds</TCol>
              <TCol>{props.weatherData.current.clouds}</TCol>
            </TRow>
            <TRow>
              <TCol>Wind Speed</TCol>
              <TCol>{props.weatherData.current.wind_speed}</TCol>
            </TRow>
          </tbody>
        </Table>
      </WeatherCard>
    );
  } else {
    return <div>Please Select a Location</div>;
  }
};

export default WeatherDisplay;
