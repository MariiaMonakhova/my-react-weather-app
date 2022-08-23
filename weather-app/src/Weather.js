import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      feels: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: "https://cdn-icons-png.flaticon.com/512/2983/2983922.png",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let units = "metric";
    let apiKey = "0727199221e468420f29d7fe1ea9bf71";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="main-background">
          <h1>Weather Forecast</h1>
          <form className="search-area" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search city"
              id="text-city"
              autoComplete="off"
              onChange={handleChange}
            />
            <input type="submit" value="🔎" className="search-button" />
            <button className="location">Current location</button>
          </form>
          <WeatherInfo data={weatherData} />
          <h4 className="week">5 Day Forecast</h4>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
