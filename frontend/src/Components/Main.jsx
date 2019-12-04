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
  const [content, setContent] = useState("1");

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
    let newState = state;
    newState[name] = val;
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
    "3": <CharFrom onchange={handleChange} onclick={handleClick} />,
    "4": <RaceForm onchange={handleChange} onclick={handleClick} />,
    "5": <Alignment onclick={handleClick} />,
    "6": <StatForm onchange={handleChange} onclick={handleClick} />
  };
  console.log(state);
  return <div>{currState[content]}</div>;
}

export default Main;
