import React, { useState, useEffect } from "react";
import "../styles/final.css";

function FinalSheet(props) {
  const [final, setFinal] = useState(props.state);
  const[info,setInfo] = useState(props.info)
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

  console.log(final);
  console.log(props.info);
  return (
    <div className="final_card">
      <div className="image-card">
      {/* <img className="final-img" src={images[Number(props.)]} /> */}
      </div>
      <div className="race_info">
        <p>{props.info.index}</p>
          <label> Name
          <h3>{props.info.name}</h3>
        </label>
        <label> Class
          <h3>{final.dndClass}</h3>
          </label>
          <label> Age
          <h3>{props.info.age}</h3>
        </label>
        <label> Alignment
          <h3>{props.info.alignment}</h3>
        </label>
        <label> Speed
          <h3>{props.info.age}</h3>
        </label>
        
          
        </div>
    
</div>


  );
}

export default FinalSheet;
