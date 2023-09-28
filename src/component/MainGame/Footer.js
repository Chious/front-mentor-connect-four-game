import { ReactComponent as MarkerY } from "../../assets/images/marker-yellow.svg";
import { ReactComponent as MarkerR } from "../../assets/images/marker-red.svg";

import "../../style/MainGame/Footer.scss";
import Timer from "./Timer";

export default function Footer({
  setGameBoard,
  gameState,
  playerInfo,
  setPlayerInfo,
}) {
  const nowPlayer = gameState.player;
  const time = Timer({ setGameBoard, gameState, playerInfo, setPlayerInfo });

  const icon =
    nowPlayer === 1 ? (
      <MarkerR
        style={{
          transform: "rotate(180deg) scale(5)",
          position: "relative",
          left: "48%",
          bottom: "80px",
        }}
      />
    ) : (
      <MarkerY
        style={{
          transform: "rotate(180deg) scale(5)",
          position: "relative",
          left: "48%",
          bottom: "80px",
        }}
      />
    );

  return (
    <>
      <section className="footer">
        <div
          className="footer-info"
          style={{
            width: 130,
            position: "relative",
            left: "45%",
            bottom: "20px",
            zIndex: 5,
            textAlign: "center",
          }}
        >
          <h4>{`PLAYER ${nowPlayer}'S TURN`}</h4>
          <h1>{`${time}s`}</h1>
        </div>
        {icon}
      </section>
    </>
  );
}
