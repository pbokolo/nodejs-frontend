import React from "react";
import NewStuffForm from "./NewStuffForm";

export default function StuffDialog() {
  return (
    <div className="dialog dialog__overlay">
      <div className="dialog__content">
        <h2 className="text text--title">Vendez un nouvel objet</h2>
        <NewStuffForm />
      </div>
    </div>
  );
}
