import React from "react";
import AppLogo from "../components/AppLogo";
import NewStuffBtn from "../components/NewStuffBtn";
import UserProfilePicture from "../components/UserProfilePicture";

export default function header() {
  return (
    <header className="header">
      <AppLogo />
      <NewStuffBtn />
      <UserProfilePicture />
    </header>
  );
}
