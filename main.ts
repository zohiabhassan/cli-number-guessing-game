#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    message: "pleas guess a number:",
    type: "number",
    name: "userGussedNumber",
  },
]);

if (answer.userGussedNumber === randomNumber) {
  console.log("congtratulations! you choose right number");
} else {
  console.log("you choose wrong number!");
}
