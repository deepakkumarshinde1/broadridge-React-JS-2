import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 100,
    auth: null,
    list: [],
    details: {
      address: null,
    },
  },
  reducers: {
    increment(state, action) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});
export default CounterSlice;
export const { increment, decrement } = CounterSlice.actions;
