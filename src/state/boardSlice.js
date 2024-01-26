import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: "",
    boardId: "",
    boardImageURL: "",
  },
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    updateBoard: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateBoard } = boardSlice.actions;

export default boardSlice.reducer;
