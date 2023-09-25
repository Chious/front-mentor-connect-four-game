import { ReactComponent as PlayerLogo } from "../../assets/images/counter-red-large.svg";
import "../../style/MainGame/PlayerCounter.scss";

export default function PlayerCounter({ className }) {
  return (
    <>
      <div className={`player-counter ${className}`}>
        <PlayerLogo style={{ position: "relative", top: "-40px" }} />
        <h2>PLAYER 1</h2>
        <h1>12</h1>
      </div>
    </>
  );
}
