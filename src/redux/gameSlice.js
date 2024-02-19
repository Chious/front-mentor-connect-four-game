import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: {
    player1: 0,
    player2: 0,
  },
  stage: "pause",
  player: 1,
  winner: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    start: (state) => {
      state.stage = "start";
    },
    pause: (state) => {
      state.stage = "pause";
    },
    switchPlayer: (state) => {
      state.player = state.player === 1 ? 2 : 1;
    },
    win: (state, action) => {
      state.stage = "end";
      //Update score
      const winner = action.payload;

      if (winner === 1) {
        state.winner = winner;
        state.score.player1 += 1;
      } else if (winner === 2) {
        state.winner = winner;
        state.score.player2 += 1;
      }
    },
    reset: (state) => {
      state.score = {
        player1: 0,
        player2: 0,
      };

      state.stage = "pause";
      state.player = 1;
      state.winner = null;
    },
  },
});

export default gameSlice.reducer;
export const { start, pause, win, reset, switchPlayer } = gameSlice.actions;
