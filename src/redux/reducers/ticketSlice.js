import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
