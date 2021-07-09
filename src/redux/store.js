import { configureStore } from "@reduxjs/toolkit";

import ticketSlice from "./reducers/ticketSlice";

export const store = configureStore({
  reducer: {
    tickets: ticketSlice,
  },
});
