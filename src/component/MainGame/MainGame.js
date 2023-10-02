import Footer from "./Footer";
import Main from "./Main";
import PlayerCounter from "./PlayerCounter";
import Toolbar from "./Toolbar";
import "../../style/MainGame/MainGame.scss";

export default function MainGame({
  gameBoard,
  setGameBoard,
  gameState,
  setGameState,
  playerInfo,
  setPlayerInfo,
}) {
  return (
    <>
      <section className="main-game">
        <Toolbar gameState={gameState} setGameState={setGameState} />
        <Main
          gameBoard={gameBoard}
          setGameBoard={setGameBoard}
          gameState={gameState}
          setGameState={setGameState}
        />
        <PlayerCounter
          className="game-counter-player1"
          player="1"
          playerInfo={playerInfo}
        />
        <PlayerCounter
          className="game-counter-player2"
          player="2"
          playerInfo={playerInfo}
        />
        <Footer
          gameState={gameState}
          playerInfo={playerInfo}
          setPlayerInfo={setPlayerInfo}
          setGameBoard={setGameBoard}
          setGameState={setGameState}
        />
      </section>
    </>
  );
}
