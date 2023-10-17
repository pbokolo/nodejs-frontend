import { createSlice } from "@reduxjs/toolkit";

export const notifSlice = createSlice({
  name: "notif",
  initialState: { show: false, text: "" },
  reducers: {
    open: (state) => {
      state.show = true;
    },
    close: (state) => {
      state.show = false;
    },
  },
});

export const { open, close } = notifSlice.actions;
export default notifSlice.reducer;
