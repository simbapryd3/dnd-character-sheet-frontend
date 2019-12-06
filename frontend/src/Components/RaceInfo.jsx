import React, { useState, useEffect } from "react";

function RaceInfo(props) {
  const [raceInfo, setRaceInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/races/${props.index}`)
      .then(res => res.json())
      .then(response => {
        setRaceInfo(response);
        setIsLoading(false);
        props.raceSelect(response);
      })
      .catch(error => console.log(error));
  }, []);
  console.log(raceInfo);
  return (
    <div>
      {isLoading && <p>Wait I'm Loading info for you</p>}
      <div color = "white">
      <label> Speed </label>
        <h3> {raceInfo.speed}</h3>
        <label> Age </label>
        <p>{raceInfo.age}</p>
        <label> Alignment </label>
        <p>{raceInfo.alignment}</p>
        <label> Bonuses </label>
        <p> {raceInfo.ability_bonuses}</p>
        </div>
    </div>
  );
}

export default RaceInfo;

