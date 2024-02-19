import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 5,
};

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    initialTime: (state) => {
      state.time = 5;
    },
    counting: (state) => {
      state.time -= 1;
    },
  },
});

export default timeSlice.reducer;
export const { initialTime, counting } = timeSlice.actions;
