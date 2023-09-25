import "../style/Menu.scss";

export default function Menu() {
  return (
    <>
      <div className="menu-background">
        <div className="menu">
          <div className="container">
            <h1>PAUSE</h1>
            <button>
              <h4>COUNTINUE GAME</h4>
            </button>
            <button>
              <h4>RESTART</h4>
            </button>
            <button className="btn-quit">
              <h4>QUIT GAME</h4>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
