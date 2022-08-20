import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    //city: `${city}`,
    date: "Tuesday 00:00",
    description: "Cloudy",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2983/2983922.png",
    feels: "12",
    humidity: "80",
    pressure: "1017",
    wind: "1",
  };
  const [city, setCity] = useState("");
  const [result, setResult] = useState("Seoul");

  function handleSubmit(event) {
    event.preventDefault();
    setResult(city);
  }

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

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
            onChange={changeCity}
          />
          <input type="submit" value="🔎" />
          <button className="location">Current location</button>
        </form>

        <h4 className="today">Last updated: {weatherData.date}</h4>
        <div className="row forecast">
          <div className="col-4">
            <h3>{result}</h3>
            <p className="description">{weatherData.description}</p>
          </div>
          <div className="col-4 main-temperature">
            <span className="temperature">14</span>
            <span className="unit"> °C </span>
            <img
              src={weatherData.imgUrl}
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
              <span>Wind speed: {weatherData.wind} km/h</span>
            </span>
          </div>
        </div>
        <h4 className="week">5 Day Forecast</h4>
      </div>
    </div>
  );
}
