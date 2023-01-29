import "./App.css";
import { Header } from "./components/Header";
import { BodyPage } from "./components/BodyPage";
import { GameDialogs } from "./components/GameDialogs/GameDialogs";
import { Provider } from "mobx-react";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <BodyPage></BodyPage>
        <GameDialogs></GameDialogs>
      </div>
    </Provider>
  );
}

export default App;
