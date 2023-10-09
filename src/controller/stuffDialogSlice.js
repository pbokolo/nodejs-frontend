import { createSlice } from "@reduxjs/toolkit";

const stuffDialogSlice = createSlice({
  name: "stuffDialog",
  initialState: { show: false, type: "new" },
  reducers: {
    open: (state) => {
      state.show = true;
    },
    close: (state) => {
      state.show = false;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { open, close } = stuffDialogSlice.actions;
export default stuffDialogSlice.reducer;
