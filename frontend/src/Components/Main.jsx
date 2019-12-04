import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import UserForm from "./UserForm";
import CharFrom from "./CharForm";
import RaceForm from "./RaceForm";

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
  charisma: "",
  wisdom: "",
  intelligence: "",
  subscribe: false
};

function Main(props) {
  const [state, setState] = useState(statForm);
  const [content, setContent] = useState("1");

  function handleChange(event) {
    const name = event.target.name;
    const val = event.target.value;
    const newState = state;
    newState[name] = val;
    setState(val);
  }
  function handleFormClick(event) {
    event.preventDefault();
    const formKey = event.target.value;
    setContent(formKey);
  }

  const currState = {
    "1": <Landing onclick={handleFormClick} />,
    "2": <UserForm onchange={handleChange} onclick={handleFormClick} />,
    "3": <CharFrom onchange={handleChange} onclick={handleFormClick} />,
    "4": <RaceForm onchange={handleChange} onclick={handleFormClick} />
  };

  return <div>{currState[content]}</div>;
}

export default Main;
