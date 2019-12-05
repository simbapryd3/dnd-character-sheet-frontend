import React, { useState, useEffect } from "react";

function FinalSheet(props) {
  const [final, setFinal] = useState(props.state);
  console.log(final);
  return (
    <div>

      <h1>Your Final Form </h1>
      <h2> {final.username} </h2>
      <h3> {final.charactername} </h3>
      <h3> {final.race} </h3>
      <h3> {final.dndClass} </h3>
      <h3> {final.race} </h3>
      <h3> {final.alignment} </h3>
      <h3> {final.strength} </h3>
      <h3> {final.dexterity} </h3>
      <h3> {final.constitution} </h3>
      <h3> {final.intelligence} </h3>
      <h3> {final.wisdom} </h3>
      <h3> {final.charisma} </h3>

    </div>

  );
}

export default FinalSheet;
