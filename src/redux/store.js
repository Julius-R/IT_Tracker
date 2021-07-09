import { configureStore } from "@reduxjs/toolkit";

import ticketSlice from "./reducers/ticketSlice";
import modalSlice from "./reducers/modalSlice";

export const store = configureStore({
  reducer: {
    tickets: ticketSlice,
    modalActive: modalSlice,
  },
});
