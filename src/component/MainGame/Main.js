import boardWhite from "../../assets/images/board-layer-white-large.svg";
import boardBlack from "../../assets/images/board-layer-black-large.svg";
import GameRecordIcon from "./GameRecordIcon";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { win, pause, switchPlayer } from "../../redux/gameSlice";
import { updateBoard } from "../../redux/boardSlice";

export default function Main() {
  const dispatch = useDispatch();
  //game board
  const gameBoard = useSelector((state) => state.board.board);
  const onholdGameClick = function (player, row) {
    dispatch(updateBoard({ row: row, player: player }));
  };

  //game info
  const gameState = useSelector((state) => state.game);

  const [GameRecordIcons, setGameRecordIcons] = useState([]);

  const renderGameRecord = function (
    gameBoard,
    winnerResult,
    setGameRecordIcons
  ) {
    // Initialize an array to store the components
    const icons = [];
    let coordinates = winnerResult && winnerResult.coordinates;

    // Iterate over the rows
    for (let row in gameBoard) {
      let columns = gameBoard[row];

      // Iterate over the columns
      for (let column = 0; column < columns.length; column++) {
        const value = columns[column];

        // Check if the value is not 0
        if (value !== 0 && !coordinates) {
          icons.push(
            <GameRecordIcon
              key={`${column}-${row}`}
              player={value}
              row={Number(column) + 1}
              column={Number(row) + 1}
            />
          );
        }

        // Return target if someone win game
        if (value !== 0 && coordinates) {
          let target = [row, column];
          let isPresent = coordinates.some(
            (coord) => coord[0] === target[0] && coord[1] === target[1]
          );

          icons.push(
            <GameRecordIcon
              key={`${column}-${row}`}
              player={value}
              row={Number(column) + 1}
              column={Number(row) + 1}
              winner={isPresent}
            />
          );
        }
      }
    }

    setGameRecordIcons(icons);
  };

  const checkWinner = function (board) {
    // Check vertically
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 3; col++) {
        const current = board[row][col];
        if (
          current !== 0 &&
          current === board[row][col + 1] &&
          current === board[row][col + 2] &&
          current === board[row][col + 3]
        ) {
          return {
            winner: current,
            coordinates: [
              [row, col],
              [row, col + 1],
              [row, col + 2],
              [row, col + 3],
            ],
          };
        }
      }
    }

    // Check horizonlly
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 6; col++) {
        const current = board[row][col];
        if (
          current !== 0 &&
          current === board[row + 1][col] &&
          current === board[row + 2][col] &&
          current === board[row + 3][col]
        ) {
          return {
            winner: current,
            coordinates: [
              [row, col],
              [row + 1, col],
              [row + 2, col],
              [row + 3, col],
            ],
          };
        }
      }
    }

    // Check diagonally (from top-left to bottom-right)
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 3; col++) {
        const current = board[row][col];
        if (
          current !== 0 &&
          current === board[row + 1][col + 1] &&
          current === board[row + 2][col + 2] &&
          current === board[row + 3][col + 3]
        ) {
          return {
            winner: current,
            coordinates: [
              [row, col],
              [row + 1, col + 1],
              [row + 2, col + 2],
              [row + 3, col + 3],
            ],
          };
        }
      }
    }

    // Check diagonally (from top-right to bottom-left)
    for (let row = 3; row < 7; row++) {
      for (let col = 0; col < 3; col++) {
        const current = board[row][col];
        if (
          current !== 0 &&
          current === board[row - 1][col + 1] &&
          current === board[row - 2][col + 2] &&
          current === board[row - 3][col + 3]
        ) {
          return {
            winner: current,
            coordinates: [
              [row, col],
              [row - 1, col + 1],
              [row - 2, col + 2],
              [row - 3, col + 3],
            ],
          };
        }
      }
    }

    // If no winner is found, return null
    return null;
  };

  const setWinner = (setWinnerState) => {
    let winner = setWinnerState;

    if (winner === 1) {
      dispatch(win(1));
    } else if (winner === 2) {
      dispatch(win(2));
    }
  };

  // 1. Game Start
  useEffect(() => {
    let winnerResult = checkWinner(gameBoard);

    // 1. Render Icon in the board
    renderGameRecord(gameBoard, winnerResult, setGameRecordIcons);

    // 2. Check if anyone win

    // toggle the player, if nobody win
    if (winnerResult === null) {
      dispatch(switchPlayer());
    } else {
      dispatch(pause());
      setWinner(winnerResult.winner);
      renderGameRecord(gameBoard, winnerResult, setGameRecordIcons);
    }

    // show result
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameBoard]);

  return (
    <>
      <div
        className="game-container"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="game-onhold" style={{ position: "absolute" }}>
          <button
            className="btn-col"
            style={{ height: 20 }}
            onClick={(e) => {
              e.preventDefault();
              onholdGameClick(gameState.player, 0);
            }}
          >
            opt1
          </button>
          <button
            className="btn-col"
            style={{ height: 20 }}
            onClick={(e) => {
              e.preventDefault();
              onholdGameClick(gameState.player, 1);
            }}
          >
            opt2
          </button>
          <button
            className="btn-col"
            style={{ height: 20 }}
            onClick={(e) => {
              e.preventDefault();
              onholdGameClick(gameState.player, 2);
            }}
          >
            opt3
          </button>
          <button
            className="btn-col"
            style={{ height: 20 }}
            onClick={(e) => {
              e.preventDefault();
              onholdGameClick(gameState.player, 3);
            }}
          >
            opt4
          </button>
          <button
            className="btn-col"
            style={{ height: 20 }}
            onClick={(e) => {
              e.preventDefault();
              onholdGameClick(gameState.player, 4);
            }}
          >
            opt5
          </button>
          <button
            className="btn-col"
            style={{ height: 20 }}
            onClick={(e) => {
              e.preventDefault();
              onholdGameClick(gameState.player, 5);
            }}
          >
            opt6
          </button>
          <button
            className="btn-col"
            style={{ height: 20 }}
            onClick={(e) => {
              e.preventDefault();
              onholdGameClick(gameState.player, 6);
            }}
          >
            opt7
          </button>
        </div>
        <img
          src={boardWhite}
          alt=""
          style={{
            position: "absolute",
            objectFit: "scale-down",
            maxWidth: 600,
          }}
        />
        <img
          src={boardBlack}
          alt=""
          style={{ objectFit: "scale-down", maxWidth: 600 }}
        />
        <div className="game-record" style={{ position: "absolute" }}>
          {GameRecordIcons}
        </div>
      </div>
    </>
  );
}
