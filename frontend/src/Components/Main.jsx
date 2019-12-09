import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import UserForm from "./UserForm";
import CharFrom from "./ClassForm";
import RaceForm from "./RaceForm";
import Alignment from "./Alignment";
import StatForm from "./StatForm";
import FinalSheet from "./Final";

const statForm = {
  step: 1,
  username: "",
  charactername: "",
  dndClass: "",
  race: "",
  raceId: "",
  alignment: "",
  strength: "",
  dexterity: "",
  consitution: "",
  intelligence: "",
  wisdom: "",
  charisma: "",
  subscribe: false
};

function Main(props) {
  const [state, setState] = useState(statForm);
  const [image, setImage] = useState("");
  const [content, setContent] = useState("1");
  const [classInfo, setClassInfo] = useState({
    index: "",
    name: "",
    hit_die: "",
  });
  const [raceInfo, setRaceInfo] = useState({
    index: "",
    name: "",
    speed: "",
    ability_bonuses: [],
    alignment: "",
    age: ""
  });

  function handleClassSelect(classInfo) {
    const { index, name, hit_die } = classInfo;
    setClassInfo({ index, name, hit_die});
  }

  function handleRaceSelect(raceInfo) {
    const { index, name, speed, ability_bonuses, alignment, age } = raceInfo;
    setRaceInfo({ index, name, speed, ability_bonuses, alignment, age });
  }

  useEffect(() => {
    let Number = props;
  }, [props]);

  function handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const val = event.target.value;
    let newState = state;
    newState[name] = val;
    setState(newState);
  }
  function handleClick(event) {
    const name = event.target.name;
    const val = event.target.innerText;
    const raceImage = event.target.id;

    let newState = state;
    newState[name] = val;
    setImage(raceImage);
    setState(newState);
    const formKey = event.target.value;
    setContent(formKey);
  }
  function handleFormClick(event) {
    event.preventDefault();
    const formKey = event.target.value;
    setContent(formKey);
  }

  const currState = {
    "1": <Landing onclick={handleFormClick} />,
    "2": <UserForm onchange={handleChange} onclick={handleFormClick} />,
    "3": <CharFrom 
    handleClassSelect={handleClassSelect}
    onchange={handleChange} 
    onclick={handleClick} 
    />,
    "4": (
      <RaceForm
        handleRaceSelect={handleRaceSelect}
        onchange={handleChange}
        onclick={handleClick}
      />
    ),
    "5": <Alignment onclick={handleClick} />,
    "6": <StatForm race={raceInfo.ability_bonuses} onclick={handleClick} />,
    "7": (
      <FinalSheet state={state} onchange={handleChange} onclick={handleClick} />
    )
  };
  console.log(image);
  return <div>{currState[content]}</div>;
}

export default Main;
