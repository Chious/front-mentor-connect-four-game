import { ReactComponent as Marker } from "../../assets/images/marker-yellow.svg";

import "../../style/MainGame/Footer.scss";

export default function Footer() {
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
          <h4>PLAYER 2'S TURN</h4>
          <h1>30s</h1>
        </div>
        <Marker
          style={{
            transform: "rotate(180deg) scale(5)",
            position: "relative",
            left: "48%",
            bottom: "80px",
          }}
        />
      </section>
    </>
  );
}
