import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import { Controller } from "../../controller/stuffDialog";
import { Controller as AuthController } from "../../controller/authDialog";

export default function NewStuffBtn() {
  // eslint-disable-next-line
  const [cookies, setCookies] = useCookies(["user"]);
  const dispatch = useDispatch();
  const dialogController = new Controller(dispatch);
  const authController = new AuthController(dispatch);
  const clickHandler = () => {
    if (!cookies.user) {
      authController.open();
      return;
    }
    dialogController.open();
  };

  return (
    <button onClick={clickHandler} className="btn btn--primary">
      <AddIcon fontSize="large" />
    </button>
  );
}
