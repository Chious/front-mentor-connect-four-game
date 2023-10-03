import { useState } from "react";
import MainGame from "./component/MainGame/MainGame";
import "./style/App.scss";
import Menu from "./component/Menu";
import Starter from "./component/Starter";
import Rule from "./component/Rule";

function App() {
  const [gameBoard, setGameBoard] = useState({
    0: [0, 0, 0, 0, 0, 0],
    1: [0, 0, 0, 0, 0, 0],
    2: [0, 0, 0, 0, 0, 0],
    3: [0, 0, 0, 0, 0, 0],
    4: [0, 0, 0, 0, 0, 0],
    5: [0, 0, 0, 0, 0, 0],
    6: [0, 0, 0, 0, 0, 0],
  });

  const [gameState, setGameState] = useState({
    player: 1,
    winner: 1,

    timerPause: false,
    stage: {
      starter: true,
      pause: false,
      rule: null,
      reset: null,
      isShowResult: false,
    },
  });

  const [playerInfo, setPlayerInfo] = useState({
    player1: 0,
    player2: 0,
  });

  return (
    <>
      <div className="main-background">
        {gameState.stage.rule && (
          <Rule setGameState={setGameState} gameState={gameState} />
        )}
        {gameState.stage.starter && (
          <Starter setGameState={setGameState} gameState={gameState} />
        )}
        {gameState.stage.pause && (
          <Menu
            setGameState={setGameState}
            gameState={gameState}
            setGameBoard={setGameBoard}
            setPlayerInfo={setPlayerInfo}
          />
        )}

        {!gameState.stage.starter & !gameState.stage.rule && (
          <MainGame
            gameBoard={gameBoard}
            setGameBoard={setGameBoard}
            gameState={gameState}
            setGameState={setGameState}
            playerInfo={playerInfo}
            setPlayerInfo={setPlayerInfo}
          />
        )}
      </div>
    </>
  );
}

export default App;
