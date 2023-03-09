import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { counterReducer } from "./counterSlice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authSlice },
});

export default store;
