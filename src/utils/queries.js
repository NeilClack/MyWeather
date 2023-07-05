export async function geoQuery(enteredLocation) {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${enteredLocation}&limit=5&appid=${process.env.REACT_APP_OW_API_KEY}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
}