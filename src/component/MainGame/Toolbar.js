import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "../../style/MainGame/Toolbar.scss";

export default function Toolbar() {
  return (
    <>
      <section className="tool-bar">
        <button>MENU</button>
        <Logo />
        <button>RESTART</button>
      </section>
    </>
  );
}
