import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          Coded by{" "}
          <a
            href="https://www.instagram.com/deimari/"
            target="_blank"
            rel="noopener noreferrer"
          > Marianna Dei{" "}
          </a> and {" "}
          <a
            href="https://github.com/MariDei/react-weather-app"
            target="_blank"
          > open-source code on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

