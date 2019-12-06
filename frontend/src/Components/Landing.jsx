import React, { useState } from "react";
import '../styles/main.css';

function Landing(props) {
  return (
    <div>
      <h1 className = "landing_title">Welcome, Adventurer, to D&D&U</h1>
      <h2 className = "landing_title">Your resource for building your D&D champion!</h2>
      <button type="submit" value="2" name="next" onClick={props.onclick}>
        Next
      </button>
    </div>
  );
}

export default Landing;
