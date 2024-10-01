import React, { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleCityChange = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  const handleFetchWeather = async (event) => {
    event.preventDefault();
    const url = `http://localhost:3001/weather?city=${city}`;
    console.log(url);

    try {
      const response = await axios.get(url);
      console.log(response);

      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="position-absolute bottom-50 end-50">
      {/* <h1>Weather App</h1>
      <form onSubmit={handleFetchWeather}>
        <input type="text" value={city} onChange={handleCityChange} placeholder="Enter city name" />
        <button type="Submit" >Fetch Weather</button>
      </form>
      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Feels like: {weather.main.feels_like}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed}Kmph</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )} */}
      <div class="card">
        <div class="card-header">
          <h1>Weather App</h1>
          <form onSubmit={handleFetchWeather}>
            <input
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter city name"
            />
            <button type="Submit">Fetch Weather</button>
          </form>
        </div>
        <div class="card-body">
          {weather && (
            <div>
              <h2>Weather in {weather.name}</h2>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Feels like: {weather.main.feels_like}°C</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind Speed: {weather.wind.speed}Kmph</p>
              <p>Weather: {weather.weather[0].description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div class="card">
  <div class="card-header">
    <h1>Weather App</h1>
    <form onSubmit={handleFetchWeather}>
        <input type="text" value={city} onChange={handleCityChange} placeholder="Enter city name" />
        <button type="Submit" >Fetch Weather</button>
      </form>
  </div>
  <div class="card-body">
    {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Feels like: {weather.main.feels_like}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed}Kmph</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
  </div>
</div> */
}
