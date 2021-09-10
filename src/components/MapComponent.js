import React, { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";

const weekdays = [
  "soendag",
  "mandag",
  "tirsdag",
  "onsdag",
  "torsdag",
  "fredag",
  "loerdag",
];

export default function MapComponent({ data }) {
  const [center, setCenter] = useState([55.682, 12.58]);
  const [zoom, setZoom] = useState(12.5);
  const [infoText, setInfoText] = useState({});
  const [today] = useState(weekdays[new Date().getDay()]);

  const onMarkerClick = ({ anchor, payload }) => {
    setCenter(anchor);
    setZoom(15);
    setInfoText(payload);
    console.log(payload);
  };

  return (
    <div className="map-container">
      <Map
        height={300}
        width={"50vw"}
        center={center}
        zoom={zoom}
        zoomSnap={false}
      >
        {data.map(({ geometry, properties, id }) => (
          <Marker
            key={id}
            anchor={[geometry.coordinates[0][1], geometry.coordinates[0][0]]}
            color={"#f9bac5"}
            payload={properties}
            onClick={(payload) => onMarkerClick(payload)}
          />
        ))}
        <ZoomControl />
      </Map>
      <div>
        Adresse: {infoText.adresse} <br />
        Handicap adgang: {infoText.handicapadgang}
        <br />
        Åbningstid i dag: {infoText[today]}
      </div>
    </div>
  );
}
