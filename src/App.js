import React from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import data from "./data";

export default function App() {
  return (
    <div>
      <Navbar />
      {data.map((d) => {
        return (
          <Card
            title={d.title}
            location={d.location}
            gMap={d.googleMapsUrl}
            startDate={d.startDate}
            endDate={d.endDate}
            description={d.description}
            img={d.imageUrl}
          />
        );
      })}
    </div>
  );
}
