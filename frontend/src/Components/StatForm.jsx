import React, { useState, useEffect } from "react";
import useFetchGet from "../utils/utils";
import ModifierCalculator from "../utils/modifier-calculator";
import DiceRoll from "../utils/dice-roll";
import "../styles/stat.css";

// Dice Rolls
const DiceRow = ({ diceRollArray = [], diceSelectionArray }) => {
  return (
    <table className="diceroll">
      <tbody>
        <tr>
          {diceRollArray.map((roll, index) =>
            diceSelectionArray[index] ? (
              <td className="die-value selection" key={index}>
                {roll}
              </td>
            ) : (
              <td className="die-value" key={index}>
                {roll}
              </td>
            )
          )}
        </tr>
      </tbody>
    </table>
  );
};

// function styleRolledDiceSelection() {
//   const diceRollArray = document.querySelectorAll(".die-value");
//   const statArray = document.querySelectorAll(".stat-value");
//   const diceRolls = [];
//   diceRollArray.forEach((item, index) => {
//     diceRolls.push(item.textContent);
//   });

//   let diceIndex = [];
//   for (let i = 0; i < diceRollArray.length; i++) {
//     switch (diceRollArray[i].textContent) {
//       case dieValue:
//         diceIndex.push(dieValue);
//         break;
//       default:
//         break;
//     }
//   }
// }

// Row of Stats in StatForm Table
const StatRow = ({ attribute, bonus, diceRollArray }) => {
  const [modifier, setModifier] = useState(0);
  const [stat, setStat] = useState(0);
  const [total, setTotal] = useState(0);

  function handleChange(event) {
    const statValue = event.target.value;
    setStat(statValue);
    const diceRollList = document.querySelector(".die-value");
    diceRollList.map((die, index) => {
      let selected;
    });
  }

  useEffect(() => {
    const total = Number(stat) + Number(bonus);
    const mod = ModifierCalculator.calculateModifier(total);
    setModifier(mod);
    setTotal(total);
  }, [stat, bonus]);

  return (
    <tr className="stat-table_row">
      <th>{attribute}</th>
      <td>
        <label className="attribute-value">
          <input
            type="number"
            className="stat-value"
            name={attribute}
            onChange={handleChange}
            defaultValue="0"
          ></input>
        </label>
      </td>
      <td>
        <label className="bonus-value">{bonus}</label>
      </td>
      <td>
        <label className="total-value">{total}</label>
      </td>
      <td>
        <label className="modifier-value">{modifier}</label>
      </td>
    </tr>
  );
};

// Character stat form
function StatForm(props) {
  const [statRolls, setStatRolls] = useState([]);
  const [bonusArray, setBonusArray] = useState([]);
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
      props.race && setBonusArray(props.race);
    }
    getRolls();
  }, [props.race]);

  return (
    <div className="statform-wrapper">
      <DiceRow diceRollArray={statRolls} />
      <form className="statform">
        <table className="stat-table">
          <thead>
            <tr>
              {tableHeaders.map((i, index) => (
                <th key={index}>{i}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {attributes.map((item, index) => {
              return (
                <StatRow
                  key={index}
                  attribute={item.attribute}
                  bonus={item.bonus}
                  diceRollArray={statRolls}
                />
              );
            })}
          </tbody>
        </table>
      </form>
      <button onClick={props.onclick} value="7">
        Next
      </button>
      <button onClick={props.onclick} value="6">
        Back
      </button>
    </div>
  );
}

const tableHeaders = ["Attribute", "Value", "Bonus", "Total", "Modifier"];

export default StatForm;
