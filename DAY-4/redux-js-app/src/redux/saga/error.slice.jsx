import { createSlice } from "@reduxjs/toolkit";

const ErrorSlice = createSlice({
  name: "ErrorSlice",
  initialState: {
    errorMessage: null,
  },
  reducers: {
    setError(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export default ErrorSlice;
export const { setError } = ErrorSlice.actions;
