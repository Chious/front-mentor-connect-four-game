import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "../../style/MainGame/Toolbar.scss";

export default function Toolbar({ gameState, setGameState }) {
  const handleMenuClick = function () {
    setGameState({
      ...gameState,
      timerPause: true,
      stage: { ...gameState, pause: true, isShowResult: false },
    });
  };

  const handleResetClick = () => {
    setGameState({
      ...gameState,
      stage: { ...gameState, reset: true, isShowResult: false },
    });
  };

  return (
    <>
      <section className="tool-bar">
        <button onClick={handleMenuClick}>MENU</button>
        <Logo />
        <button onClick={handleResetClick}>RESTART</button>
      </section>
    </>
  );
}
