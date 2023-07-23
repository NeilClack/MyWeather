# Application Description
Allow a user to enter a location, then pull today's current weather information and display it in a user friendly way.

## Tasks
- [ ] Users need to be able to search the OpenWeather location database
- [ ] Users need to be able to select a location
- [ ] Upon selecting a location, the weather needs to be fetched from OpenWeather
- [ ] Weather data needs to be filtered to information the user cares about
- [ ] Remaining weather data needs to be displayed on the page

## Notes
- Use standard React state for now
- Add redux AFTER the app is built
- Build small pieces at a time
- Make new branches for each part of the app
- Only merge a functioning app *feature* back to Main
- Commit working pieces of code, not in between pieces
- Be thoughtful about git commit messages
	- What and Why
	- "If applied, this commit will" ... <= Finish this sentence
	- 


### Extra Features
- [x] Search results should be clickable to select a location
	- *This was completed due to a bug within the search bar and search results. See below*
- [ ] Use Redux for state management
- [ ] Handle HTTP codes in all requests
- [ ] Add 24 Hour time conversion
	- [ ] Add switch for 12 or 24 hour time
- [ ] Add dark theme
	- [ ] Dark Theme button
	- [ ] 

## BUGS
- Unable to select location with multiple results. 
	- **Notes**: Try "Saginaw", then refresh and try "Saginaw, Texas". Both result in only a list and no location being selected.
	- **FIXED**: Implemented clickable LI elements, allowing the Lat and Lon to be set by selecting a location from the list.
- When no location is selected, the WeatherDisplay component is loading and causing an error due to having no weatherData
	- **FIXED**: Conditional return statement in WeatherDisplay returns new JSX if no weather data exists.
