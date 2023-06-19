import { useState } from "react";

const LocationSearchBar = (props) => {
  const [enteredLocation, setEnteredLocation] = useState("");

  // In some cases, updating like this could fail due to React state update scheduling.
  // If several state updates are scheduled, you may end up updating a previous version of the state, rather than the "current".
  // In this case, I am not depending on the previous state, so I will leave this as is.
  // Here's how to do it if you depend on the previous state,
  // and I'll use an object as the previous state to make it more obvious what is happening.
  //
  // setEnteredLocation((prevState) => {
  //   return {..prevState, updatedKey: event.target.value};
  // })
  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const submitHandler = (event) => {
    // Prevents the form from pushing data to the server.
    event.preventDefault();
    const submittedLocation = enteredLocation;
    props.onFormSubmit(submittedLocation);
    // Reset the location field after submitting.
    setEnteredLocation("");
  };

  return (
    <div>
      <form>
        <fieldset>
          <label>Location</label>
          <input
            type="text"
            value={enteredLocation}
            placeholder="Enter your city name or zipcode"
            onChange={locationChangeHandler}
          ></input>
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default LocationSearchBar;
