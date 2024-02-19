import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./boardSlice";
import timeReducer from "./timerSlice";
import gameReducer from "./gameSlice";

const store = configureStore({
  reducer: {
    board: boardReducer,
    time: timeReducer,
    game: gameReducer,
  },
});

export default store;
