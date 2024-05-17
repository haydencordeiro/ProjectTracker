import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    updateTasks: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
