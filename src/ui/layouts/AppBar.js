import React from "react";
import AppLogo from "../components/AppLogo";
import UserProfilePicture from "../components/UserProfilePicture";

export default function AppBar() {
  return (
    <div className="appbar">
      <AppLogo />
      <UserProfilePicture />
    </div>
  );
}
