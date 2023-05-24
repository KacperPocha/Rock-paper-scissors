let rockUser = document.getElementById('rock');
let paperUser  = document.getElementById('paper');
let scissorsUser = document.getElementById('scissors');
let userSelect = [];
let computerSelect = [];
let canChoose = true;
const winningCombinations = [["paper", "rock"],["scissors", "paper"],["rock", "scissors"]];
let winner = '';
let playerField = document.getElementById('userField');
let computerField = document.getElementById('computerField');

let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let resultP1 = document.getElementById('resultP1');
let resultP2 = document.getElementById('resultP2');
let userPoints = 0;
let computerPoints = 0;

let rockComputer = document.getElementById('rockComputer');
let paperComputer  = document.getElementById('paperComputer');
let scissorsComputer = document.getElementById('scissorsComputer');

let icons = document.querySelectorAll('.Icons');
let rockIconU = document.getElementById('rockIconU');
let paperIconU = document.getElementById('paperIconU');
let scissorsIconU = document.getElementById('scissorsIconU');
let rockIconC = document.getElementById('rockIconC');
let paperIconC = document.getElementById('paperIconC');
let scissorsIconC = document.getElementById('scissorsIconC');


rockUser.addEventListener("click", rock);
paperUser.addEventListener("click", paper);
scissorsUser.addEventListener("click", scissors);



player1.textContent = 'Gracz 1: ' + userPoints;
player2.textContent = 'Gracz 2: ' + computerPoints;

function rock(event){
    if(canChoose){
    const clickedRock = event.target;
    userSelect[0] = "rock"
    
    setTimeout(()=>{
        rockIconU.style.display = "block";
        paperIconU.style.display = "none";   
        scissorsIconU.style.display = "none";      
    }, "3100");
    game(userSelect);
    rockUser.style = 'background-color: rgba(70, 70, 255, 0.818);';
    }
    canChoose = false;
}

function paper(event){
    if(canChoose){
    const clickedRock = event.target;
    userSelect[0] = "paper"
    setTimeout(()=>{
        rockIconU.style.display = "none"
        paperIconU.style.display = "block";   
        scissorsIconU.style.display = "none";      
    }, "3100");
    game(userSelect);
    paperUser.style = 'background-color: rgba(70, 70, 255, 0.818);';
    }
    canChoose = false;
}

function scissors(event){
    if(canChoose){
    const clickedRock = event.target;
    userSelect[0] = "scissors"
    setTimeout(()=>{
        rockIconU.style.display = "none"
        paperIconU.style.display = "none";   
        scissorsIconU.style.display = "block";      
    }, "3100");
    game(userSelect);
    scissorsUser.style = 'background-color: rgba(70, 70, 255, 0.818);';
    }
    canChoose = false;
}


    



function game(){
    if(canChoose){
        for(let index in icons){
            icons[index].classList = 'Icons-active';
        }
        buttonStyleClear();
        restartIcons();
        let computerTurn = (Math.floor(Math.random() * 2));
        if(computerTurn === 0){
            computerSelect[0] = "rock";
            setTimeout(()=>{
                rockIconC.style.display = "block";
                paperIconC.style.display = "none";   
                scissorsIconC.style.display = "none";      
            }, "3100");
        }
        if(computerTurn === 1){
            computerSelect[0] = "paper"
            setTimeout(()=>{
                rockIconC.style.display = "none";
                paperIconC.style.display = "block";   
                scissorsIconC.style.display = "none";      
            }, "3100");
        }
        if(computerTurn === 2){
            computerSelect[0] = "scissors"
            setTimeout(()=>{
                rockIconC.style.display = "none";
                paperIconC.style.display = "none";   
                scissorsIconC.style.display = "block";      
            }, "3100");
        }
        console.log("Gracz: " + userSelect[0] + "  Komputer: " + computerSelect[0])
        
        for(let index in winningCombinations){
            if(userSelect[0] === winningCombinations[index][0] && computerSelect[0] === winningCombinations[index][1]){
                winner = "gracz";
                win(winner);
                break;
            }
            else if(userSelect[0] === computerSelect[0]){
                winner = "remis";
                win(winner);
                break;
            }
            else if(userSelect[0] === winningCombinations[index][1] && computerSelect[0] === winningCombinations[index][0]){
                winner = "komputer";
                win(winner);
                break; 
            }
        }
            
        
        setTimeout(()=>{
            canChoose = true;
            if(computerSelect[0] === 'rock') rockComputer.style = 'background-color: rgba(255, 74, 74, 0.846);';
            if(computerSelect[0] === 'paper') paperComputer.style = 'background-color: rgba(255, 74, 74, 0.846);';
            if(computerSelect[0] === 'scissors') scissorsComputer.style = 'background-color: rgba(255, 74, 74, 0.846);';
        }, "3100");
    }
}


function win(){
    resultP1.textContent = '';
    resultP2.textContent = '';
    if(winner === 'gracz'){
        setTimeout(()=>{
            userPoints++;
            player1.textContent = 'Gracz 1: ' + userPoints;
            resultP1.innerHTML = "Zwycięstwo!"
            resultP2.textContent = "Przegrana"
            removingClass();
        }, "3100");
        
    }
    if(winner === 'komputer'){
        setTimeout(()=>{
            computerPoints++;
            player2.textContent = 'Gracz 2: ' + computerPoints;
            resultP1.textContent = "Przegrana"
            resultP2.textContent = "Zwycięstwo!"
            removingClass();
        }, "3100");
        
    }
    if(winner === 'remis'){
        setTimeout(()=>{
            resultP1.textContent = "Remis!"
            resultP2.textContent = "Remis!"
            removingClass();
        }, "3100");
    }
    
}


function removingClass(){
    for(let index in icons){
        icons[index].classList = 'Icons';
    }
}

function buttonStyleClear(){
    rockComputer.style = '';
    paperComputer.style = '';
    scissorsComputer.style = '';
    rockUser.style = '';
    paperUser.style = '';
    scissorsUser.style = '';
}

function restartIcons(){
    rockIconU.style.display = "block"
    paperIconU.style.display = "none";   
    scissorsIconU.style.display = "none";
    rockIconC.style.display = "block"
    paperIconC.style.display = "none";   
    scissorsIconC.style.display = "none";
    icons.classList = 'rockIcon-active';
}

