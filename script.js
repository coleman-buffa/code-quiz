var highscoreArea = document.querySelector("#highscore-area");

var quizArea = document.querySelector("#quiz-area");
var header = document.querySelector("#header");
var h2 = document.querySelector("#h2");
var welcomeP = document.querySelector("#welcome-instructions");
var scoreEntry = document.querySelector("#score-entry");
var startButton = document.querySelector("#start-game");

var buttonArea = document.querySelector("#answer-button-area");
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
// in quiz area. If this function was called by startGame() it will show the buttons
// needed to play the game.
function setupQuestionRound () {
    buttonArea.classList.remove("hide");
    h2.textContent = quizBot.questionsArray[qIndex].question;
    for (var i = 0; i < buttonArray.length; i++) {
        buttonArray[i].textContent = quizBot.questionsArray[qIndex].choices[i];
    }

}

function compareAnswer (event) {    
    event.preventDefault();
    if (event.target.textContent === quizBot.questionsArray[qIndex].correct) {
        resultP.textContent = "Correct"
        questionResultArea.classList.remove("hide");
    } else {
        resultP.textContent = "Incorrect"
        questionResultArea.classList.remove("hide");
    }
   setTimeout(function() {
       questionResultArea.classList.add("hide");
   }, 1000);    
    
    if (qIndex === quizBot.questionsArray.length - 1) {
        endGame();
        return;
    }
    qIndex++;
    setupQuestionRound();
}


function endGame() {
    h2.textContent = "Thank you for playing!";
    welcomeP.textContent = "Your final score is " + scoreTimer;
}

function setupGame() {
    quizArea.classList.remove("hide");
    header.classList.remove("hide");
    h2.classList.remove("hide");
    welcomeP.classList.remove("hide");
    buttonArea.classList.remove("hide");
    setupQuestionRound();
}

function setupWelcome() {
    quizArea.classList.remove("hide");
    header.classList.remove("hide");
    h2.classList.remove("hide");
    welcomeP.classList.remove("hide");
    startButton.classList.remove("hide");
}

function setupScore() {
    quizArea.classList.remove("hide");    
    header.classList.remove("hide");
    h2.classList.remove("hide");
    welcomeP.classList.remove("hide");
    scoreEntry.classList.remove("hide");
}

function strikeAll() {
    quizArea.classList.add("hide");
    header.classList.add("hide");
    h2.classList.add("hide");
    welcomeP.classList.add("hide");
    scoreEntry.classList.add("hide");
    startButton.classList.add("hide");
    buttonArea.classList.add("hide");
    buttonOption1.classList.add("hide");
    buttonOption2.classList.add("hide");
    buttonOption3.classList.add("hide");
    buttonOption4.classList.add("hide");
    questionResultArea.classList.add("hide");
    scoreArea.classList.add("hide");
}


function startGame () {
    // Show all elements associated with the start of the game
        // h2 with welcome text, p tag with some instructions, and a button that starts the game when clicked
    //start timer
    //reset all object parameters to their initial values
    //setupQuestionRound[0]
}

strikeAll();
setupWelcome();
startButton.addEventListener("click", setupGame);

//problem spotted - this implementation will apply to all buttons that have btn class
var answerBtn = document.querySelectorAll(".btn");
answerBtn.forEach(answerBtn => {
    answerBtn.addEventListener("click", compareAnswer);
});

