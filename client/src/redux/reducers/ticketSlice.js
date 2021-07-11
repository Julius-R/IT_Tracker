import { createSlice } from "@reduxjs/toolkit";

// Dummy data to reduce need to call the db for simple testing (Data exists in db btw!)
const initialState = [
  {
    id: "68e6d657-ca48-4fd4-80ae-e691a0157cec",
    category: "Unsure",
    description:
      "User states that they are having issues with their device. Call disconnected. CB 555-555-5555",
    priority: "Medium",
    datecreated: "1625982751571",
    resolved: "false",
    additionalcomments: " ",
  },
  {
    id: "df53e234-0d8a-47af-9263-24294df31259",
    category: "Software",
    description: "First ticket!",
    priority: "Low",
    datecreated: "1625894360215",
    resolved: "false",
    additionalcomments: " ",
  },
];

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
