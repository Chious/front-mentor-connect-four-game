import player1 from "../../assets/images/counter-red-large.svg";
import player2 from "../../assets/images/counter-yellow-large.svg";

export default function GameRecordIcon({ player, row, column, winner }) {
  const icon = player === 1 ? player1 : player2;
  const divBottom = winner ? 40 : 0;

  return (
    <div
      style={{
        gridColumnStart: column,
        gridRowStart: row,
      }}
    >
      {winner && (
        <div
          style={{
            fontSize: 45,
            fontWeight: 1000,
            color: "white",
            width: 35,
            height: 35,
            opacity: 0.5,
            position: "relative",
            left: 20,
            top: 6,
            zIndex: 5,
          }}
        >
          o
        </div>
      )}
      <img
        src={icon}
        alt=""
        style={{ position: "relative", bottom: divBottom }}
      />
    </div>
  );
}
