import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, expireDate: null, authDialog: false },
  reducers: {
    openAuthDialog: (state) => {
      state.authDialog = true;
    },
    closeAuthDialog: (state) => {
      state.authDialog = false;
    },
  },
});

export const { openAuthDialog, closeAuthDialog } = authSlice.actions;
export default authSlice.reducer;
