var startBtn = document.getElementById("start-button");
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
  ];

var questionIn = questions.length - 1;
var currentQuestion = 0;
var questionT = 60;
var count = 60;

function countDown() {
  if (count <= questionT) {
    counter.innerHTML = count;
    count--;
  } else {
    count = 0;
    clearInterval();
  }
}

// calls start of quiz. hiding start btn then presenting questions from array.

var timeStart;
function startQuiz() {
  startBtn.classList.add("hide");
  countDown();
  timeStart = setInterval(countDown,1000);
  showQ();
  quiz.classList.remove("hide");
}
// function is grabbing question from array
function newQ() {
  showQ([currentQ]);
}

// function pulls questions into HTML DOM
function showQ() {
  var q = questions[currentQuestion];
  question.innerHTML = "<p>" + q.question + "<p>";
  choiceOne.innerHTML = q.choiceOne;
  choiceTwo.innerHTML = q.choiceTwo;
  choiceThree.innerHTML = q.choiceThree;
  choiceFour.innerHTML = q.choiceFour;
}
function answerSel(answer) {
  if (questions[currentQuestion].correct == answer) {
    answerCorrect();
  } else {
    answerWrong();
  }
  if (currentQuestion < questionIn) {
    currentQuestion++;
  } else {
    clearInterval();
  }
}

function answerCorrect() {
  document
    .getElementById(currentQuestion)
    .correctAnswer.classList.remove("hide");
}
function answerWrong() {
  document.getElementById(currentQuestion).wrongAnswer.classList.remove("hide");
}

function scoreFinal(){
    score.style.display="block";
    
}


startBtn.addEventListener("click", startQuiz);

