import React from "react";

export default function StuffDialog() {
  return (
    <div className="dialog dialog__overlay">
      <div className="dialog__content">
        <h2 className="text text--title">Vendez un nouvel objet</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <label htmlFor="titleTxt">Nom de l'objet</label>
            <input
              type="text"
              id="titleTxt"
              placeholder="Ex. Macbook pro 2015"
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
}
