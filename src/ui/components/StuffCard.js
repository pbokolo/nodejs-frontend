import React from "react";

export default function StuffCard() {
  return (
    <div className="card card--stuff">
      <img
        src="https://cdn.pixabay.com/photo/2019/11/09/14/28/camera-4613669_1280.jpg"
        alt="Stuff"
        className="card--stuff__image"
      />
      <div className="card--stuf__details">
        <p className="text text--stuff-title">Ma super camera</p>
        <p className="text text--stuff-price">300$</p>
      </div>
    </div>
  );
}
