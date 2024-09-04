import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    multiplay: (state) => {
      state.value *= 5;
    },
    division: (state) => {
      state.value /= 4;
    },
  },
});

export const { multiplay, division } = counterSlice.actions;

export default counterSlice.reducer;
