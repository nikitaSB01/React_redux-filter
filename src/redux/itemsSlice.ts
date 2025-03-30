import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types";

const initialState: Item[] = [];

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      state.push(action.payload);
    },
    updateItem(state, action: PayloadAction<Item>) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteItem(state, action: PayloadAction<string>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;
