import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { open } from "../../controller/stuffDialogSlice";

import { Controller } from "../../controller/stuffDialog";

export default function NewStuffBtn() {
  const dispatch = useDispatch();
  const dialogController = new Controller(dispatch);
  const clickHandler = () => dialogController.open();

  return (
    <button onClick={clickHandler} className="btn btn--primary">
      <AddIcon fontSize="large" />
    </button>
  );
}
