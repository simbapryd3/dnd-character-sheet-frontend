import React, { useState, useEffect } from "react";
function Alignment(props) {
  const [alignmentState, setAlignmentState] = useState();

  return (
    <div>
      <h1> Alignment</h1>
      <div>
        <button name="alignment" onClick={props.onclick} value="6">
          Lawful Good
        </button>
        <button name="alignment" onClick={props.onclick} value="6">
          Lawful Neutral
        </button>
        <button name="alignment" onClick={props.onclick} value="6">
          Lawful Evil
        </button>
        <button name="alignment" onClick={props.onclick} value="6">
          Chaotic Good
        </button>
        <button name="alignment" onClick={props.onclick} value="6">
          Chaotic Neutral
        </button>
        <button name="alignment" onClick={props.onclick} value="6">
          Choatic Evil
        </button>
        <button name="alignment" onClick={props.onclick} value="6">
          Neutral Good
        </button>
        <button name="aalignment" onClick={props.onclick} value="6">
          True Neutral
        </button>
        <button name="alignment" onClick={props.onclick} value="6">
          Neutral Evil
        </button>
      </div>
      <button onClick={props.onclick} value="4">Back</button>
    </div>
  );
}
export default Alignment;
