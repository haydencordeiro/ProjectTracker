import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "./boardsSlice.js";
import tasksReducer from "./tasksSlice.js";

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    tasks: tasksReducer,
  },
});

