import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "./boardsSlice.js";

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
  },
});

