import "../style/Menu.scss";

export default function Menu({
  setGameBoard,
  gameState,
  setGameState,
  setPlayerInfo,
}) {
  const handleClick = function () {
    setGameState({ ...gameState, stage: { ...gameState.stage, pause: false } });
  };

  const handleClickQuit = function () {
    setGameState({
      ...gameState,
      stage: { ...gameState.stage, starter: true, pause: null },
    });
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

  const clearPlayer = () => {
    setPlayerInfo({ player1: 0, player2: 0 });
  };

  return (
    <>
      <div className="menu-background">
        <div className="menu">
          <div className="container">
            <h1>PAUSE</h1>
            <button onClick={handleClick}>
              <h4>COUNTINUE GAME</h4>
            </button>
            <button>
              <h4>RESTART</h4>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClickQuit();
                clearBoard();
                clearPlayer();
              }}
              className="btn-quit"
            >
              <h4>QUIT GAME</h4>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
