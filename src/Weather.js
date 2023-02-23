import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";
  
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/064/853/original/cloudy.png?1674933258",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn"
                autoFocus="on"
              />
            </div>
          </div>
        </form>
        <div className="current-place">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                width="75"
                height="75"
              />
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="unit">℃</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <strong>{weatherData.humidity}</strong> %
              </li>
              <li>
                Wind: <strong>{Math.round(weatherData.wind)}</strong> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const ApiKey = "e5472a0ed17ff5f3e2802e3b1bb3fa27";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${ApiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}