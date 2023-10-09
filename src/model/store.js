import { configureStore } from "@reduxjs/toolkit";
import stuffsReducer from "../controller/stuffSlice";
import stuffDialogReducer from "../controller/stuffDialogSlice";

export default configureStore({
  reducer: { stuffs: stuffsReducer, stuffDialog: stuffDialogReducer },
});
