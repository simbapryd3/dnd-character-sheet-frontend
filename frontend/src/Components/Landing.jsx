import React, { useState } from "react";
import "../styles/main.css";

function Landing(props) {
  return (
    <div>
      <h1 className="landing_title">Welcome Adventurer!</h1>
      <h2 className="landing_title">Let's create your D&D champion!</h2>
      <button type="submit" value="2" name="next" onClick={props.onclick}>
        Get Started
      </button>
    </div>
  );
}

export default Landing;
