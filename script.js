var highscoreArea = document.querySelector("#highscore-area");

var quizArea = document.querySelector("#quiz-area");
var header = document.querySelector("#header");
var buttonOption1 = document.querySelector("#option1");
var buttonOption2 = document.querySelector("#option2");
var buttonOption3 = document.querySelector("#option3");
var buttonOption4 = document.querySelector("#option4");
var buttonArray = [buttonOption1, buttonOption2, buttonOption3, buttonOption4];
var questionResultArea = document.querySelector("#questions-result-area");

var scoreArea = document.querySelector("#score-area");

// quizBot oraganizes the questions, options for each question, and associated
// truth value. It also contains all the functions needed to navigate the data
// structure. 
var questionIndex = 0;

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
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correct: "option 4"
        },
        {
        question: "why are volcanoes so cool?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correct: "option 3"
        },
        {
        question: "why are dinosaurs so cool?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correct: "option 2"
        },
        {
        question: "why are gators so cool?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correct: "option 4"
        },
        {
        question: "why are sharks so cool?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correct: "option 4"
        },
        {
        question: "why are volcanoes so cool?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correct: "option 2"
        },
        {
        question: "why are dinosaurs so cool?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correct: "option 3"
        }               
    ]   
}   

// Utility function to help in development that console logs an option 
// set given a value targeting a desired index in questionsArray
function consoleOptions (index) {
    console.log(quizBot.questionsArray[index].question);
    console.log(quizBot.questionsArray[index].choices);
    console.log(quizBot.questionsArray[index].correct)
}

// Sets next round of question up by replacing question and response options text
// in quiz area
function setupQuestionRound () {
    var h2 = document.createElement("h2");
    h2.textContent = quizBot.questionsArray[questionIndex].question;
    header.appendChild(h2);
    for (var i = 0; i < buttonArray.length; i++) {
        buttonArray[i].textContent = quizBot.questionsArray[questionIndex].choices[i];
    }
}

function compareAnswer (event) {
    //update score, display correct or wrong, setup next question
}

function startGame () {
    //start timer
    //reset all object parameters to their initial values
    //setupQuestionRound[0]
}

// var answerBtn = document.querySelector(".btn");
// var userAnswer = 
// answerBtn.addEventListener("click", compareAnswer());

consoleOptions(0);
setupQuestionRound();





// Unit 4 Activity 15 has good reference material
// HTML - Pull from bootstrap, use grid system
// Create page elements for:
//     View high scores (upper left corner)
//     Countdown timer (upper right corner)
//     Main area for text (center)
//     Start:
//         show welcome screen with a brief explanation and a start button
//              clicking start starts the game by placing the first question
//         show a series of multiple choice quesitons each with a button
//             clicking any button will advance to the next screen
//             clicking any button will display 'Right' or 'Wrong' near the bottom of the window
//             clicking the wrong answer button reduces the timer count

//         highscore - show player their score and enter initials

// Style 
//     apply styling using bootstrap
//     some custom stlying

// Script
//     Create an object that will house all data and functions needed to solve the problem
//         list of questions objects that contain a list of options and associated truth value
//             each question knows if it is right or wrong



// Functions needed