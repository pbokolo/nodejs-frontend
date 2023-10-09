import React from "react";

export default function StuffCard({ stuff }) {
  return (
    <div className="card card--stuff">
      <img
        src={stuff.imageUrl}
        alt={stuff.title}
        className="card--stuff__image"
      />
      <div className="card--stuf__details">
        <p className="text text--stuff-title">{stuff.title}</p>
        <p className="text text--stuff-price">{`${stuff.price}€`}</p>
      </div>
    </div>
  );
}
