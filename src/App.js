import MainGame from "./component/MainGame/MainGame";
import Menu from "./component/Menu";
import Rule from "./component/Rule";
import Starter from "./component/Starter";
import "./style/App.scss";

function App() {
  return (
    <>
      <div className="main-background">
        <MainGame />
      </div>
    </>
  );
}

export default App;
