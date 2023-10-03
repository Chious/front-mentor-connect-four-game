import { useState, useEffect } from "react";

function Timer({
  gameBoard,
  setGameBoard,
  gameState,
  setGameState,
  playerInfo,
  setPlayerInfo,
}) {
  const [seconds, setSeconds] = useState(30);
  const [isRunning, setIsRunning] = useState(true);
  const pause = gameState.timerPause;

  const setPause = function () {
    setGameState({
      ...gameState,
      timerPause: true,
    });
  };

  const player = gameState.player;

  const setOutOfTimeWinner = () => {
    let nowPlayer = gameState.player;
    let winner = nowPlayer === 1 ? 2 : 1;

    if (winner === 1) {
      setPlayerInfo({ ...playerInfo, player1: playerInfo.player1 + 1 });
      setGameState({
        ...gameState,
        winner: winner,
        stage: { ...gameState.stage, isShowResult: true },
      });
    } else if (winner === 2) {
      setPlayerInfo({
        ...playerInfo,
        player2: playerInfo.player2 + 1,
      });
      setGameState({
        ...gameState,
        winner: winner,
        stage: { ...gameState.stage, isShowResult: true },
      });
    }
  };

  const clearBoard = () => {
    let defaultBoard = {
      0: [0, 0, 0, 0, 0, 0],
      1: [0, 0, 0, 0, 0, 0],
      2: [0, 0, 0, 0, 0, 0],
      3: [0, 0, 0, 0, 0, 0],
      4: [0, 0, 0, 0, 0, 0],
      5: [0, 0, 0, 0, 0, 0],
      6: [0, 0, 0, 0, 0, 0],
    };

    setGameBoard(defaultBoard);
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
  }, [player]);

  // Reset the timer to 30 seconds when it reaches 0
  useEffect(() => {
    if (seconds === 0) {
      setPause();
      setOutOfTimeWinner();
      clearBoard();
    }
  }, [seconds]); // Depend on seconds

  // While Pause, Stop the timer
  useEffect(() => {
    let pauseState = gameState.timerPause;
    setIsRunning(!pauseState);
  }, [pause]);

  const winState = gameState.winner;
  useEffect(() => {
    if (winState !== null) {
      setPause();
      setSeconds(5);
    }

    if (winState === null) {
      setIsRunning(true);
      setSeconds(5);
    }
  }, [winState]);

  const resetState = gameState.stage.reset;
  const isShowResult = gameState.stage.isShowResult;

  useEffect(() => {
    if (resetState === true) {
      //1. reset board
      let defaultBoard = {
        0: [0, 0, 0, 0, 0, 0],
        1: [0, 0, 0, 0, 0, 0],
        2: [0, 0, 0, 0, 0, 0],
        3: [0, 0, 0, 0, 0, 0],
        4: [0, 0, 0, 0, 0, 0],
        5: [0, 0, 0, 0, 0, 0],
        6: [0, 0, 0, 0, 0, 0],
      };
      setGameBoard(defaultBoard);
      //2. reset seconds
      setSeconds(5);
      //3. clear playerInfo
      setPlayerInfo({ player1: 0, player2: 0 });
      //4. player = 1

      setGameState({
        ...gameState,
        player: 1,
        winner: null,
        timerPause: false,
        stage: { ...gameState.stage, reset: null, pause: false },
      });
    }

    if (isShowResult === false) {
      //1. reset board
      let defaultBoard = {
        0: [0, 0, 0, 0, 0, 0],
        1: [0, 0, 0, 0, 0, 0],
        2: [0, 0, 0, 0, 0, 0],
        3: [0, 0, 0, 0, 0, 0],
        4: [0, 0, 0, 0, 0, 0],
        5: [0, 0, 0, 0, 0, 0],
        6: [0, 0, 0, 0, 0, 0],
      };
      setGameBoard(defaultBoard);
      //2. reset seconds
      setSeconds(5);
    }
  }, [resetState, isShowResult]);

  return seconds;
}

export default Timer;
