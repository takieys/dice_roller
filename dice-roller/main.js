let rollDie = document.querySelector("#roll-die");
let rollButton = document.querySelector("#roll-button");
let showButton = document.querySelector("#show-button");
let allRolls = document.querySelector("#all-rolls");
let total = document.querySelector("#total");
let resetButton = document.querySelector("#reset");

let dieRolls = [];

rollButton.addEventListener("click", function () {
  let numberOfRolls = rollDie.value;
  console.log(numberOfRolls);

  let counter = 0;
  while (counter < numberOfRolls) {
    let diceRolled = Math.floor(Math.random() * 6) + 1;
    console.log(diceRolled);
    dieRolls.push(diceRolled);
    console.log(dieRolls);

    counter = counter + 1;
  }
  var sum = dieRolls.reduce(function (x, y) {
    return x + y;
  }, 0);
  console.log(sum);
  total.innerHTML += sum;
});

showButton.addEventListener("click", function () {
  let count = 0;
  while (count < dieRolls.length) {
    allRolls.innerHTML += "<li>" + dieRolls[count] + "</li>";
    count++;
  }
});

resetButton.addEventListener("click", function () {
  dieRolls = [];
  total.innerHTML = "";
  allRolls.innerHTML = "";
});
