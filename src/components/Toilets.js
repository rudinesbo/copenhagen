import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import MapComponent from "./MapComponent";

export default function Toilets() {
  const { isLoading, error, data } = useQuery("toiletData", () =>
    fetch(
      "https://wfs-kbhkort.kk.dk/k101/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=k101:toilet_tmf_kk&outputFormat=json&SRSNAME=EPSG:4326"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "Error" + error.data;

  return (
    <div className="map-container">
      <div className="billboard">
        <MapComponent data={data.features} />
      </div>
      <p>
        Inneholder data, som er stillet til rådighet af en af
        medlemsorganisationene i Open Data DK
      </p>
      <Link to="/" className="right-arrow arrow noselect"></Link>
      <Link to="/" className="weather-link">
        Home
      </Link>
    </div>
  );
}
