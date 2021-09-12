import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import MapComponent from "./MapComponent";
import loadingImage from "../media/bike-animated.gif";

export default function Toilets() {
  const { isLoading, error, data } = useQuery("toiletData", () =>
    fetch(
      "https://wfs-kbhkort.kk.dk/k101/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=k101:toilet_tmf_kk&outputFormat=json&SRSNAME=EPSG:4326"
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
      <div className="toilet-card">
        <MapComponent data={data.features} />
        <p>
          Inneholder data, som er stillet til rådighet af en af
          medlemsorganisationene i Open Data DK
        </p>
      </div>
      <Link to="/" className="right-arrow arrow noselect"></Link>
      <Link to="/" className="right-link">
        Home
      </Link>
    </>
  );
}

// <div className="map-container">
// <div className="billboard">
//   <MapComponent data={data.features} />
// </div>
// <p>
//   Inneholder data, som er stillet til rådighet af en af
//   medlemsorganisationene i Open Data DK
// </p>
// <Link to="/" className="right-arrow arrow noselect"></Link>
// <Link to="/" className="right-link">
//   Home
// </Link>
// </div>
