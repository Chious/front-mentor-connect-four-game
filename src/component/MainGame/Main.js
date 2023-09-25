import boardWhite from "../../assets/images/board-layer-white-large.svg";
import boardBlack from "../../assets/images/board-layer-black-large.svg";

export default function Main() {
  return (
    <>
      <div
        className="game-container"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={boardWhite}
          alt=""
          style={{
            position: "absolute",
            objectFit: "scale-down",
            maxWidth: 600,
          }}
        />
        <img
          src={boardBlack}
          alt=""
          style={{ objectFit: "scale-down", maxWidth: 600 }}
        />
      </div>
    </>
  );
}
