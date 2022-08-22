import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Tuesday 00:00",
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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="main-background">
          <h1>Weather Forecast</h1>
          <form className="search-area">
            <input
              type="text"
              placeholder="Search city"
              id="text-city"
              autoComplete="off"
            />
            <input type="submit" value="🔎" className="search-button" />
            <button className="location">Current location</button>
          </form>

          <h4 className="today">Last updated: {weatherData.date}</h4>
          <div className="row forecast">
            <div className="col-4">
              <h3>{props.defaultCity}</h3>
              <p className="description">{weatherData.description}</p>
            </div>
            <div className="col-4 main-temperature">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit"> °C </span>
              <img
                src={weatherData.icon}
                className="main-image"
                alt={weatherData.description}
              />
            </div>
            <div className="col-4">
              <span className="info">
                <span>Feels like: {weatherData.feels}</span>
                <br />
                <span>Humidity: {weatherData.humidity}%</span>
                <br />
                <span>Pressure: {weatherData.pressure}</span>
                <br />
                <span>Wind speed: {Math.round(weatherData.wind)} km/h</span>
              </span>
            </div>
          </div>
          <h4 className="week">5 Day Forecast</h4>
        </div>
      </div>
    );
  } else {
    let units = "metric";
    let apiKey = "0727199221e468420f29d7fe1ea9bf71";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
