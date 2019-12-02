import React, { useState, useEffect } from "react";
import useFetchGet from "../utils/utils";

function StatForm(props) {
  const { bonusArray, onchange } = props;
  const attributes = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma"
  ];

  // const formColumns = ["Stat", "Modifier", "Bonus", "Total"];
  // const formRows = [];
  // attributes.forEach(attr, index => {
  //   let stat = {};
  //   stat.attribute = attr;
  //   stat.bonus = bonusArray[index];
  //   formRows.push(stat);
  // });

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
          <input type="number" onChange={onchange} name="wisdom" value="5">
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
