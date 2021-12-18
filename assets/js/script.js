// HTML Variables
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions")
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score")
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// Quiz Questions
var quizQuestions = [{
    question: "Which method would you use to find an ID element?",
    choiceA: "getElementsById()",
    choiceB: "getElementbyId()",
    choiceC: "getElementById()",
    choiceD: "getElementsById()",
    correctAnswer: "c" },
{
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "class",
    choiceB: "href",
    choiceC: "index",
    choiceD: "src",
    correctAnswer: "d" },
{
    question: "The first index of an Array is?",
    choiceA: "5",
    choiceB: "2",
    choiceC: "1",
    choiceD: "0",
    correctAnswer: "d" },
{
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Desktop Oriented Mode",
    choiceC: "Data Object Model",
    choiceD: "Display Object Management",
    correctAnswer: "a" },
{
    question: "Commonly used data types DO NOT include:",
    choiceA: "Booleans",
    choiceB: "Strings",
    choiceC: "Alerts",
    choiceD: "Numbers",
    correctAnswer: "c" },
{
    question: "The condition of an if/else statement is enclosed in?",
    choiceA: "Curly brackets",
    choiceB: "Quotes",
    choiceC: "Square brackets",
    choiceD: "Parentheses",
    correctAnswer: "d" },
{
    question: "Where in an HTML file should a Script tag be placed?",
    choiceA: "Inside and on the bottom of the Body Element",
    choiceB: "Outside the HTML element",
    choiceC: "Inside of the Header Element",
    choiceD: "The placement of the script tag does not matter",
    correctAnswer: "a" },
{
    question: "Which of the following is NOT a way to declare a variable?",
    choiceA: "var",
    choiceB: "set",
    choiceC: "let",
    choiceD: "const",
    correctAnswer: "b" },
];

//Additional Variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;

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
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time Left: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    quizBody.style.display = "block";
}

// Show Score Function
function showScore() {
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

// Submit Button. The high score function will save and stringify the array of high scores saved to local storage.
submitScoreBtn.addEventListener("click", function highscore() {
    if(highscoreInputName.value === "") {
        alert("Initials cannot be blank");
        return false;
    } else {
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };

        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";

        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();
    }
});

// Generate High Scores Function
function generateHighscores() {
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i = 0; i < highscores.length; i++) {
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
}

// Show High Score Function

//Check Answer Function
function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        generateQuizQuestion();
    } else {
        showScore();
    }
}

// This button will start the quiz
startQuizButton.addEventListener("click", startQuiz);