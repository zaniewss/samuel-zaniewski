//Wanted to leave this here for all the references I did to Undertale and Deltarune in the questions.
//░░░░░░░░░░░▄▀▄▀▀▀▀▄▀▄░░░░░░░░░░░░░░░░░░
//░░░░░░░░░░░█░░░░░░░░▀▄░░░░░░▄░░░░░░░░░░
//░░░░░░░░░░█░░▀░░▀░░░░░▀▄▄░░█░█░░░░░░░░░
//░░░░░░░░░░█░▄░█▀░▄░░░░░░░▀▀░░█░░░░░░░░░
//░░░░░░░░░░█░░▀▀▀▀░░░░░░░░░░░░█░░░░░░░░░
//░░░░░░░░░░█░░░░░░░░░░░░░░░░░░█░░░░░░░░░
//░░░░░░░░░░█░░░░░░░░░░░░░░░░░░█░░░░░░░░░
//░░░░░░░░░░░█░░▄▄░░▄▄▄▄░░▄▄░░█░░░░░░░░░░
//░░░░░░░░░░░█░▄▀█░▄▀░░█░▄▀█░▄▀░░░░░░░░░░
//░░░░░░░░░░░░▀░░░▀░░░░░▀░░░▀░░░░░░░░░░░░

console.log("Hello world - from Smemmers's coding ");
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score=0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        //Question #1
        question: "A Skeleton wearing pink slippers and a blue hoodie and some basketball shorts walks up to you and reaches out to shake your hand. What do you do?",
        choice1: "Turn around and start running",
        choice2: "Pinch yourself",
        choice3: "Turn around and shake his hand",
        choice4: "SAAANSSS?",
        answer: 3 && 4
    },
    {
        //Question #2
        question:"You're questioned for being kinda sus. What do you say?",
        choice1:"Nou",
        choice2:"How can I be the impostor if you have the knife?",
        choice3:"What? I was scanning in medbay!",
        choice4:"ඞ AMOGUS",
        answer:4
    },
    {
        //Question #3
        question:"Kris, GET THE BANANA",
        choice1:"What? Doesn't that make you spin?",
        choice2:"+50 Points",
        choice3:"Potassium.",
        choice4:"Bork. ",
        answer:3
    },
    {
        //Question 4
        question:"If you look up Super Mario Brothers in google, and you click on the question box, what happens?",
        choice1:"A coin pops out.",
        choice2:"A mushroom pops out.",
        choice3:"A star pops out.",
        choice4:"Yoshi pops out.",
        answer: 1
    },
    {
        //Question #5
        question:"What virus happened in 2020?",
        choice1:"Bonzi Buddy",
        choice2:"Coronavirus",
        choice3:"Memz",
        choice4:"ILOVEYOU Email Chain",
        answer:2
    },
    {
        //Question #6
        question:"What do you do after cleaning your brush?",
        choice1:"Dry it off",
        choice2:"Dip in the paint and go at it",
        choice3:"Beat the devil out of it",
        choice4:"Cry because you're out of paint..",
        answer:3
    },
    {
        //Question #7
        question:"Webkinz has you redeem what kind of toy into their online game?",
        choice1:"Cars",
        choice2:"Trains",
        choice3:"Pets",
        choice4:"People",
        answer:3
    },
    {
        //Question #8
        question:"Oh you're approaching me?",
        choice1:"I don't get it...",
        choice2:"Well yea, because I can't beat the crap out of you without getting any closer",
        choice3:"Who are you?",
        choice4:"okay...?",
        answer:2
    },
    {
        //Question #9
        question:"UNDERTALE was made by 1 Guy, named Toby Fox, classifying it as a...",
        choice1:"Indie Game",
        choice2:"Nintendo Game",
        choice3:"Fox Game",
        choice4:"None of the Above",
        answer:1
    },
    {
        //Question #10
        question:"Super Smash Brothers is a game featuring which company of games?",
        choice1:"Microsoft",
        choice2:"Sony",
        choice3:"Nintendo",
        choice4:"Mac",
        answer:3
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter=0;
    score=0;
    availableQuestions=[... questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS) {
        //go to end page
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["numberr"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();