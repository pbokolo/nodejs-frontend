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
  },
});

export const { open, close } = notifSlice.actions;
export default notifSlice.reducer;
