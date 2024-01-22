import {  createSlice } from "@reduxjs/toolkit";



const initialState= {
  value: [],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    updateBoards: (state, action) => {
      state.value = action.payload;
    },
  },

});



export const { updateBoards } = boardsSlice.actions;

export default boardsSlice.reducer;