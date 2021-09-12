import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import loadingImage from "../media/bike-animated.gif";

const today = new Date().getDay();
const dayMapping = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

export default function Weather() {
  const { isLoading, error, data } = useQuery("weatherData", () =>
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=eb86fa637f4c4666ab570733210809&q=copenhagen&days=5&aqi=no&alerts=no&hour=0"
    ).then((res) => res.json())
  );

  if (isLoading)
    return (
      <div>
        <img src={loadingImage} alt="Loading your data :)" />
      </div>
    );

  if (error) return "Error" + error.data;

  return (
    <>
      <div className="weather-card">
        <div className="weather-card-row">
          <div className="current-weather">
            <h3>Today</h3>
            <img
              src="https://cdn.weatherapi.com/weather/128x128/day/116.png"
              alt={data.current.condition.text}
            />
            <p>{data.current.condition.text}</p>
            <p>{data.current.temp_c} °C</p>
          </div>
          <div className="wind-data">
            <h4>Wind:</h4>
            <br />
            <span>
              Velocity: {(data.current.wind_kph * 0.27778).toFixed(2)} m/s
            </span>
            <span>Direction: {data.current.wind_dir}</span>
            <span>
              Direction: {(data.current.gust_kph * 0.27778).toFixed(2)} m/s
            </span>
          </div>
        </div>
        <div className="weather-card-row">
          {data.forecast.forecastday.slice(1).map(({ day }, index) => (
            <div className="forecast-day">
              <span>{dayMapping[(today + index + 1) % 7]}</span>

              <img src={day.condition.icon} alt={day.condition.text} />

              <span>{day.avgtemp_c} °C</span>
            </div>
          ))}
        </div>
      </div>
      <Link to="/" className="left-arrow arrow noselect"></Link>
      <Link to="/" className="left-link">
        Toilets
      </Link>
    </>
  );
}
