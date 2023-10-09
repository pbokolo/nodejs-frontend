import React from "react";
import { useDispatch } from "react-redux";
import { close } from "../../controller/stuffDialogSlice";
import NewStuffForm from "./NewStuffForm";
import { Controller } from "../../controller/stuffDialog";

export default function StuffDialog() {
  const dispatch = useDispatch();
  const controller = new Controller(dispatch);
  const clickHandler = (e) => {
    if (e.target.id !== "overlay") {
      return;
    }
    controller.close();
  };
  return (
    <div onClick={clickHandler} id="overlay" className="dialog dialog__overlay">
      <div className="dialog__content">
        <h2 className="text text--title">Vendez un nouvel objet</h2>
        <NewStuffForm />
      </div>
    </div>
  );
}
