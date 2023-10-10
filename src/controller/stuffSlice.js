import { createSlice } from "@reduxjs/toolkit";

export const stuffsSlice = createSlice({
  name: "stuffs",
  initialState: { list: null, selectedStuff: null },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setSelectedStuff: (state, action) => {
      state.selectedStuff = action.payload;
    },
  },
});

export const { setList, setSelectedStuff } = stuffsSlice.actions;
export default stuffsSlice.reducer;
