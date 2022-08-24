import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.day.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-image">
        <WeatherIcon code={props.day.weather[0].icon} size={50} />
      </div>
      <div className="temperatura">
        <span className="max-temp">{Math.round(props.day.temp.max)}°</span>
        <span className="min-temp">{Math.round(props.day.temp.min)}°</span>
      </div>
    </div>
  );
}
