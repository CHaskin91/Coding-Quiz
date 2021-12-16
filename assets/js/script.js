// HTML Variables
var quizBody = document.getElementById("quiz");
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
    ChoiceC: "getElementById()",
    ChoiceD: "getElementsById()",
    correctAnswer: "c" },
{
    question: "What HTML attribute references an external JavaScript file?",
    ChoiceA: "class",
    ChoiceB: "href",
    ChoiceC: "index",
    ChoiceD: "src",
    correctAnswer: "d" },
{
    question: "The first index of an Array is?",
    ChoiceA: "5",
    ChoiceB: "2",
    ChoiceC: "1",
    ChoiceD: "0",
    correctAnswer: "d" },
{
    question: "What does DOM stand for?",
    ChoiceA: "Document Object Model",
    ChoiceB: "Desktop Oriented Mode",
    ChoiceC: "Data Object Model",
    ChoiceD: "Display Object Management",
    correctAnswer: "a" },
{
    question: "Commonly used data types DO NOT include:",
    ChoiceA: "Booleans",
    ChoiceB: "Strings",
    ChoiceC: "Alerts",
    ChoiceD: "Numbers",
    correctAnswer: "c" },
{
    question: "The condition of an if/else statement is enclosed in?",
    ChoiceA: "Curly brackets",
    ChoiceB: "Quotes",
    ChoiceC: "Square brackets",
    ChoiceD: "Parentheses",
    correctAnswer: "d" },
{
    question: "Where in an HTML file should a Script tag be placed?",
    ChoiceA: "Inside and on the bottom of the Body Element",
    ChoiceB: "Outside the HTML element",
    ChoiceC: "Inside of the Header Element",
    ChoiceD: "The placement of the script tag does not matter",
    correctAnswer: "a" },
{
    question: "Which of the following is NOT a way to declare a variable?",
    ChoiceA: "var",
    ChoiceB: "set",
    ChoiceC: "let",
    ChoiceD: "const",
    correctAnswer: "b" },
];

//Additional Variables
var currentQuestionIndex = 0;
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

}

// This button will start the quiz
startQuizButton.addEventListener("click", startQuiz);