import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleForecast(response) {
    console.log(response.data);
  }

  let apiKey = "0727199221e468420f29d7fe1ea9bf71";
  let units = "metric";
  let longitude = props.coords.lon;
  let latitude = props.coords.lat;

  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleForecast);

  return (
    <div className="daily-forecast">
      <h4 className="week">5 Day Forecast</h4>
      <div className="row box">
        <div className="col-sm-2 day">
          <div className="forecast-day">Thursday</div>
          <div className="forecast-image">
            <WeatherIcon code="01d" size={50} />
          </div>
          <div className="temperatura">
            <span className="max-temp">19</span>
            <span className="min-temp">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
