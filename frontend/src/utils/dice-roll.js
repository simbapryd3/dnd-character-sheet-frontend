const DICE_URL = "http://localhost:4000/roll/";

class DiceRoll {
    static async rollStats () {
        try {
            const rawData = await fetch(DICE_URL + "d6" + "/4")
            const diceRoll = await rawData.json();
            const diceRollArray = diceRoll.roll;
            diceRollArray.splice(0, 1);
            const sumOfRolls = diceRollArray.reduce((x, y) => {return x + y});
            return sumOfRolls;

        } catch (err) {
            return err;
        }
    }
    
    static async rollDice (dice) {
        const rawData = await fetch(DICE_URL + dice)
        const diceRollArray = await rawData.json();
        return diceRollArray;
    }
}

module.exports = DiceRoll;

// Manual Testing via Node
// if (require.main === module) {
//     async function test() {
//         const fetch = require('node-fetch');
//         const rawData = await fetch(DICE_URL + "d6" + "/4", {method: "GET"})
//         const diceRoll = await rawData.json();
//         const diceRollArray = diceRoll.roll; 
//         diceRollArray.splice(0, 1);
//         const sum = diceRollArray.reduce((x, y) => {return x + y});
//         console.log(sum);
//     }
//     test();
// }