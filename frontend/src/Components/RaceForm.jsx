import React, { useState, useEffect } from "react";
import RaceInfo from "./RaceInfo";

function RaceForm(props) {
  const [raceState, setRaceState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/races/all")
      .then(response => response.json())
      .then(data => {
        setRaceState(data.raceResponse);
      });
  }, []);

  const images = [
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/254/420/618/636271781394265550.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/639/420/618/636287075350739045.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/256/420/618/636271789409776659.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/258/420/618/636271801914013762.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/481/420/618/636274618102950794.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/466/420/618/636274570630462055.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/641/420/618/636287076637981942.png"
  ];

  return (
    <div className="multiple_cards">
          <h1>Choose Your Character's Race</h1>

      {raceState.map((item, index) => {
        item.image = images[index];
        return (
          <div className="race_card">
            <h1 className="dndRace_name" key={item.classId}>{item.name}</h1>
            <img src={item.image} />
            <a
              href={"https://www.dndbeyond.com/races/" + item.name}
              target="_blank"
            >
              {" "}
              Learn More
            </a>

            <RaceInfo index={index + 1} raceSelect={props.handleRaceSelect} />
            <button
              id={item.image}
              name="race"
              onClick={props.onclick}
              value="5"
            >
              {item.name}
            </button>
          </div>
        );
      })}
      <button onClick={props.onclick} value="3">
        Back
      </button>
    </div>
  );
}

export default RaceForm;
