import React, { useState, useEffect } from "react";
import useFetchGet from "../utils/utils";
import ModifierCalculator from "../utils/modifier-calculator";
import DiceRoll from "../utils/dice-roll";

// Stat row in form table
function StatRow({attribute, bonus}) {
  
  // Change multiple states to one state as object
  const [modifier, setModifier] = useState(0);
  const [stat, setStat] = useState(0);
  const [total, setTotal] = useState(0);
  const [bonus, setBonus] = useState(0);

  function handleChange(event) {
    // 'merica needs this function
  }

  useEffect(() => {

  })
}


function StatForm(props) {
  const [statRolls, setStatRolls] = useState([]);
  const { bonusArray, onchange } = props;
  const attributes = [
    {attribute: "strength", bonus: bonusArray[0]},
    {attribute: "dexterity", bonus: bonusArray[1]},
    {attribute: "constitution", bonus: bonusArray[2]},
    {attribute: "intelligence", bonus: bonusArray[3]},
    {attribute: "wisdom", bonus: bonusArray[4]},
    {attribute: "charisma", bonus: bonusArray[5]}
  ]
  useEffect(() => {
    async function getRolls() {
      const statRolls = []
      for (let i=0; i<attributes.length; i++) {
        let roll = await DiceRoll.rollStats();
        statRolls.push(roll);
      }
      setStatRolls(statRolls);
    }
    getRolls();
  })

  return (
    <div className="statform-wrapper">
      <form className="statform">
        <label className="stat-wrapper">
          <input type="number" onChange={onchange} name="strength" value="1">
           Strength:{" "}
          </input>
          <input type="number" onChange={onchange} name="dexterity" value="2">
           Dexterity:{" "}
          </input>
          <input type="number" onChange={onchange} name="constitution" value="3">
           Constitution:{" "}
          </input>
          <input type="number" onChange={onchange} name="intelligence" value="4">
           Intelligence:{" "}
          </input>
          <input type="number" onChange={onchange} name="wisdom" value="5">
           Wisdom:{" "}
          </input>
          <input type="number" onChange={onchange} name="chrisma"value="666">
           Charisma:{" "}
          </input>
        </label>
      </form>
    </div>
  );
}

export default StatForm;

/* Stretch Goals
 - Highlight class-based main stats (ex. Barbarian would have "strength" class highlighted, styled, etc.)
*/
