// HTML Variables
var gameoverDiv = document.getElementById("gameover")
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var buttonA = document.getElementById("a");
var buttonA = document.getElementById("b");
var buttonA = document.getElementById("c");
var buttonA = document.getElementById("d");

// Quiz Questions
var quizQuestions = [{
    question: "Which method would you use to find an ID element?",
    ChoiceA: "getElementsById()",
    ChoiceB: "getElementbyId()",
    ChoiceC: "getElementByID()",
    ChoiceD: "getElementsById()",
    correctAnswer: "b" },
{
    
}
]

// Function to generate the Quiz
function generateQuizQuestion() {
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex) {
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// Start Quiz Function
function startQuiz() {
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    // Timer will go here

}

// This button will start the quiz
startQuizButton.addEventListener("click", startQuiz);