import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: {
    0: [0, 0, 0, 0, 0, 0],
    1: [0, 0, 0, 0, 0, 0],
    2: [0, 0, 0, 0, 0, 0],
    3: [0, 0, 0, 0, 0, 0],
    4: [0, 0, 0, 0, 0, 0],
    5: [0, 0, 0, 0, 0, 0],
    6: [0, 0, 0, 0, 0, 0],
  },
  player: 1,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    clearGameBoard: (state) => {
      state.board = {
        0: [0, 0, 0, 0, 0, 0],
        1: [0, 0, 0, 0, 0, 0],
        2: [0, 0, 0, 0, 0, 0],
        3: [0, 0, 0, 0, 0, 0],
        4: [0, 0, 0, 0, 0, 0],
        5: [0, 0, 0, 0, 0, 0],
        6: [0, 0, 0, 0, 0, 0],
      };
    },

    updateBoard: (state, action) => {
      const gameBoard = state.board;
      const row = action.payload.row;
      const player = action.payload.player;

      let currentRow = gameBoard[row];
      let valueToReplace = 0;
      let replacementValue = player;

      // Find the index of the latest occurrence of valueToReplace
      let lastIndex = -1;
      for (let i = currentRow.length - 1; i >= 0; i--) {
        if (currentRow[i] === valueToReplace) {
          lastIndex = i;
          break;
        }
      }

      // Check if the valueToReplace exists in the array
      if (lastIndex !== -1) {
        // Replace the latest occurrence with replacementValue
        currentRow[lastIndex] = replacementValue;
      }

      state.gameBoard = { ...gameBoard, [row]: currentRow };
    },
  },
});

export default boardSlice.reducer;
export const { clearGameBoard, updateBoard } = boardSlice.actions;
