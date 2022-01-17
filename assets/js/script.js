var myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: '1. strings',
            b: '2. booleans',
            c: '3. alerts',
            d: '4. numbers'
        },
        correctAnswer: 'c'
    },
    {
        question: "The condition in an if/else statement is enclosed with _________.",
        answers: {
            a: '1. quotes',
            b: '2. curly brackets',
            c: '3. parenthesis',
            d: '4. square brackets'
        },
        correctAnswer: 'c'
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        answers: {
            a: '1. numbers and strings',
            b: '2. other arrays',
            c: '3. booleans',
            d: '4. all of the above'
        },
        correctAnswer: 'd'
    },
    {
        question: "String values must be enclosed within _______  when being assigned to variables.",
        answers: {
            a: '1. commas',
            b: '2. curly brackets',
            c: '3. quotes',
            d: '4. parenthesis'
        },
        correctAnswer: 'c'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: '1. JavaScript',
            b: '2. terminal/bash',
            c: '3. for loops',
            d: '4. console.log'
        },
        correctAnswer: 'd'
    },
];

setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var startButton = document.getElementById('start');

var buttonEl = document.querySelector("#start-quiz");

generateQuiz(myQuestions, quizContainer, resultsContainer, startButton) 

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // code will go here
    }

    function showResults(questions, quizContainer, resultsContainer) {
        // code will go here
    }

    // show the questions
    showQuestions(questions, quizContainer);

    // when user clicks submit, show results
    startButton.onClick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
} 