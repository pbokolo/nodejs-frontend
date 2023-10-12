import { configureStore } from "@reduxjs/toolkit";
import stuffsReducer from "../controller/stuffSlice";
import stuffDialogReducer from "../controller/stuffDialogSlice";
import authReducer from "../controller/authSlice";

export default configureStore({
  reducer: {
    stuffs: stuffsReducer,
    stuffDialog: stuffDialogReducer,
    auth: authReducer,
  },
});
