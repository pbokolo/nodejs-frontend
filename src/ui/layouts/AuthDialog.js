import React from "react";
import { useDispatch } from "react-redux";
import { Controller } from "../../controller/authDialog";
import CloseBtn from "../components/CloseBtn";
import AuthForm from "./AuthForm";

export default function AuthDialog() {
  const dispatch = useDispatch();
  const controller = new Controller(dispatch);

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
          <h2 className="text text--title">Bienvenu!</h2>
          <CloseBtn />
        </div>
        <div className="dialog__content-body">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
