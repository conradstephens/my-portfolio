import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "../features/authentication/authSlice";
import { counterSlice } from "../features/counter/counterSlice";
import { snackbarSlice } from "../features/snackbar/snackbarSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [counterSlice.name]: counterSlice.reducer,
      [snackbarSlice.name]: snackbarSlice.reducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
