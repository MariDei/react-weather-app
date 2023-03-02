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
          Coded by <strong>Marianna Dei</strong>,{" "}
          <a
            href="https://github.com/MariDei/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            {" "}
            open-sourced code on GitHub,
          </a>{" "}
          and{" "}
          <a
            href="https://shecodes-react-weatherapp.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="netlify-link"
          >
            hosted on Netlify{" "}
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

