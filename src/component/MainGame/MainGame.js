import Footer from "./Footer";
import Main from "./Main";
import PlayerCounter from "./PlayerCounter";
import Toolbar from "./Toolbar";
import "../../style/MainGame/MainGame.scss";

export default function MainGame() {
  return (
    <>
      <section className="main-game">
        <Toolbar />
        <Main />
        <PlayerCounter className="game-counter-player1" />
        <PlayerCounter className="game-counter-player2" />
        <Footer />
      </section>
    </>
  );
}
