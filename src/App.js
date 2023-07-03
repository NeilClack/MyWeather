import { useState } from "react";
import "./App.css";
import LocationSearchBar from "./components/locationSearchBar";

function App() {
  const [location, setLocation] = useState("");

  const formSubmitHandler = (submittedLocation) => {
    setLocation(submittedLocation);
    console.log(submittedLocation);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Weather</h1>
        <h2>Quickly Check your Local Weather</h2>
        <p>
          <sub>
            <i>Powered by OpenWeather APIs</i>
          </sub>
        </p>
      </header>
      {/* <div className="page-content">
        <LocationSearchBar onFormSubmit={formSubmitHandler} />
      </div> */}
    </div>
  );
}

export default App;
