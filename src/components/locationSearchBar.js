import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { geoQuery } from "../utils/queries";

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
  const [enteredLocation, setEnteredLocation] = useState("");
  const [locationList, setLocationList] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const updateLocation = props.updateLocation;

  const updateEnteredLocation = (event) => {
    setEnteredLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const list = await geoQuery(enteredLocation);
    setLocationList(list);
    if (Object.keys(list).length === 1) {
      setLat(list[0]["lat"]);
      setLon(list[0]["lon"]);
    }
    console.log(list);
  };

  const geoLocate = () => {
    navigator.geolocation.getCurrentPosition(location => {
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
    }, err => {
      console.log(err)
    })
  }

  geoLocate();

  useEffect(() => {
    updateLocation([lat, lon, enteredLocation]);
  }, [lat, lon, enteredLocation, updateLocation]);

  return (
    <div>
      <Form>
        <label>
          Location{" "}
          <Input
            type="text"
            id="locationInput"
            value={enteredLocation}
            placeholder="Enter City Name"
            onChange={updateEnteredLocation}
          ></Input>
        </label>
        <Button type="submit" onClick={handleSubmit}>
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
                  setEnteredLocation(`${location.name}, ${location.state}`);
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
