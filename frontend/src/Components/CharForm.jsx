import React, { useState, useEffect } from "react";

function CharFrom(props) {
  const [raceState, setRaceState] = useState([]);
  const [classState, setClassState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/races/all")
      .then(response => response.json())
      .then(data => setRaceState(data.raceResponse));

    fetch("http://localhost:4000/classes/all")
      .then(response => response.json())
      .then(data => setClassState(data.classResponse));
  }, []);

  const images = [
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png",
    "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png"
  ];
  console.log(classState);
  console.log(raceState);

  return (
    <div>
      {raceState.map(item => (
        <h1 key={item.raceId}>{item.name}</h1>
      ))}

      {classState.map((item, index) => {
        item.image = images[index];
        return (
          <div>
            <h1 key={item.classId}>{item.name}</h1>
            <img src={item.image} />
          </div>
        );
      })}
    </div>
  );
}
export default CharFrom;
