import React from "react";
import { useDispatch } from "react-redux";
import { close } from "../../controller/stuffDialogSlice";
import NewStuffForm from "./NewStuffForm";
import CloseBtn from "../components/CloseBtn";
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
        <div className="dialog__content-header">
          <h2 className="text text--title">Vendez un nouvel objet</h2>
          <CloseBtn />
        </div>
        <div className="dialog__content-body">
          <NewStuffForm />
        </div>
      </div>
    </div>
  );
}
