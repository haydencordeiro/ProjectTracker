import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    updateBoards: (state, action) => {
      state.value = action.payload;
    },
    addBoard: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { updateBoards, addBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
