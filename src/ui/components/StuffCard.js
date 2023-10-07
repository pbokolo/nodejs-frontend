import React from "react";
import cam from "../../assets/cam.jpeg";

export default function StuffCard() {
  return (
    <div className="card card--stuff">
      <img
        src="https://cdn.pixabay.com/photo/2019/11/09/14/28/camera-4613669_1280.jpg"
        alt="Stuff"
      />
      <p>Ma super camera</p>
      <p>300$</p>
    </div>
  );
}
