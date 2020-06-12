var startBtn = document.getElementById("start-button")
var questionBox = document.getElementById("box-cont")
var questionEl = document.getElementById("questions")
var choicesBox = document.getElementById("choices")

var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        choices: {
            1: 'strings',
            2: 'booleans',
            3: 'alerts',
            4: 'numbers',
        }

    }
]


// calls start of quiz. hiding start btn then presenting questions from array.
function startQuiz() {
    startBtn.classList.add('hide')

    currentQ = 0
    questionBox.classList.remove('hide')
    newQ()


}
// function is grabbing question from array
function newQ() {
    showQ([currentQ])
}

// function pulls questions into HTML DOM
function showQ(question) {
    questionEl.innerText = question.question

}

function answerSel() {



}






startBtn.addEventListener("click", startQuiz)











