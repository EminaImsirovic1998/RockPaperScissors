const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const result = document.getElementById("result");

let comp = 0;
let user = 0;
result.textContent = `Computer - ${comp} : User - ${user}`;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");



const computerArray = ["Rock", "Paper", "Scissors"];

function computerTime() {
let computerRandom = Math.floor(Math.random()*computerArray.length);
computerChoice.textContent = computerArray[computerRandom];
}

rockButton.addEventListener("click", function() {
  userChoice.textContent = "Rock";
  computerTime();
  resultCheck();
});

paperButton.addEventListener("click", function() {
  userChoice.textContent = "Paper";
  computerTime();
  resultCheck();
});

scissorsButton.addEventListener("click", function() {
  userChoice.textContent = "Scissors"
  computerTime();
  resultCheck();
});

function resultCheck() {
  if (userChoice.textContent == 'Rock' && computerChoice.textContent == 'Paper'){
    comp++;
  } else if (userChoice.textContent == "Rock" && computerChoice.textContent == "Scissors") {
    user++;
  } else {
    comp += 0;
    user += 0;
  }

  if (userChoice.textContent == 'Paper' && computerChoice.textContent == 'Rock'){
    user++;
  } else if (userChoice.textContent == "Paper" && computerChoice.textContent == "Scissors") {
    comp++;
  } else {
    comp += 0;
    user += 0;
  }

  if (userChoice.textContent == 'Scissors' && computerChoice.textContent == 'Rock'){
    comp++;
  } else if (userChoice.textContent == "Scissors" && computerChoice.textContent == "Paper") {
    user++;
  } else {
    comp += 0;
    user += 0;
  }

  result.textContent = `Computer - ${comp} : User - ${user}`;

}
