import { useState } from "react";
import Footer from "../component/MainGame/Footer";
import Main from "../component/MainGame/Main";
import PlayerCounter from "../component/MainGame/PlayerCounter";
import Toolbar from "../component/MainGame/Toolbar";
import "../style/MainGame/MainGame.scss";
import Menu from "../component/MainGame/Menu";

export default function MainGamePage() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <section className="main-game">
        <Toolbar setOpenMenu={setOpenMenu} />
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Main />
        <PlayerCounter className="game-counter-player1" player="1" />
        <PlayerCounter className="game-counter-player2" player="2" />
        <Footer />
      </section>
    </>
  );
}
