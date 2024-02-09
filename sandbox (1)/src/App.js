import "./styles.css";
import * as React from "react";
import CustomizedDialogs from "./components/rulesPopup.js";
import Gamecomponent from "./components/gameComponent.js";

export default function App() {
  return (
    <div className="App">
      <div className="main">
        <Gamecomponent />
      </div>
      <CustomizedDialogs />
    </div>
  );
}
