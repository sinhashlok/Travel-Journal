import React from "react";

export default function Card(props) {
  return (
    <div className="cardBlock">
      <div className="card">
        <img src={props.img} alt="country" />
        <div className="content">
          <p className="country">
            📍 {props.location}{" "}
            <a
              href={props.gMap}
              className="gMaps"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps
            </a>
          </p>
          <h1 className="location">{props.title}</h1>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
          <div className="description">{props.description}</div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
