import React, { useState, useEffect } from "react";

function FinalSheet(props) {
  const [final, setFinal] = useState(props.state);
  console.log(final);
  return (
    <div>
      <h1>Your Final Form </h1>
      <p>{final.race}</p>
    </div>
  );
}

export default FinalSheet;
