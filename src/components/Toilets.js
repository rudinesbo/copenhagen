import React from "react";
import { useQuery } from "react-query";

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
    <div>
      <MapComponent data={data.features} />
    </div>
  );
}
