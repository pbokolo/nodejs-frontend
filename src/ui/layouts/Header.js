import React from "react";
import AppLogo from "../components/AppLogo";
import NewStuffBtn from "../components/NewStuffBtn";

export default function header() {
  return (
    <header className="header">
      <AppLogo />
      <NewStuffBtn />
    </header>
  );
}
