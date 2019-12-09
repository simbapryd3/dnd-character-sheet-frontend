import React, { useState, useEffect } from "react";
import "../styles/alignment.css";

function Alignment(props) {
  const [alignmentState, setAlignmentState] = useState();

  return (
    <div className="alignment_wrapper">
      <h1 className="alignment_title">Alignment</h1>
      <div className="alignment_options">
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
        <a
          className="learn_button"
          href={"https://www.dndbeyond.com/sources/basic-rules/personality-and-background#Alignment"}
          target="_blank"
        >
          {" "}
          Learn More
        </a>
      </div>
      <button onClick={props.onclick} value="4">Back</button>
    </div>
  );
}
export default Alignment;

