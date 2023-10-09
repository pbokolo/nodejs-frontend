import { configureStore } from "@reduxjs/toolkit";
import stuffsReducer from "../controller/stuffSlice";

export default configureStore({ reducer: { stuffs: stuffsReducer } });
