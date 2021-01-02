//List of DOM pointers useful for making page manupulations.
var highscoreArea = document.querySelector("#highscore-area");

var quizArea = document.querySelector("#quiz-area");
var header = document.querySelector("#header");
var h2 = document.querySelector("#h2");
var welcomeP = document.querySelector("#welcome-instructions");
var scoreEntry = document.querySelector("#score-entry");
var startButton = document.querySelector("#start-game");
var scoreEntry = document.querySelector("#submitScore");
var scoreInputField = document.querySelector("#score-input")
var playAgainBtn = document.querySelector("#play-again")
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
// associated truth value.

var questionsArray = [
    {
        question: "When did the dinosaurs go extinct?",
        choices: ["65 million years ago", "225 million years ago", "2 million years ago", "6000 years ago"],
        correct: "65 million years ago"
    },
    {
        question: "What kind of volcanoes are the Hawaiian islands?",
        choices: ["Stratovolcano", "Mid-Ocean ridges", "Caldera-complex volcano", "Shield volcano"],
        correct: "Shield volcano"
    },
    {
        question: "What is the rock name of metamorphosed granite?",
        choices: ["Conglomerate", "Slate", "Gneiss", "Schist"],
        correct: "Gneiss"
    },
    {
        question: "What is most common mineral in the crust of the earth?",
        choices: ["Quartz", "Feldspars", "Micas", "Olivine"],
        correct: "Feldspars"
    },
    {
        question: "Which fault arrangement produces the biggest earthquakes?",
        choices: ["Strike-slip", "Rift zones", "Normal fault", "Thrust fault"],
        correct: "Thrust fault"
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

//Compares the answer the user just selected to the correct value in the question
//array. Regardless of how they answer they will be greeted with an appropriate response
//that stays on the screen for 1 second. If any of the game over conditions are met the 
//score timer clock is stopped and the user is moved to the game over screen.
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
        setupGameOver();
        scoreArea.classList.add("hide");
        stopTimer();
        return;
    }
    qIndex++;
    setupQuestionRound();
}

//Empties the scoreboard in local storage
function resetScoreboard(event) {
    event.preventDefault();
    scoreBoard = [];
    localStorage.setItem("scoreboard", JSON.stringify(scoreBoard));    
}
// I can't figure out why elements in this function will not display. This function
// was intended to create the scoreboard viewing area with the option to reset it
// or play the quiz game again.
function gotoScoreBoard() {
    strikeAll();
    h2.textContent = "Scoreboard";
    h2.classList.remove("hide");
    header.classList.remove("hide");
    quizArea.classList.remove("hide");
    //scoreboard built from storage goes here
    playAgainBtn.textContent = "Play again";
    scoreResetBtn.textContent = "Reset scoreboard";  
    playAgainBtn.classList.remove("hide");
    scoreResetBtn.classList.remove("hide");
}

// Inputs the user's score and name to local storage.
function submitScore(event) {
    event.preventDefault();
    var userName = scoreInputField.value.trim();
    scoreBoard.push({ name: userName, score: scoreTimer });
    localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
    gotoScoreBoard();
}

//Setup elements needed to play the game and initializes the score timer
//to 75. Once the startTimer function has been called the scoreTimer
//variable will start decrementing every second.
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
}

//Starts a timer that decrements the value of scoreTimer every second. The
//setInterval timer is set to a global variable so it can be called from several
//different places.
function startTimer() {
    interval = setInterval(function () {
        scoreArea.innerHTML = `<p>Time left : ${scoreTimer}</p>`;
        scoreTimer--;
        if (scoreTimer === 0 || scoreTimer < 0) {
            scoreArea.classList.add("hide");
            setupGameOver();
            stopTimer();
            return;
        }
    }, 1000);
}

//Stops the setInverval timer.
function stopTimer() {
    clearInterval(interval);
}

//Setup welcome screen.
function setupWelcome() {
    strikeAll();
    quizArea.classList.remove("hide");
    header.classList.remove("hide");
    h2.classList.remove("hide");
    welcomeP.classList.remove("hide");
    startButton.classList.remove("hide");
    h2.textContent = "Test your might";
    welcomeP.textContent = "Test your knowledge by answering the following questions! Answer incorrectly and lose 10 seconds off the clock. The game ends when you run out of questions or time.";
    startButton.textContent = "Begin your Trial";
}

//Setup game over screen. Importantly the user's score cannot be less than 0. That would be
//bad for morale.
function setupGameOver() {
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

//Hide all HTML elements in prepration for setting up another stage. 
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

//Clear all elements from screen
strikeAll();
//Setup the welcome screen 
setupWelcome();
//Starts game
startButton.addEventListener("click", setupGame);

//Allows user input
var answerBtn = document.querySelectorAll(".answer-button");
answerBtn.forEach(answerBtn => {
    answerBtn.addEventListener("click", compareAnswer);
});

//Submit score to scoreboard
scoreEntry.addEventListener("click", submitScore);
//Play the game again
playAgainBtn.addEventListener("click", setupWelcome);
//Reset the scoreboard
scoreResetBtn.addEventListener("click", resetScoreboard);