import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function CloseBtn() {
  return (
    <button id="closeBtn" className="btn btn--close">
      <CloseIcon id="closeIcon" fontSize="large" />
    </button>
  );
}
