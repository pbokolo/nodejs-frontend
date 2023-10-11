import React from "react";

export default function StuffDetails({ stuff }) {
  return (
    <div className="stuff__details">
      <img
        src={stuff.imageUrl}
        alt={stuff.title}
        className="card--stuff__image"
      />
      <div className="card--stuf__details">
        <p className="text text--stuff-price">{`${stuff.price}€`}</p>
        <p className="text text--stuff-price">{`${stuff.description}€`}</p>
      </div>
      <div className="stuff__details-actions">
        <button className="btn btn--text btn--danger">supprimer</button>
        <button className="btn btn--text">modifier</button>
      </div>
    </div>
  );
}
