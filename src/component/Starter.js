import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as PlayerVS } from "../assets/images/player-vs-player.svg";
import "../style/Starter.scss";

export default function Starter() {
  return (
    <>
      <div className="starter">
        <div className="container">
          <Logo />
          <button className="btn--player--vs">
            <h4>PLAY VS PLAYER</h4>
            <PlayerVS style={{ maxHeight: 25 }} />
          </button>
          <button>
            <h4>GAME RULES</h4>
          </button>
        </div>
      </div>
    </>
  );
}
