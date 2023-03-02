import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          <a
            href="https://github.com/MariDei/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            {" "}
            Open-source code on GitHub,
          </a>{" "}
            by <strong>Marianna Dei</strong>
        </footer>
      </div>
    </div>
  );
}

