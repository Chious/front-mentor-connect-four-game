import { useDispatch } from "react-redux";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "../../style/MainGame/Toolbar.scss";
import { reset } from "../../redux/gameSlice";

export default function Toolbar({ setOpenMenu }) {
  const handleMenuClick = function () {
    setOpenMenu(true);
  };

  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <>
      <section className="tool-bar">
        <button onClick={handleMenuClick}>MENU</button>
        <Logo />
        <button onClick={handleResetClick}>RESTART</button>
      </section>
    </>
  );
}
