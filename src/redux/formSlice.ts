import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types";

interface FormState {
  currentItem: Item | null;
}

const initialState: FormState = {
  currentItem: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    startEdit(state, action: PayloadAction<Item>) {
      state.currentItem = action.payload;
    },
    cancelEdit(state) {
      state.currentItem = null;
    },
  },
});

export const { startEdit, cancelEdit } = formSlice.actions;
export default formSlice.reducer;
