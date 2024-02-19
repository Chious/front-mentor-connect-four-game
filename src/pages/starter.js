import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as PlayerVS } from "../assets/images/player-vs-player.svg";
import "../style/Starter.scss";

export default function StarterPage() {
  const navigate = useNavigate();

  const handleStart = function () {
    navigate("/game");
  };

  const handleRule = () => {
    navigate("/rule");
  };
  return (
    <>
      <div className="starter">
        <div className="container">
          <Logo />
          <button className="btn--player--vs" onClick={handleStart}>
            <h4>PLAY VS PLAYER</h4>
            <PlayerVS style={{ maxHeight: 25 }} />
          </button>
          <button onClick={handleRule}>
            <h4>GAME RULES</h4>
          </button>
        </div>
      </div>
    </>
  );
}
