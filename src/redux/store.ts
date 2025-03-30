import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
import formReducer from "./formSlice";
import filterReducer from "./filterSlice"; // ✅ новый импорт

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    form: formReducer,
    filter: filterReducer, // ✅ добавляем редьюсер фильтра
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
