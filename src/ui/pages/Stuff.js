import React from "react";
import { useLocation } from "react-router-dom";

export default function Stuff() {
  const location = useLocation();

  return <div>Page for the stuff {location.state.stuff.id}</div>;
}
