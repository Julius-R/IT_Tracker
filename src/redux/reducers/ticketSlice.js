import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      state.push(action.payload);
    },
    removeTicket: (state, action) => {
      // placeholder
    },
    editTicket: (state, action) => {
      // placeholder
    },
  },
});

export const { addTicket, removeTicket, editTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
