import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <div className="current-place">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                width="75"
                height="75"
              />
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">℃</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <strong>{props.data.humidity}</strong> %
              </li>
              <li>
                Wind: <strong>{Math.round(props.data.wind)}</strong> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}