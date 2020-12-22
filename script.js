var highscoreArea = document.querySelector("#highscore-area");

var quizArea = document.querySelector("#quiz-area");
var header = document.querySelector("#header");
var h2 = document.querySelector("#h2");
var buttonOption1 = document.querySelector("#option1");
var buttonOption2 = document.querySelector("#option2");
var buttonOption3 = document.querySelector("#option3");
var buttonOption4 = document.querySelector("#option4");
var buttonArray = [buttonOption1, buttonOption2, buttonOption3, buttonOption4];
var questionResultArea = document.querySelector("#questions-result-area");
var resultHR = questionResultArea.firstChild;
var resultP = questionResultArea.lastChild;

var scoreArea = document.querySelector("#score-area");

var qIndex = 0;

// quizBot oraganizes the questions, options for each question, and associated
// truth value. It also contains all the functions needed to navigate the data
// structure. 


var quizBot = {
    scoreTimer: 0,
    questionsArray: [         
        {
        question: "why are gators so cool?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correct: "option 1"
        },
        {
        question: "why are sharks so cool?",
        choices: ["option 5", "option 6", "option 7", "option 8"],
        correct: "option 4"
        },
        {
        question: "why are volcanoes so cool?",
        choices: ["option 9", "option 10", "option 11", "option 12"],
        correct: "option 3"
        },
        {
        question: "why are dinosaurs so cool?",
        choices: ["option 13", "option 14", "option 15", "option 16"],
        correct: "option 2"
        },
        {
        question: "why are gators so cool?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correct: "option 4"
        },
        {
        question: "why are sharks so cool?",
        choices: ["option 5", "option 6", "option 7", "option 8"],
        correct: "option 4"
        },
        {
        question: "why are volcanoes so cool?",
        choices: ["option 9", "option 10", "option 11", "option 12"],
        correct: "option 2"
        },
        {
        question: "why are dinosaurs so cool?",
        choices: ["option 13", "option 14", "option 15", "option 16"],
        correct: "option 3"
        }               
    ]   
}   

// Utility function to help in development that console logs an option 
// set given a value targeting a desired index in questionsArray
function consoleOptions (index) {
    console.log(quizBot.questionsArray[index].question);
    console.log(quizBot.questionsArray[index].choices);
    console.log(quizBot.questionsArray[index].correct);
}

// Sets next round of question up by replacing question and response options text
// in quiz area
function setupQuestionRound () {
    h2.textContent = quizBot.questionsArray[qIndex].question;
    for (var i = 0; i < buttonArray.length; i++) {
        buttonArray[i].textContent = quizBot.questionsArray[qIndex].choices[i];
    }

}

function compareAnswer (event) {    
    event.preventDefault();
    if (event.target.textContent === quizBot.questionsArray[qIndex].correct) {
        console.log("got the correct answer");
        resultP.textContent = "Correct"
        questionResultArea.classList.remove("hide");
    } else {
        console.log("got the wrong answer");
        resultP.textContent = "Incorrect"
        questionResultArea.classList.remove("hide");
    //Timer function adding hide back to answers

    }
    qIndex++
    if (qIndex === quizBot.questionsArray.length) {
        endGame();
    }
    setupQuestionRound();
}

function 

function startGame () {
    //start timer
    //reset all object parameters to their initial values
    //setupQuestionRound[0]
}

var answerBtn = document.querySelectorAll(".btn");
answerBtn.forEach(answerBtn => {
    answerBtn.addEventListener("click", compareAnswer);
});

consoleOptions(0);
setupQuestionRound();