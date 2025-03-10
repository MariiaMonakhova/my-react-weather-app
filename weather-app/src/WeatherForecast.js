import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "0727199221e468420f29d7fe1ea9bf71";
    let units = "metric";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;

    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleForecast);
  }

  if (loaded) {
    return (
      <div className="daily-forecast">
        <h4 className="week">5 Day Forecast</h4>
        <div className="row box">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-sm-2 day" key={index}>
                  <WeatherForecastDay day={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
