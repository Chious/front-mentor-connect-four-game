import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "../../style/MainGame/Toolbar.scss";

export default function Toolbar({ gameState, setGameState }) {
  const handleMenuClick = function () {
    setGameState({ ...gameState, stage: { ...gameState, pause: true } });
  };

  return (
    <>
      <section className="tool-bar">
        <button onClick={handleMenuClick}>MENU</button>
        <Logo />
        <button>RESTART</button>
      </section>
    </>
  );
}
