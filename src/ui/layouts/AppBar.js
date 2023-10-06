import React from "react";
import AppLogo from "../components/AppLogo";
import UserProfile from "../components/UserProfile";

export default function AppBar() {
  return (
    <div className="appbar">
      <AppLogo />
      <UserProfile />
    </div>
  );
}
