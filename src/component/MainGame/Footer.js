import { ReactComponent as MarkerY } from "../../assets/images/marker-yellow.svg";
import { ReactComponent as MarkerR } from "../../assets/images/marker-red.svg";

import "../../style/MainGame/Footer.scss";
import Timer from "./Timer";
import { useDispatch, useSelector } from "react-redux";
import { start } from "../../redux/gameSlice";

export default function Footer() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.game);

  const nowPlayer = gameState.player;
  const time = Timer();

  const showPlayInfo = () => {
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
        <div className="icon-container">{icon}</div>
      </>
    );
  };

  const showWinner = () => {
    const winner = gameState.winner;

    const setCountinue = () => {
      dispatch(start());
    };

    return (
      <div className="winner-info">
        <h4>{`PLAYER ${winner}`}</h4>
        <h1>WINS</h1>
        <button className="countinue-btn" onClick={setCountinue}>
          Countinue
        </button>
      </div>
    );
  };

  return (
    <>
      <section className="footer">
        {gameState.stage !== "end" ? showPlayInfo() : showWinner()}
      </section>
    </>
  );
}
