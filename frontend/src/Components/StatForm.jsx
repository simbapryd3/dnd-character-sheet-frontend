import React, { useState, useEffect } from "react";
import useFetchGet from "../utils/utils";
import ModifierCalculator from "../utils/modifier-calculator";
import DiceRoll from "../utils/dice-roll";

const StatRow = ({ attribute, bonus }) => {
  // Change multiple states to one state as object
  const [modifier, setModifier] = useState(0);
  const [stat, setStat] = useState(0);
  const [total, setTotal] = useState(0);

  function handleChange(event) {
    const statValue = event.target.value;
    setStat(statValue);
  }

  useEffect(() => {
    const total = Number(stat) + Number(bonus) + Number(modifier);
    const mod = ModifierCalculator.calculateModifier(total);
    setModifier(mod);
    setTotal(total);
  }, [stat]);

  return (
    <tr className="stat-table_row">
      <th>{attribute}</th>
      <td>
        <label className="attribute-value">
          <input type="number" name={attribute} onChange={handleChange}></input>
        </label>
      </td>
      <td>
        <label className="bonus-value">{bonus}</label>
      </td>
      <td>
        <label className="modifier-value">{modifier}</label>
      </td>
      <td>
        <label className="total-value">{total}</label>
      </td>
    </tr>
  );
};

function StatForm({ bonusArray, onchange }) {
  const [statRolls, setStatRolls] = useState([]);
  if (!bonusArray) {
    bonusArray = [0, 0, 0, 0, 0, 0];
  }
  const attributes = [
    { attribute: "strength", bonus: bonusArray[0] },
    { attribute: "dexterity", bonus: bonusArray[1] },
    { attribute: "constitution", bonus: bonusArray[2] },
    { attribute: "intelligence", bonus: bonusArray[3] },
    { attribute: "wisdom", bonus: bonusArray[4] },
    { attribute: "charisma", bonus: bonusArray[5] }
  ];
  useEffect(() => {
    async function getRolls() {
      const statRolls = [];
      for (let i = 0; i < attributes.length; i++) {
        let roll = await DiceRoll.rollStats();
        statRolls.push(roll);
      }
      setStatRolls(statRolls);
      console.log("Stat rolls ---->    ", statRolls);
    }
    getRolls();
  }, []);

  return (
    <div className="statform-wrapper">
      <form className="statform">
        <table className="stat-table">
          <thead>
            {tableHeaders.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </thead>
          <tbody>
            {attributes.map((item, index) => {
              return (
                <StatRow
                  key={index}
                  attribute={item.attribute}
                  bonus={item.bonus}
                />
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
}

const tableHeaders = ["Attribute", "Value", "Bonus", "Modifier", "Total"];

export default StatForm;

/* Stretch Goals
 - Highlight class-based main stats (ex. Barbarian would have "strength" class highlighted, styled, etc.)
*/
