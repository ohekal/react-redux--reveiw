import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { visible: false },
  reducers: {
    logIn: (state, action) => {
      state.visible = true;
    },
    logOut: (state, action) => {
      state.visible = false;
    },
  },
});

export default authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;
