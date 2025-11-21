// Sam Meisner Personal Website | NHL Trivia Game
const questions = [
  {
    question: "Which team has won the most Stanley Cups?",
    options: ["Montreal Canadiens", "Toronto Maple Leafs", "Detroit Red Wings", "Boston Bruins"],
    answer: 0
  },
  {
    question: "Who is the NHL's all-time leading scorer?",
    options: ["Wayne Gretzky", "Gordie Howe", "Jaromir Jagr", "Mark Messier"],
    answer: 0
  },
  {
    question: "Which team joined the NHL most recently?",
    options: ["Seattle Kraken", "Vegas Golden Knights", "Winnipeg Jets", "Minnesota Wild"],
    answer: 0
  },
  {
    question: "What is the name of the NHL trophy for best goalie?",
    options: ["Vezina Trophy", "Hart Trophy", "Norris Trophy", "Calder Trophy"],
    answer: 0
  },
  {
    question: "Which player is known as 'The Great One'?",
    options: ["Wayne Gretzky", "Mario Lemieux", "Sidney Crosby", "Bobby Orr"],
    answer: 0
  }
];

let current = 0;
let score = 0;

function renderQuestion() {
  const gameDiv = document.getElementById('trivia-game');
  if (current >= questions.length) {
    gameDiv.innerHTML = `<h3>Game Over!</h3><p>Your score: ${score} / ${questions.length}</p><button onclick="restartGame()">Play Again</button>`;
    return;
  }
  const q = questions[current];
  gameDiv.innerHTML = `
    <h3>Question ${current + 1} of ${questions.length}</h3>
    <p>${q.question}</p>
    <ul class="trivia-options">
      ${q.options.map((opt, i) => `<li><button onclick="checkAnswer(${i})">${opt}</button></li>`).join('')}
    </ul>
    <p>Score: ${score}</p>
  `;
}

function checkAnswer(selected) {
  if (selected === questions[current].answer) {
    score++;
  }
  current++;
  renderQuestion();
}

function restartGame() {
  current = 0;
  score = 0;
  renderQuestion();
}

document.addEventListener('DOMContentLoaded', renderQuestion);
