import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1 className="header">COPENHAGEN</h1>
      <Link to="/toilets" className="left-arrow arrow noselect"></Link>
      <Link to="/toilets" className="left-link">
        Toilets
      </Link>
      <Link to="/weather" className="right-link">
        Weather
      </Link>
      <Link to="/weather" className="right-arrow arrow noselect"></Link>
    </div>
  );
}
