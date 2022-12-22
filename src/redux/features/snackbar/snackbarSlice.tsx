import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../../app/store";

export interface SnackbarMessage {
  message: string;
}

type Severity = "success" | "error" | "info" | "warning";

interface Snackbar {
  anchorOrigin: {
    horizontal: "left" | "right" | "center";
    vertical: "bottom" | "top";
  };
  autoHideDuration?: number | null;
  message?: string;
  open: boolean;
  severity: Severity;
  snackPack: readonly SnackbarMessage[];
  undo?: boolean;
}

export const initialState: Snackbar = {
  anchorOrigin: {
    horizontal: "left",
    vertical: "bottom",
  },
  autoHideDuration: 3000,
  message: "",
  open: false,
  severity: "success",
  snackPack: [],
};

// Snackbar reducer
export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar: (
      state,
      {
        payload,
      }: {
        payload: {
          autoHideDuration?: number | null;
          severity: Severity;
          message: string;
          undo?: boolean;
        };
      }
    ) => {
      const { autoHideDuration, severity, message, undo } = payload;
      state.autoHideDuration = autoHideDuration;
      state.severity = severity;
      state.snackPack = [{ message }];
      state.undo = undo;
    },
    closeSnackbar: (state) => {
      state.open = false;
    },
    setSnackPack: (state) => {
      state.message = state.snackPack[0].message;
      state.snackPack = state.snackPack.slice(1);
      state.open = true;
    },
    exited: (state) => {
      state.message = undefined;
      state.undo = undefined;
    },
  },
});

export const { openSnackbar, closeSnackbar, setSnackPack, exited } =
  snackbarSlice.actions;

export const selectData = (state: AppState) => state.snackbar;

export default snackbarSlice;
