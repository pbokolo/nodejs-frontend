import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StuffForm from "./StuffForm";
import CloseBtn from "../components/CloseBtn";
import { Controller } from "../../controller/stuffDialog";
import StuffDetails from "./StuffDetails";

export default function StuffDialog() {
  const dispatch = useDispatch();
  const controller = new Controller(dispatch);
  const { selectedStuff } = useSelector((state) => state.stuffs);
  const { type } = useSelector((state) => state.stuffDialog);

  const clickHandler = (e) => {
    if (
      e.target.id !== "overlay" &&
      e.target.id !== "closeBtn" &&
      e.target.id !== "closeIcon"
    ) {
      return;
    }
    controller.close();
  };
  return (
    <div onClick={clickHandler} id="overlay" className="dialog dialog__overlay">
      <div className="dialog__content">
        <div className="dialog__content-header">
          <h2 className="text text--title">
            {selectedStuff ? selectedStuff.title : "Vendez un nouvel objet"}
          </h2>
          <CloseBtn />
        </div>
        <div className="dialog__content-body">
          {type === "new" && <StuffForm />}
          {type === "update" && <StuffForm selectedStuff={selectedStuff} />}
          {type === "details" && <StuffDetails stuff={selectedStuff} />}
        </div>
      </div>
    </div>
  );
}
