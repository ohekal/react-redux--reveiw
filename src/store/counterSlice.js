import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "./authSlice";

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logOut, (state, action) => {
      state.value = 51;
    });
  },
});

export const counterReducer = counterSlice.reducer;
export const { increase, decrease, toggleShow } = counterSlice.actions;
