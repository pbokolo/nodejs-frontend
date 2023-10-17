import { createSlice } from "@reduxjs/toolkit";

export const notifSlice = createSlice({
  name: "notif",
  initialState: { display: false, text: "" },
  reducers: {
    open: (state) => {
      state.display = true;
    },
    close: (state) => {
      state.display = false;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    clearText: (state) => {
      state.text = "";
    },
  },
});

export const { open, close, setText, clearText } = notifSlice.actions;
export default notifSlice.reducer;
