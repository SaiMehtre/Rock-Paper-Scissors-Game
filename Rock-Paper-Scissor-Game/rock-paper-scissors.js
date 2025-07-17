function getRandomChoice(){
    let randomChoice = Math.floor(Math.random()* 3 + 1);
    return randomChoice;
}

function getComputerChoice(){
    let randomChoice = getRandomChoice();
    let computerChoice;
        
    if(randomChoice === 1){
    computerChoice = `👊Rock`;
    }else if(randomChoice === 2){
    computerChoice = `✋Paper`;
    }else{
    computerChoice = `✌️Scissors`;
    }
    return computerChoice;
}

function updateResult(userChoice,computerChoice,result){
    document.querySelector('.result').innerHTML = 
    `You Chose ${userChoice}. <br> 
     Computer Chooce ${computerChoice}. <br> 
     Match Result:  ${result}`;
}

function getResult(userChoice,computerChoice){
    let result ='unknown'
    
    if (userChoice === computerChoice){
        result = 'Tie';
    }else if ((computerChoice === `👊Rock` && userChoice === `✌️Scissors`) ||
              (computerChoice === `✌️Scissors` && userChoice === `✋Paper`) ||
              (computerChoice === `✋Paper` && userChoice === `👊Rock`)){
        result = `I win`;       // computer win
    }else{
        result = `You win`;     // user win
    }

    return result;
}

function rockClicked(){
    let computerChoice = getComputerChoice();
    const userChoice = `👊Rock`;   
    let result = getResult(userChoice,computerChoice);
    updateResult(userChoice,computerChoice,result); 
}

function paperClicked(){
    let computerChoice = getComputerChoice();
    const userChoice = '✋Paper';
    let result = getResult(userChoice,computerChoice);
    updateResult(userChoice,computerChoice,result); 
}

function scissorsClicked(){
    let computerChoice = getComputerChoice();
    const userChoice = '✌️Scissors';
    let result = getResult(userChoice,computerChoice);
    updateResult(userChoice,computerChoice,result);
}