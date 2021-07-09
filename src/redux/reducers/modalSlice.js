import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
