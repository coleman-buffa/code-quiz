// quizBot oraganizes the questions, options for each question, and associated
// truth value. It also contains all the functions needed to navigate the data
// structure. 
var quizBot = {
    scoreTimer: 0,
    questionIndex: 0,
    questionsArray: [         
        question1 = {
                question: "why are gators so cool?",
                option1: {text: "this is option 1", truthValue: true},
                option2: {text: "you got option 2 here", truthValue: false},
                option3: {text: "option 3 reporting in", truthValue: false},
                option4: {text: "4 on standby", truthValue: false},
            },
            question2 = {
                question: "when did dinosaurs go extinct?",
                option1: {text: "some text1", truthValue: true},
                option2: {text: "some text2", truthValue: false},
                option3: {text: "some text3", truthValue: false},
                option4: {text: "some text4", truthValue: false},
            },
            question3 = {
                question: "why are stratovolcano erruptions so explosive?",
                option1: {text: "some text", truthValue: true},
                option2: {text: "some text", truthValue: false},
                option3: {text: "some text", truthValue: false},
                option4: {text: "some text", truthValue: false},
            },
            question4 = {
                question: "what makes a good pizza?",
                option1: {text: "some text", truthValue: true},
                option2: {text: "some text", truthValue: false},
                option3: {text: "some text", truthValue: false},
                option4: {text: "some text", truthValue: false},
            },
            question5 = {
                question: "one of the following doesn't fit!",
                option1: {text: "some text", truthValue: true},
                option2: {text: "some text", truthValue: false},
                option3: {text: "some text", truthValue: false},
                option4: {text: "some text", truthValue: false},
            },
            question6 = {
                question: "what is plot armor?",
                option1: {text: "some text", truthValue: true},
                option2: {text: "some text", truthValue: false},
                option3: {text: "some text", truthValue: false},
                option4: {text: "some text", truthValue: false},
            }        
    ],
    // Utility function to help in development that console logs an option 
    // set given a value targeting a desired index in questionsArray
    consoleOptions: function (index) {
        console.log(this.questionsArray[index].option1.text);
        console.log(this.questionsArray[index].option2.text);
        console.log(this.questionsArray[index].option3.text);
        console.log(this.questionsArray[index].option4.text);
    }
}   
console.log(quizBot);

quizBot.consoleOptions(0);
quizBot.consoleOptions(1);

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