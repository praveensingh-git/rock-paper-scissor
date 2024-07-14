let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

var uScore=0;
var cScore=0;


const generateCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  const randomidx = Math.floor(Math.random() * 3);
  return options[randomidx];
};


const drawGame=()=>{
    console.log("game draw");
    msg.innerText="Game Draw!";
    msg.style.backgroundColor="#111100"
}


const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin === true) {
    console.log("You Win!");
    msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    uScore++;
    userScore.innerHTML=uScore;
  } else {
    console.log("Computer Win!");
    msg.innerText=`You Lose!, ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
    cScore++;
    compScore.innerText=cScore;
  }

};



const playGame = (userChoice) => {
  console.log("userChoice=", userChoice);
  const compChoice = generateCompChoice();
  console.log("computerChoice=", compChoice);

  if (userChoice === compChoice) {
    drawGame();
   
  } else {
    userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper " ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
  
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // selecting users choice through id
    playGame(userChoice);
  });
});
