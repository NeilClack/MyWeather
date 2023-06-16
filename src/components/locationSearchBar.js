import { useState } from "react";

const LocationSearchBar = () => {
  return (
    <div>
      <form>
        <fieldset>
          <label>Location</label>
          <input
            type="text"
            placeholder="Enter your city name or zipcode"
          ></input>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default LocationSearchBar;
