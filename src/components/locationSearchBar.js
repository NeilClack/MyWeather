import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { geoQuery, reverseGeoQuery } from "../utils/queries";

const Form = styled.form`
  padding: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input``;

const Button = styled.button`
  margin: 0.25rem;
  padding: 0.1rem 0.4rem;
  background-color: #0f9eff;
  border-color: #0f9eff;
  box-shadow: 2px 2px 2px grey;
  border-radius: 10%;
`;

const SearchList = styled.div`
  width: 70%;
  margin: auto;
  padding-left: 3.5rem;
`;

const ListElement = styled.li`
  list-style: none;
  margin: auto;
  text-align: left;
  padding: 0.25rem;
`;

const LocationSearchBar = (props) => {
  const [userInput, setUserInput] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [locationList, setLocationList] = useState([]);
  const [locationName, setLocationName] = useState("");
  const updateLocation = props.updateLocation;

  const updateUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const list = await geoQuery(userInput);
    setLocationList(list);
    if (Object.keys(list).length === 1) {
      setLat(list[0]["lat"]);
      setLon(list[0]["lon"]);
      setLocationName(list[0]["name"]);
    }
    console.log(list);
  };

  const geoLocate = () => {
    if (lat === "" && lon === "") {
      // Get current location
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const queriedLocation = await reverseGeoQuery(
            position.coords.latitude,
            position.coords.longitude
          );
          console.log(queriedLocation);
          setLocationName(
            `${queriedLocation[0].name}, ${queriedLocation[0].state}`
          );
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  };

  if (lat !== "" && lon !== "" && locationName !== "") {
    updateLocation([lat, lon, locationName]);
  }

  useEffect(() => {
    geoLocate();
  }, []);

  return (
    <div>
      <Form>
        <Label>
          Location{" "}
          <Input
            type="text"
            id="locationInput"
            value={userInput}
            placeholder="Enter City Name"
            onChange={updateUserInput}
          ></Input>
        </Label>
        <Button type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>
      <SearchList>
        {locationList.length > 1 &&
          locationList.map((location) => {
            return (
              <ListElement
                key={`${location.lat}${location.lon}`}
                onClick={() => {
                  setLat(location.lat);
                  setLon(location.lon);
                  setLocationList([]);
                  setLocationName(`${location.name}, ${location.state}`);
                }}
              >
                {location.name}, {location.state}
              </ListElement>
            );
          })}
      </SearchList>
    </div>
  );
};

export default LocationSearchBar;
