import React, { useState, useEffect } from "react";
import "./styles/main.css";
import "./App.css";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import Main from "./Components/Main";

function App() {
  const [navState, setNavState] = useState("");

  const handleClick = event => {
    const val = event.target.value;
    setNavState(val);
  };

  return (
    <div className="main-wrapper">
      <header>
        <Nav onclick={handleClick} />
      </header>
      <div className="main-content">
        <Main props={navState} />
      </div>
      {navState}
    </div>
  );
}

export default App;
