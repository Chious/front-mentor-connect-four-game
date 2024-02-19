import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { win, reset, pause } from "../../redux/gameSlice";
import { clearGameBoard } from "../../redux/boardSlice";

function Timer() {
  const [seconds, setSeconds] = useState(30);
  const [isRunning, setIsRunning] = useState(true);

  //score info
  const dispatch = useDispatch();

  //gameboard info
  const gameBoard = useSelector((state) => state.board.board);
  const clearBoard = () => {
    dispatch(clearGameBoard());
  };

  //gameState
  const gameState = useSelector((state) => state.game);
  const { stage, player } = gameState;

  const setOutOfTimeWinner = () => {
    let nowPlayer = gameState.player;
    let winner = nowPlayer === 1 ? 2 : 1;

    if (winner === 1) {
      //setup score
      dispatch(win(1));
    } else if (winner === 2) {
      //setup score
      dispatch(win(2));
    }
  };

  useEffect(() => {
    let newTimerId;

    if (isRunning) {
      // Function to decrement the timer by 1 second
      const decrementTimer = () => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      };

      // Start the timer and store the timer ID
      newTimerId = setInterval(decrementTimer, 1000);
    }

    // Clear the interval and reset the timer when the component unmounts
    return () => {
      if (newTimerId) {
        clearInterval(newTimerId);
      }
    };
  }, [isRunning]); // Only depend on isRunning

  // Reset the timer if switch player
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setSeconds(5);

    // if gameBoard is clear, stop the timer
    const anyNonZero = Object.values(gameBoard).some((row) =>
      row.some((val) => val !== 0)
    );
    if (!anyNonZero) {
      setIsRunning(false);
    }
    if (anyNonZero) {
      setIsRunning(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player]);

  // Reset the timer to 30 seconds when it reaches 0
  useEffect(() => {
    if (seconds === 0) {
      dispatch(pause());
      setOutOfTimeWinner();
      clearBoard();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]); // Depend on seconds

  const winState = gameState.winner;
  useEffect(() => {
    if (winState !== null) {
      dispatch(pause());
      setSeconds(5);
    }

    if (winState === null) {
      setIsRunning(true);
      setSeconds(5);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winState]);

  useEffect(() => {
    if (stage === "reset") {
      //1. reset board
      clearBoard();
      //2. reset seconds
      setSeconds(5);
      //3. clear playerInfo
      dispatch(reset());
    }

    if (stage === "pause") {
      setIsRunning(false);
    }

    if (stage === "end") {
      //1. reset board
      clearBoard();
      //2. Stop the timer
      setIsRunning(false);
      //3. reset seconds
      setSeconds(5);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  return seconds;
}

export default Timer;
