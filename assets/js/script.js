var time = 75;
var points = 0;
var indexVar = 0
var scorePoints = [];
var headerVar = document.getElementById("header");
var countDown = document.getElementById("countdown");
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
var otherCount = 0;
var cycleVar = false;
var data = '';


var questionsArr = [
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


// function countDown (time){

//     var timeInterval = setInterval(function(){
        
//         if(time > 0){
//             countDownVar.textContent = time;
//             time--;             
//         }

//     }, 1000);
// }
var lengthArr = questionsArr.length;

// btnStartVar.addEventListener("click", function(){

//     btnStartVar.setAttribute("disabled","true");
//     countDown(time);
//     startQuizVar.setAttribute("class","hideElement"); // disable btn so the timer does not goes up and down in value, only string as parameters 
//     questionsArr.removeAttribute("class");  // remove the class so it will display the rest of the containers after
//     showQuestions();
// });

function quizStart(){

    var countDown = document.createElement('div')
    //countDown.textContent = "Timer";
    countDown.className = "timer";
    headerVar.appendChild(countDown);

    var title = document.createElement('h1')
    title.textContent = "Coding Quiz Challenge";
    title.className = "h1";
    mainContainerVar.appendChild(title);

    var startQuiz = document.createElement("h3")
    startQuiz.textContent = " Try to answer the following code-related questions within the time limit. "
    startQuiz.textContent += " Keep in mind that incorrect answers will penalize your score/time";
    startQuiz.textContent += " by ten seconds!";
    startQuiz.className = "h3"
    mainContainerVar.appendChild(startQuiz);

    var startBtn = document.createElement("button");
    startBtn.textContent = "Let's Begin";
    startBtn.className = "btn";
    startBtn.addEventListener('click', start)   
    mainContainerVar.appendChild(startBtn);

    var result = document.createElement("h2");
    result.className = "result";
    mainContainerVar.appendChild(result);

}

function clearContainer(){
    mainContainerVar.innerHTML= '';  // It will clear the container after every question displayed
}

function showQuestions(){

    if(time > 0){
        clearContainer();

        if(cycleVar === true){
            indexVar++;
        }

        if(indexVar === lengthArr){
            clearInterval(timeOver);
            countDown.textContent = '';
            gameover();
        } else {
            var startQuiz = document.createElement("h2")
            startQuiz.textContent = questionsArr[indexVar].question;
            startQuiz.className = "h2";
            mainContainerVar.appendChild(startQuiz);

            var btn1Var = document.createElement("button");
            btn1Var.textContent = "1. " + questionsArr[indexVar].choices[0];
            btn1Var.className = "btn small";
            btn1Var.setAttribute("id", "btn-1")
            btn1Var.addEventListener('click', responseClick)
            mainContainerVar.appendChild(btn1Var);

            var btn2Var = document.createElement("button");
            btn2Var.textContent = "2. " + questionsArr[indexVar].choices[1];
            btn2Var.className = "btn small";
            btn2Var.setAttribute("id", "btn-2")
            btn2Var.addEventListener('click', responseClick)
            mainContainerVar.appendChild(btn2Var);

            var btn3Var = document.createElement("button");
            btn3Var.textContent = "3. " + questionsArr[indexVar].choices[2];
            btn3Var.className = "btn small";
            btn3Var.setAttribute("id", "btn-3")
            btn3Var.addEventListener('click', responseClick)
            mainContainerVar.appendChild(btn3Var);

            var btn4Var = document.createElement("button");
            btn4Var.textContent = "4. " + questionsArr[indexVar].choices[3];
            btn4Var.className = "btn small";
            btn4Var.setAttribute("id", "btn-4")
            btn4Var.addEventListener('click', responseClick)
            mainContainerVar.appendChild(btn4Var);
        }
    }else {
        gameover();
    }

}; 


var checkQuestion = function(num,indexVar){
    if(num === questionsArr[indexVar].correct){
        console.log('correct answer', num, indexVar);
        var result = document.createElement('h2');
        result.textContent = 'Correct';
        result.className = 'result';
        mainContainerVar.appendChild(result);
        total = parseInt(total) + 1;
    } else {
        var wrongVar = document.createElement('h2');
        wrongVar.textContent = "Wrong";
        wrongVar.className = 'result';
        mainContainerVar.appendChild(wrongVar);
        time -= 10;
    }
    cycleVar = true;
    var interval = setTimeout(showQuestions,500);   
}

var responseClick = function(event){
    var answer = event.target;
    if(event.target.id === "btn-1"){
        checkQuestion(0,indexVar);
    }
    if (event.target.id === "btn-2") {
        checkQuestion(1, indexVar)
    }
    if (event.target.id === "btn-3") {
        checkQuestion(2, indexVar)
    }
    if (event.target.id === "btn-4") {
        checkQuestion(3, indexVar)
    }
    console.log('responseClick', event.target.id);
}

function gameover(){
    clearContainer();
    clearInterval(timeOver);
    countDown.textContent = '';

    var startQuiz = document.createElement("h2")
    startQuiz.textContent = "You have finished the quiz, " + points + " are the questions correctly. Enter two initials below";
    startQuiz.className = 'h2';
    mainContainerVar.appendChild(startQuiz);

    var initials = document.createElement("input")
    initials.className = 'input';
    initials.setAttribute("id", "init");
    initials.setAttribute("name", "initial");
    mainContainerVar.appendChild(initials);

    var btn1 = document.createElement("button");
    btn1.textContent = "Submit Score and Initials"
    btn1.className = "btn small";
    btn1.addEventListener('click', highScore);
    mainContainerVar.appendChild(btn1);
}

function highScore () {
    var data = document.querySelector("input[name='initial']").value;

    if(data === "" || isNaN(data) || data.length > 2 || data.length < 2) {
        alert("Wrong input")
    } else{

        var scoreObj = {
            name: data,
            score: points
        }
        var scoreSaved = JSON.parse(localStorage.getItem("scorePoints")) ?? [];
        scoreSaved.push(scoreObj);
        console.log(localStorage["scorePoints"] = JSON.stringify(scoreSaved));
        
        window.location.href="./high-scores.html";
    }
}

function start () {
    showQuestions()

        timeOver = setInterval(() => {
            if(time <= 0){  
            countDown.textContent = '';
            clearInterval(timeOver);
            gameover()
        } else{
            countDown.textContent = time
            time --
        }
    }, 1000);
}

quizStart();






