const startGame = document.querySelector('.startGame')
const resetGame = document.querySelector('.resetGame')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
let playerChoice = [];

let computer = {
    score: 0,
    choices: ['rock', 'paper', 'scissors'],
    computerChoiceArray: [],
    computerChoice: function() {
        this.computerChoiceArray.push(this.choices[Math.floor(Math.random()*3)])
    }
}

let player = {
    score: 0,
    playerChoiceArray: [],
    startGame: function() {
        document.querySelector('.pScore').innerText = `Player Score: ${this.score}`;
        document.querySelector('.cScore').innerText = `Computer Score: ${computer.score}`;
        document.querySelector('.startGame').style.display = 'none';
        document.querySelector('.resetGame').style.display = 'flex';
        document.querySelector('.scores').style.visibility = 'visible';
        document.querySelector('.winStatus').style.visibility = 'visible';
    },

    // Reset the game to the original states prior to game start
    resetGame: function() {
        computer.score = 0;
        this.score = 0;
        this.playerChoiceArray = [];
        computer.computerChoiceArray = [];
        document.querySelector('.startGame').style.display = 'flex';
        document.querySelector('.resetGame').style.display = 'none';
        document.querySelector('.scores').style.visibility = 'hidden';
        document.querySelector('.winStatus').style.visibility = 'hidden';
    },
    
    //Takes in the value of the input from the DOM and pushes into the playerChoiceArray property
    playerArray: function(choice) {
        this.playerChoiceArray.push(choice.value)
    }
    
}


startGame.addEventListener('click', function () {
    player.startGame()
})

resetGame.addEventListener('click', function() {
    player.resetGame()
})

rock.addEventListener('click', function() {
    player.playerArray(rock)
    computer.computerChoice()
})

paper.addEventListener('click', function() {
    player.playerArray(paper)
    computer.computerChoice()
})

scissors.addEventListener('click', function() {
    player.playerArray(scissors)
    computer.computerChoice()
})


/*
function compareWin() {
    let len = player.playerChoiceArray.length
    for(let i = 0; i <= len; i++) {
        if(player.playerChoiceArray[i] == computer.computerChoiceArray[i]) {
        
        }
    }
}
*/

/* 
Things to accomplish


1. Add buttons for the player to select the amount of games to reach the win condition 
2. Hide the button choice until the player starts the game
3. Compare the win condions and add to the score, then update the DOM
*/