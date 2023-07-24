# Application Description

Allow a user to enter a location, then pull today's current weather information and display it in a user friendly way.

## Tasks

- [x] Users need to be able to search the OpenWeather location database
- [x] Users need to be able to select a location
- [x] Upon selecting a location, the weather needs to be fetched from OpenWeather
- [x] Weather data needs to be filtered to information the user cares about
- [x] Remaining weather data needs to be displayed on the page
- [x] Site needs to be styled for Mobile screens
- [ ] Site needs to be styled for desktop screens

### Extra Features

- [x] Search results should be clickable to select a location
  - _This was completed due to a bug within the search bar and search results. See below_
- [ ] Use Redux for state management
- [ ] Handle HTTP codes in all requests
- [ ] Add 24 Hour time conversion
  - Add a switch to switch times between 12 and 24 hour formats
- [ ] Add dark theme
  - Add a switch to switch between dark and light themes
- [ ] Add compass for visualizing wind direction
  - Visual compass
  - Dynamic wind direction arrow
  - See [this example](http://snowfence.umn.edu/Components/winddirectionanddegrees.htm)
- [ ] Add Radar map
- [ ] Add National Weather alerts

## BUGS

- [ ] Unable to select location with multiple results.
  - **Notes**: Try "Saginaw", then refresh and try "Saginaw, Texas". Both result in only a list and no location being selected.
  - **FIXED**: Implemented clickable LI elements, allowing the Lat and Lon to be set by selecting a location from the list.
- [ ] When no location is selected, the WeatherDisplay component is loading and causing an error due to having no weatherData
  - **FIXED**: Conditional return statement in WeatherDisplay returns new JSX if no weather data exists.
- [ ] Remove search results list once weather data loads
  - When searching for a location which only a single result is returned, the list should not be displayed.
  - this could be resolved by applying one of the following:
    - Remove the list when weather data is loaded
    - Conditionally hide the list if the list is 1
