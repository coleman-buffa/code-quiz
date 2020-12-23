var highscoreArea = document.querySelector("#highscore-area");

var quizArea = document.querySelector("#quiz-area");
var header = document.querySelector("#header");
var h2 = document.querySelector("#h2");
var welcomeP = document.querySelector("#welcome-instructions");
var scoreEntry = document.querySelector("#score-entry");
var startButton = document.querySelector("#start-game");
var scoreEntry = document.querySelector("#submitScore");
var scoreInputField = document.querySelector("#score-input")
var playAgainBtn = document.querySelector("#play-again");
var scoreResetBtn = document.querySelector("#reset-scoreboard");
var scoreboardNameField = document.querySelector("#scoreboard-entry");

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
var scoreTimer;
var interval;
var scoreBoard = [];

// questionArray oraganizes the questions, options for each question, and 
// associated truth value. It also contains all the functions needed to 
// navigate the data structure. 

var questionsArray = [
    {
        question: "why are aligators so cool?",
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
        question: "why are aligators so cool?",
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

// Utility function to help in development that console logs an option 
// set given a value targeting a desired index in questionsArray
function consoleOptions(index) {
    console.log(questionsArray[index].question);
    console.log(questionsArray[index].choices);
    console.log(questionsArray[index].correct);
}

// Sets next round of question up by replacing question and response options text
// in quiz area. If this function was called by startGame() it will show the buttons
// needed to play the game.
function setupQuestionRound() {
    buttonArea.classList.remove("hide");
    h2.textContent = questionsArray[qIndex].question;
    for (var i = 0; i < buttonArray.length; i++) {
        buttonArray[i].textContent = questionsArray[qIndex].choices[i];
    }
}

function compareAnswer(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.textContent === questionsArray[qIndex].correct) {
        resultP.textContent = "Correct"
        questionResultArea.classList.remove("hide");
    } else {
        resultP.textContent = "Incorrect"
        questionResultArea.classList.remove("hide");
        scoreTimer = scoreTimer - 5;
    }
    setTimeout(function () {
        questionResultArea.classList.add("hide");
    }, 1000);

    if (qIndex === questionsArray.length - 1 || scoreTimer === 0 || scoreTimer < 0) {
        setupScore();
        scoreArea.classList.add("hide");
        stopTimer();
        return;
    }
    qIndex++;
    setupQuestionRound();
}

function gotoScorePage() {
    strikeAll();
    // need h2, custom made score list from local storage, play again button, clear high score button
    h2.classList.remove("hide");
    scoreEntry.textContent = "Play again";
    startButton.textContent = "Clear high scores";
    scoreEntry.classList.remove("hide");
    startButton.classList.remove("hide");

}

function submitScore(event) {
    event.preventDefault();
    event.stopPropagation();
    var userName = scoreInputField.value.trim();
    scoreBoard.push({ name: userName, score: scoreTimer });
    localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
    gotoScorePage();
}

function setupGame() {
    strikeAll();
    quizArea.classList.remove("hide");
    header.classList.remove("hide");
    h2.classList.remove("hide");
    buttonArea.classList.remove("hide");
    buttonOption1.classList.remove("hide");
    buttonOption2.classList.remove("hide");
    buttonOption3.classList.remove("hide");
    buttonOption4.classList.remove("hide");
    scoreArea.classList.remove("hide");
    setupQuestionRound();
    scoreTimer = 75;
    startTimer();

    //call function that starts setInterval attached to a global variable
}

function startTimer() {
    interval = setInterval(function () {
        scoreArea.innerHTML = `<p>Time left : ${scoreTimer}</p>`;
        scoreTimer--;
        if (scoreTimer === 0 || scoreTimer < 0) {
            scoreArea.classList.add("hide");
            setupScore();
            stopTimer();
            return;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function setupWelcome() {
    strikeAll();
    quizArea.classList.remove("hide");
    header.classList.remove("hide");
    h2.classList.remove("hide");
    welcomeP.classList.remove("hide");
    startButton.classList.remove("hide");
    h2.textContent = "Test your might";
    welcomeP.textContent = "Test your knowledge by answering the following questions!";
    startButton.textContent = "Begin your Trial";
}

function setupScore() {
    strikeAll();
    quizArea.classList.remove("hide");
    header.classList.remove("hide");
    h2.classList.remove("hide");
    welcomeP.classList.remove("hide");
    scoreEntry.classList.remove("hide");
    scoreboardNameField.classList.remove("hide");
    h2.textContent = "Thank you for playing!";
    if (scoreTimer <= 0) {
        welcomeP.textContent = "Your final score is: " + 0;
        scoreTimer = 0;
    } else {
        welcomeP.textContent = "Your final score is: " + scoreTimer;
    }
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
    scoreEntry.classList.add("hide");
    playAgainBtn.classList.add("hide");
    scoreResetBtn.classList.add("hide");
    scoreboardNameField.classList.add("hide");
}

strikeAll();
setupWelcome();
startButton.addEventListener("click", setupGame);

var answerBtn = document.querySelectorAll(".answer-button");
answerBtn.forEach(answerBtn => {
    answerBtn.addEventListener("click", compareAnswer);
});

scoreEntry.addEventListener("click", submitScore);
playAgainBtn.addEventListener("click", setupWelcome);
scoreResetBtn.addEventListener("click", resetScoreboard);

//during endgame set local storage
//scoreboard = {name: "blah", score: 44}