import { useNavigate } from "react-router-dom";
import classes from "../../style/Menu.module.scss";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { pause, reset } from "../../redux/gameSlice";

export default function Menu({ openMenu, setOpenMenu }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const modalVisibility = cx(
    classes["menu-background"],
    openMenu === false && classes.hidden
  );

  const handleContinueClick = function () {
    setOpenMenu(false);
    dispatch(pause());
  };

  const handleClickQuit = function () {
    dispatch(reset());
    navigate("/");
  };

  const handleResetClick = () => {
    dispatch(reset());
    setOpenMenu(false);
  };

  return (
    <>
      <div className={modalVisibility}>
        <div className={classes.menu}>
          <div className={classes.container}>
            <h1>PAUSE</h1>
            <button onClick={handleContinueClick}>
              <h4>COUNTINUE GAME</h4>
            </button>
            <button onClick={handleResetClick}>
              <h4>RESTART</h4>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClickQuit();
              }}
              className={classes["btn-quit"]}
            >
              <h4>QUIT GAME</h4>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
