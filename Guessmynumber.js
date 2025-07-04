
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const numberInput = document.getElementById("number");
const message = document.querySelector(".right-panel h4");
const scoreDisplay = document.querySelector(".right-panel h3");
const highScoreDisplay = document.querySelectorAll(".right-panel h4")[2];
const questionBox = document.querySelector(".question-box");

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log("Secret:", secretNumber); 

checkBtn.addEventListener("click", () => {
  const guess = Number(numberInput.value);

  if (!guess) {
    message.textContent = "⛔ Enter a number!";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct Number!";
    document.body.style.backgroundColor = "green";
    questionBox.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = `High score: ${highScore}`;
    }
  } else {
    if (score > 1) {
      message.textContent = guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      score--;
      scoreDisplay.textContent = `Score: ${score}`;
      
      message.textContent = "💥 You lost the game!";
      scoreDisplay.textContent = "Score: 0";
    }
  }
});

againBtn.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  message.textContent = "Start Guessing...";
  scoreDisplay.textContent = "Score: 20";
  numberInput.value = "";
  questionBox.textContent = "?";
  document.body.style.backgroundColor = "#fff"; 
});


