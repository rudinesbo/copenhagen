import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function Weather() {
  const { isLoading, error, data } = useQuery("weatherData", () =>
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=eb86fa637f4c4666ab570733210809&q=copenhagen"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "Error" + error.data;

  return (
    <>
      <div className="weather-card">
        <div className="weather-card-row">
          {data.current.condition.text}
          <img src={data.current.condition.icon} />
        </div>
        <div className="weather-card-row">{data.current.temp_c}</div>
        <div className="weather-card-row"></div>
      </div>
      <Link to="/" className="left-arrow arrow noselect"></Link>
      <Link to="/" className="toilets-link">
        Toilets
      </Link>
    </>
  );
}
