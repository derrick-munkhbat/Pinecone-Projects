// player-iin move-iig avah
// computer-iin move-ig avah


const playerChoiceElement = document.querySelector("#playerChoise");
const computerChoiceElement = document.querySelector("#computerChoise");
const moveButtons = document.querySelectorAll('.move');

let playerScore = 0;
let computerScore = 0;

let winnerScore = 3;

const choices = ["rock", "paper", "scissors"];

function playgame(move) {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];


  playerChoiceElement.innerText = move;
  computerChoiceElement.innerText = computerChoice;

  if (move === computerChoice){
    console.log("draw")
    return;
  }

  if (
      ('rock' === move && 'scissors === computerChoice') ||
      ('paper' === move && 'rock === computerChoice') ||
      ('scissors' === move && 'paper === computerChoice')
  ){
  playerScore++;
  console.log("player win", playerScore)
  }else{
  computerScore++;
  console.log("computer win", computerScore)
  } 
  checkEndGame();
}

// function checkGameEnd (){
//   if (playerScore === winnerScore || computerScore === winnerScore){
//     for (let i=0; i<moveButtons.length; i++){
//       moveButtons[i].disabled = true;
//     }
//   }
// }

function logger(item){
  
}

moveButtons.forEach(logger);















