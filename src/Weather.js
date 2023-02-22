import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h1>Kyiv</h1>
          <ul>
            <li>Tuesday 22:45</li>
            <li>Cloudy</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/064/853/original/cloudy.png?1674933258"
                alt="cloudy"
                width="75"
                height="75"
              />
              <span className="temperature">6</span>
              <span className="unit">℃</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <strong>72</strong> %
              </li>
              <li>
                Wind: <strong>8 </strong> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}