import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
   
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function fahrenheit() {
        return Math.round((props.celsius * 9) / 5 + 32);
    }
    
    if(unit === "celsius") {
        return (
          <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit-active">
              {" "} ℃ |{" "}
              <a href="/" className="unit" onClick={showFahrenheit}>
                ℉
              </a>
            </span>
          </div>
        );
    } else {
        return (
          <div className="WeatherTemperature">
            <span className="temperature">{fahrenheit()}</span>
            <span className="unit-active">
              <a href="/" className="unit" onClick={showCelsius}>
                {" "} ℃ {" "}
              </a> | ℉
            </span>
          </div>
        );
    }    
}