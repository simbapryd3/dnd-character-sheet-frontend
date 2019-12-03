const DICE_URL = "localhost:4/roll";

class DiceRoll {
    static async rollStats () {
        const rawData = await fetch(DICE_URL + "4d6")
        const diceRollArray = await rawData.json();
        diceRollArray.splice(0, 1);
        const statsTotal = diceRollArray.reduce((x, y) => {return x + y});

        return statsTotal;
    }
    static async rollDice (dice) {
        const rawData = await fetch(DICE_URL + dice)
        const diceRollArray = await rawData.json();
        return diceRollArray;
    }
}

module.exports = DiceRoll;

if (require.main === module) {
    const fetch = require('node-fetch');
    async function test() {
        const rawData = await fetch(DICE_URL + "4d6", {method: "GET", mode: "cors"})
        const diceRollArray = await rawData.json();
        diceRollArray.splice(0, 1);
        const statsTotal = diceRollArray.reduce((x, y) => {return x + y});
        console.log(statsTotal);
    }
    test();
}