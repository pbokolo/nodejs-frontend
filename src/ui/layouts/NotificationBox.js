import React from "react";
import { useSelector } from "react-redux";

export default function NotificationBox() {
  const { text } = useSelector((state) => state.notif);
  return (
    <div className="notification">
      <p className="text text--notification">{text}</p>
    </div>
  );
}
