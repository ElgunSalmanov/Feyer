import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice.js";

const store = configureStore({
  reducer: {
    name: slice,
  },
});

export default store;
