import { useState, useEffect } from "react";

function Timer({
  setGameBoard,
  gameState,
  setGameState,
  playerInfo,
  setPlayerInfo,
}) {
  const [seconds, setSeconds] = useState(30);
  const [isRunning, setIsRunning] = useState(true);
  const [firstTime, setFirstTime] = useState(0);
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
      setGameState({ ...gameState, winner: winner });
    } else if (winner === 2) {
      setPlayerInfo({
        ...playerInfo,
        player2: playerInfo.player2 + 1,
      });
      setGameState({ ...gameState, winner: winner });
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
    if (firstTime < 2) {
      // Start the timer, if first user click the button
      setFirstTime(firstTime + 1);
    }

    if (firstTime >= 2 && pause === false) {
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

    if (pause === false) {
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
    }
  }, [pause]);

  const winState = gameState.winner;
  useEffect(() => {
    if (winState !== null) {
      setPause();
      setSeconds(5);
    }

    if (winState === null) {
      setSeconds(5);
    }
  }, [winState]);

  return seconds;
}

export default Timer;
