import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
