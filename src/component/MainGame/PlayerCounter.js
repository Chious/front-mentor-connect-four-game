import { ReactComponent as PlayerLogoR } from "../../assets/images/player-one.svg";
import { ReactComponent as PlayerLogoY } from "../../assets/images/player-two.svg";

import "../../style/MainGame/PlayerCounter.scss";

export default function PlayerCounter({ className, player, playerInfo }) {
  const icon =
    player === "1" ? (
      <PlayerLogoR style={{ position: "relative", top: "-40px" }} />
    ) : (
      <PlayerLogoY style={{ position: "relative", top: "-40px" }} />
    );

  const [player1, player2] = [playerInfo.player1, playerInfo.player2];
  const nowPlayer = player === "1" ? player1 : player2;

  return (
    <>
      <div className={`player-counter ${className}`}>
        {icon}
        <h2>{`PLAYER ${player}`}</h2>
        <h1>{nowPlayer}</h1>
      </div>
    </>
  );
}
