var startBtn = document.getElementById("close");
var quiz = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var choiceOne = document.getElementById("A");
var choiceTwo = document.getElementById("B");
var choiceThree = document.getElementById("C");
var choiceFour = document.getElementById("D");
var counter = document.getElementById("counter");
var score = document.getElementById("finalScore");
var correctAnswer = document.getElementById("correct");
var wrongAnswer = document.getElementById("wrong");

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choiceOne: "strings",
    choiceTwo: "booleans",
    choiceThree: "alerts",
    choiceFour: "numbers",
    correct: "D",
  },
  {
    question: "The condition in an if/else statement is enclosed with ___.",
    choiceOne: "quotes",
    choiceTwo: "curly brackets",
    choiceThree: "parentheses",
    choiceFour: "square brackets",
    correct: "B",
  },
  {
    question: "Arrays in JS can be used to store __.",
    choiceOne: "numbers and strings",
    choiceTwo: "other arrays",
    choiceThree: "booleans",
    choiceFour: "all of the above",
    correct: "D",
  },
  {
    question:
      "String values must be enclosed within ___ when being assigned to variables.",
    choiceOne: "commas",
    choiceTwo: "curly brackets",
    choiceThree: "quotes",
    choiceFour: "parentheses",
    correct: "C",
  },
];

var questionIn = questions.length - 1;
var currentQuestion = 0;
var questionT = 60;
var count = 60;

function countDown() {
  if (count <= questionT) {
    counter.innerHTML = count;
    count--;
  } /* else if (count = 0); {
    scoreFinal();
  } */
}

// calls start of quiz. hiding start btn then presenting questions from array.

var timeStart;
function startQuiz() {
  startBtn.classList.add("hide");
  countDown();
  timeStart = setInterval(countDown, 1000);
  showQ();
  quiz.classList.remove("hide");
}

// function pulls questions into HTML DOM to render the question
function showQ() {
  var q = questions[currentQuestion];
  question.innerHTML = "<p>" + q.question + "<p>";
  choiceOne.innerHTML = q.choiceOne;
  choiceTwo.innerHTML = q.choiceTwo;
  choiceThree.innerHTML = q.choiceThree;
  choiceFour.innerHTML = q.choiceFour;
}

function checkAnswer(answer) {
  if (questions[currentQuestion].correct == answer) {
    answerCorrect();
    currentQuestion++;
    showQ();
  } else if (questions[currentQuestion].correct != answer) {
    answerWrong();
  } else {
      return;
  }
}

function answerCorrect() {
  correctAnswer.classList.remove("hide");
}
function answerWrong() {
    wrongAnswer.classList.remove("hide");
    }

function scoreFinal() {
  quiz.classList.add("hide");
  score.classList.remove("hide");
}

startBtn.addEventListener("click", startQuiz);
