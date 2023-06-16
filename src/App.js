import './App.css';
import LocationSearchBar from './components/locationSearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Weather</h1>
        <h2>Quickly Check your Local Weather</h2>
        <p><sub><i>Powered by OpenWeather APIs</i></sub></p>
      </header>
      <div className="page-content">
        <LocationSearchBar />
      </div>
    </div>
  );
}

export default App;
