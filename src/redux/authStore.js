import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
