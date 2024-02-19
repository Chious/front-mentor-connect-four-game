import "./style/App.scss";
import StarterPage from "./pages/starter";
import RulePage from "./pages/rule";

// manage state
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainGamePage from "./pages/main-game";

function App() {
  return (
    <Provider store={store}>
      <div className="main-background">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<StarterPage />} />
            <Route path="rule" element={<RulePage />} />
            <Route path="game" element={<MainGamePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
