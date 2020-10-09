let rollDie = document.querySelector("#roll-die");
let rollButton = document.querySelector("#roll-button");
let showButton = document.querySelector("#show-button");
let allRolls = document.querySelector("#all-rolls");
let total = document.querySelector("#total");

let dieRolls = [];

rollButton.addEventListener("click", function () {
  let numberOfRolls = rollDie.value;
  console.log(numberOfRolls);

  let counter = 0;
  while (counter <= numberOfRolls) {
    let diceRolled = Math.floor(Math.random() * 7);
    console.log(diceRolled);
    dieRolls.push(diceRolled);
    console.log(dieRolls);
    counter = counter + 1;
  }
});
