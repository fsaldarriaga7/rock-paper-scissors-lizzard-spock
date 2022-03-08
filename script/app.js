//alert('Funciona');

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');

const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const currentStreakDisplay = document.getElementById('current-streak');

let userChoice;
let computerChoice;
let result;
let streak = 0;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    //console.log(randomNumber);

    if (randomNumber === 0) {
        computerChoice = 'Rock';
    }
    if (randomNumber === 1) {
        computerChoice = 'Paper';
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors';
    }
    if (randomNumber === 3) {
        computerChoice = 'Lizzard';
    }
    if (randomNumber === 4) {
        computerChoice = 'Spock';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'Draw';      
    }
    //Computer Wins
    if (computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'Computer Wins';
        streak--;     
    }
    if (computerChoice === 'Rock' && userChoice === 'Lizzard'){
        result = 'Computer Wins';
        streak--;     
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'Computer Wins';     
        streak--;   
    }
    if (computerChoice === 'Paper' && userChoice === 'Spock'){
        result = 'Computer Wins';
        streak--;        
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = 'Computer Wins';  
        streak--;      
    }
    if (computerChoice === 'Scissors' && userChoice === 'Lizzard'){
        result = 'Computer Wins';
        streak--;       
    }
    if (computerChoice === 'Lizzard' && userChoice === 'Paper'){
        result = 'Computer Wins';
        streak--;        
    }
    if (computerChoice === 'Lizzard' && userChoice === 'Spock'){
        result = 'Computer Wins';
        streak--;        
    }
    if (computerChoice === 'Spock' && userChoice === 'Scissors'){
        result = 'Computer Wins';
        streak--;        
    }
    if (computerChoice === 'Spock' && userChoice === 'Rock'){
        result = 'Computer Wins'; 
        streak--;       
    }
    //You Win
    if (computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'You Win'; 
        streak++;       
    }
    if (computerChoice === 'Rock' && userChoice === 'Spock'){
        result = 'You Win'; 
        streak++;        
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'You Win';   
        streak++;      
    }
    if (computerChoice === 'Scissors' && userChoice === 'Spock'){
        result = 'You Win';  
        streak++;       
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = 'You Win';  
        streak++;      
    }
    if (computerChoice === 'Paper' && userChoice === 'Lizzard'){
        result = 'You Win'; 
        streak++;       
    }
    if (computerChoice === 'Lizzard' && userChoice === 'Scissors'){
        result = 'You Win'; 
        streak++;       
    }
    if (computerChoice === 'Lizzard' && userChoice === 'Rock'){
        result = 'You Win'; 
        streak++;       
    }
    if (computerChoice === 'Spock' && userChoice === 'Lizzard'){
        result = 'You Win';
        streak++;        
    }
    if (computerChoice === 'Spock' && userChoice === 'Paper'){
        result = 'You Win';  
        streak++;      
    }


    resultDisplay.innerHTML = result;
    currentStreakDisplay.innerHTML = streak;
}