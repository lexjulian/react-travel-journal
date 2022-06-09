import React from "react";

export default function Card(props) {
  return (
    <section className="App-card__container">
      <div className="App-card">
        <div className="card-img__box">
          <img src={props.items.imageUrl} alt="card-pic" className="card-img" />
        </div>
        <div className="card-details">
          <div className="card-location">
            <img
              src="../images/loc.jpg"
              alt="location"
              className="card-location__icon"
            />
            <p className="card-location__name">{props.items.location}</p>{" "}
            <a href={props.items.googleMapsUrl} className="card-glink">
              View on Google Maps
            </a>
          </div>

          <h1>{props.items.title}</h1>
          <h4 className="card-dates">
            {props.items.startDate} - {props.items.endDate}
          </h4>
          <p className="card-description">{props.items.description}</p>
        </div>
      </div>
      <hr className="card-border" />
    </section>
  );
}
