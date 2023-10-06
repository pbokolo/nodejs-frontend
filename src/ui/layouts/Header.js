import React from "react";
import AppLogo from "../components/AppLogo";
import UserProfilePicture from "../components/UserProfilePicture";

export default function header() {
  return (
    <header className="header">
      <AppLogo />
      <UserProfilePicture />
    </header>
  );
}
