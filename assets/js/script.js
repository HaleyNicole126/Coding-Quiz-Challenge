
var myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            1: 'strings',
            2: 'booleans',
            3: 'alerts',
            4: 'numbers'
        },
        correctAnswer: '3'
    },
    {
        question: "The condition in an if/else statement is enclosed with _________.",
        answers: {
            1: 'quotes',
            2: 'curly brackets',
            3: 'parenthesis',
            4: 'square brackets'
        },
        correctAnswer: '3'
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        answers: {
            1: 'numbers and strings',
            2: 'other arrays',
            3: 'booleans',
            4: 'all of the above'
        },
        correctAnswer: '4'
    },
    {
        question: "String values must be enclosed within _______  when being assigned to variables.",
        answers: {
            1: 'commas',
            2: 'curly brackets',
            3: 'quotes',
            4: 'parenthesis'
        },
        correctAnswer: '3'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: 'JavaScript',
            2: 'terminal/bash',
            3: 'for loops',
            4: 'console.log'
        },
        correctAnswer: '4'
    },
];

// var questionIndex = -1 // not started
// function nextQuestion() {
//     document.body.innerHTML = '';
//     ++questionIndex;
//         document.write(myQuestions[questionIndex].question + "<br />");
//             for (var j=0; j < myQuestions[questionIndex].answers.length; j++) {
//                 document.write("<input type=radio id=myRadio name=radAnswer>" + myQuestions[questionIndex].answers[j] + "<br />");
//             }
//         if (questionIndex < (myQuestions.length-1)) {
//             var nextButton = document.createElement("input");
//             nextButton.type = "button";
//             nextButton.value = "Next question";
//             nextButton.addEventListener('click', nextQuestion);
//             document.body.appendChild(nextButton);
//         }
// };

// nextQuestion();



var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var startButton = document.getElementById('start');

var buttonEl = document.querySelector("#start-quiz");

var counter = 75
// function for timer 
function startTimer(){
    
    var countdown = function() {
        document.getElementById("timer").innerHTML = "Time: " + counter.toLocaleString();
        counter--;
        if(counter===0) {
            alert("Game Over!");
            clearInterval(counter);
        };
    };
    var startCountdown = setInterval(countdown, 1000);
};


var lastQuestion = myQuestions.length - 1;

let runningQuestion = 0;

function renderQuestion(){
    let q = myQuestions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    op1.innerHTML = q.answers[1];
    op2.innerHTML = q.answers[2];
    op3.innerHTML = q.answers[3];
    op4.innerHTML = q.answers[4];
}

buttonEl.addEventListener("click", startQuiz);

// start quiz
function startQuiz(){
    quizContainer.style.display = "block";
    renderQuestion();
    // start the timer when the quiz starts
    startTimer();
   
}

// check answer
function checkAnswer(){
    var answer = document.getElementsByClassName("answer").value;
    if(answer == myQuestions[runningQuestion].correctAnswer) {
        answerIsCorrect();
    }else{
        // answer is wrong
        // subtract 10s 
        answerIsWrong();
    }
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(counter);

    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById("results") = "Correct!";
}

// answer is Wrong
function answerIsWrong(){
    counter -10;
    document.getElementById("results").innerHTML = "Wrong!";
}
