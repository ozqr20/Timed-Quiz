var time = 75;
var points = 0;
var indexVar = 0
var scorePoints = [];
var headerVar = document.getElementById("header");
var countDownVar = document.getElementById("countdown");
var mainContainerVar = document.getElementById("mainContainer"); // div main
var startQuizVar = document.getElementById("startQuiz"); // h1 for text 
var btnStartVar = document.getElementById("btn-start"); 
var btn1Var = document.getElementById("btn-1");
var btn2Var = document.getElementById("btn-2");
var btn3Var = document.getElementById("btn-3");
var btn4Var = document.getElementById("btn-4");
var initialsVar = document.getElementById("initials");
var finalScoreVar = document.getElementById("final-score");
var scoresContainerVar = document.getElementById("scoresContainer");
var questionsArr = document.getElementById("showQuestions");





var questions = [
    {
        question: "What's the short cut to create a default page in HTML?",
        choices: ["html:5", "HTML", "It does not exist", "html'5"],
        answer: 0
    },
    {
        question: "What's the first line in a HTML document?",
        choices: ["<docs html>","<!DOCTIPE html>", "<!DOCTYPE html>", "<html lang=>"],
        answer: 2
    },
    {
        question: "Which option is not true?",
        choices: ["var number = x;", "let number = y;","var arrNumber = [];", "div function() {};"],
        answer: 3
    },
    {
        question: "What's the attribute that indicates the destination of the hyperlink after the anchor <a ...?",
        choices: ["ref", "href","img","id"],
        answer: 1
    },
    {
        question: "How can you print a variable or a message in the debugging console in JavaScript?",
        choices: ["console.ra();", "console.log();", "console.val();", "console.911();"],
        answer: 1
    },
    {
        question: "What's the correct way to display an image in css?",
        choices: ["<img...", "background-image:url('...')","padding: ...", "display-img"],
        answer: 2
    },
    {
        question: "What DOM stands for in JavaScript?",
        choices: ["Document Object Model", "Document Object Modify","Document Other Model", "Days On Market"],
        answer: 0
    },
    {
        question: "How can you display the color inside this code :root {--primary-color=#fce138}?",
        choices: ["var(primary-color);","var(--primary-color);","var(-primary-color);", "primary-color();"],
        answer: 1
    },
    {
        question: "If you are in UCF BootCamp and you need help, what would be the first thing to do?",
        choices: ["call 911","ask in BCS Learning Assistant","watch movies to destress myself", "wait until class"],
        answer: 1
    },
    {
        question: "What's the default value for flex-direction?",
        choices: ["column", "center","space-between", "row"],
        answer: 3
    },

];


function countDown (time){

    var timeInterval = setInterval(function(){
        
        if(time > 0){
            countDownVar.textContent = time;
            time--;             
        }

    }, 1000);
}
var lengthArrQuestions = questions.length;
console.log(lengthArrQuestions);

// btnStartVar.addEventListener("click", function(){

//     btnStartVar.setAttribute("disabled","true");
//     countDown(time);
//     startQuizVar.setAttribute("class","hideElement"); // disable btn so the timer does not goes up and down in value, only string as parameters 
//     questionsArr.removeAttribute("class");  // remove the class so it will display the rest of the containers after
//     showQuestions();
// });


function showQuestions(index){

    var questionVar = document.querySelector('.question')
    document.getElementById("question").innerHTML = questionVar;

}

function checkQuestion(){

}





