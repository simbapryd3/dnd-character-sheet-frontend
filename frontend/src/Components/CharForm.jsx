import React, { useState, useEffect } from "react";

function CharFrom(props) {
  const [classState, setClassState] = useState([]);

  useEffect(() => {
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


  return (
    <div>

      {classState.map((item, index) => {
        item.image = images[index];
        return (
          <div>
            <h1 key={item.classId}>{item.name}</h1>
            <img src={item.image} />
          </div>
        );
      })}
      <button value="4" name="next" onClick={props.onclick}>
        Continue
      </button>
    </div>
  );
}
export default CharFrom;
