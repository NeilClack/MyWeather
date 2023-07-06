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

export const weatherQuery = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OW_API_KEY}`
    )
    const data = await res.json();
    console.log("from query");
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};