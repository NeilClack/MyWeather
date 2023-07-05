import LocationSearchBar from "./components/locationSearchBar";

function App() {
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
      <LocationSearchBar />
    </div>
  );
}

export default App;
