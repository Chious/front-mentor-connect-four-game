import "../style/Rule.scss";
import { ReactComponent as OkImage } from "../assets/images/icon-check.svg";

export default function Rule() {
  return (
    <>
      <div className="rule">
        <div className="container">
          <h1>RULES</h1>
          <div className="section">
            <h2>OBJECTIVE</h2>
            <h3>
              {`Be the first player to connect 4 of the same colored discs in a row
            (either vertically, horizontally, or diagonally).`}
            </h3>
          </div>

          <div className="section">
            <h2>HOW TO PLAY</h2>

            <div className="steps">
              <h3 className="step">1</h3>
              <h3 className="step-desc">Red goes first in the first game.</h3>
            </div>

            <div className="steps">
              <h3 className="step">2</h3>
              <h3 className="step-desc">
                Players must alternate turns, and only one disc can be dropped
                in each turn.
              </h3>
            </div>

            <div className="steps">
              <h3 className="step">3</h3>
              <h3 className="step-desc">Red goes first in the first game.</h3>
            </div>

            <div className="steps">
              <h3 className="step">4</h3>
              <h3 className="step-desc">Red goes first in the first game.</h3>
            </div>
          </div>
        </div>

        <OkImage style={{ position: "relative", bottom: -50, left: "45%" }} />
      </div>
    </>
  );
}
