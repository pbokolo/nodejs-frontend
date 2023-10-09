import { createSlice } from "@reduxjs/toolkit";

export const stuffsSlice = createSlice({
  name: "stuffs",
  initialState: { list: null },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setList } = stuffsSlice.actions;
export default stuffsSlice.reducer;
