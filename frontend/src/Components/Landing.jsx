import React, { useState } from "react";

function Landing(props) {
  return (
    <div>
      <h2>This is the Landing Page!!! :D</h2>
      <button type="submit" value="2" name="next" onClick={props.onclick}>
        Next
      </button>
    </div>
  );
}

export default Landing;
