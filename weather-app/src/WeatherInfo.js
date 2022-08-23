import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h4 className="today">
        Last updated: <FormattedDate date={props.data.date} />{" "}
      </h4>
      <div className="row forecast">
        <div className="col-4">
          <h3>{props.data.city}</h3>
          <p className="description">{props.data.description}</p>
        </div>
        <div className="col-4 main-temperature">
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit"> °C </span>
          <img
            src={props.data.icon}
            className="main-image"
            alt={props.data.description}
          />
        </div>
        <div className="col-4">
          <span className="info">
            <span>Feels like: {props.data.feels}</span>
            <br />
            <span>Humidity: {props.data.humidity}%</span>
            <br />
            <span>Pressure: {props.data.pressure}</span>
            <br />
            <span>Wind speed: {Math.round(props.data.wind)} km/h</span>
          </span>
        </div>
      </div>
    </div>
  );
}
