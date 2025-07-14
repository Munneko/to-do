import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

function loadTodosFromLocalStorage() {
  try {
    const serialized = localStorage.getItem("todos");
    if (!serialized) return undefined;
    return { todo: { todos: JSON.parse(serialized) } };
  } catch {
    return undefined;
  }
}

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState: loadTodosFromLocalStorage(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
