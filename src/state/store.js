import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "./boardsSlice.js";
import boardReducer from "./boardSlice.js";
import tasksReducer from "./tasksSlice.js";

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    board: boardReducer,
    tasks: tasksReducer,
  },
});

