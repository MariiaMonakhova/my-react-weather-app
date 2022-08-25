import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      feels: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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
          <div className="row">
            <div className="col-sm-7">
              <h1>Weather Forecast</h1>
            </div>
            <div className="col-sm-5">
              <form className="search-area" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search city"
                  id="text-city"
                  autoComplete="off"
                  onChange={handleChange}
                />
                <input type="submit" value="🔎" className="search-button" />
              </form>
            </div>
          </div>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coords={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
