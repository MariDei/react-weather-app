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
          Coded by{" "}
          <a
            href="https://www.instagram.com/deimari/"
            target="_blank"
            rel="noopener noreferrer"
            className="coder-link"
          >
            {" "}
            Marianna Dei
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/MariDei/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            {" "}
            open-source code on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

