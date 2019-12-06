import React, { useState } from "react";

function Landing(props) {
  return (
    <div>
      <h2 class = "landing_title">Welcome to D&D and YOU. Here YOU can choose your D&D champion</h2>
      <button type="submit" value="2" name="next" onClick={props.onclick}>
        Next
      </button>
    </div>
  );
}

export default Landing;
