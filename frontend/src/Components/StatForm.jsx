import React, { useState, useEffect } from "react";
import useFetchGet from "../utils/utils";
import ModifierCalculator from "../utils/modifier-calculator";

function StatForm(props) {
  const { bonusArray, onchange } = props;
  const attributes = [
    strength: {bonus: bonusArray[0], mod: ModifierCalculator.calculateModifier()

  ]
    "dexterity": bonusArray[1],
    "constitution": bonusArray[2],
    "intelligence": bonusArray[3],
    "wisdom": bonusArray[4],
    "charisma": bonusArray[5]
  };

  // const formColumns = ["Stat", "Modifier", "Bonus", "Total"];
  // const formRows = [];
  // attributes.forEach(attr, index => {
  //   let stat = {};
  //   stat.attribute = attr;
  //   stat.bonus = bonusArray[index];
  //   formRows.push(stat);
  // });

  const createTableRows = (attributes) => {
    return (
      <tr>
        {for (let i=0; i<attributes.length; i++) {
          
        }}
      </tr>
    )
  }
  return (
    <div className="statform-wrapper">
      <form className="statform">
        <label className="stat-wrapper">
          <input type="number" 
           onChange={onchange} 
           name="strength" 
           value="1">
           Strength:{" "}
          </input>
          <input type="number" 
           onChange={onchange} 
           name="dexterity" 
           value="2">
           Dexterity:{" "}
          </input>
          <input
            type="number"
            onChange={onchange}
            name="constitution"
            value="3">
            Constitution:{" "}
          </input>
          <input
            type="number"
            onChange={onchange}
            name="intelligence"
            value="4">
            Intelligence:{" "}
          </input>
          <input type="number" 
           onChange={onchange} 
           name="wisdom" 
           value="5">
           Wisdom:{" "}
          </input>
          <input
            type="number"
            onChange={onchange}
            name="chrisma"
            value="666"></input>
        </label>
      </form>
    </div>
  );
}

export default StatForm;

/* Stretch Goals
 - Highlight class-based main stats (ex. Barbarian would have "strength" class highlighted, styled, etc.)
*/
