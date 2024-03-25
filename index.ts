#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);


const answere = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Pleas guess a number between 1-6:",
  },
]);
if (answere.userGuessedNumber === randomNumber) {
  console.log("Congtratulation! you guessed right number.");
} else {
  console.log("You guessed wrong number");
}
