const startGame = document.querySelector('.startGame');
const resetGame = document.querySelector('.resetGame');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const cScore = document.querySelector('.cScore');
const pScore = document.querySelector('.pScore');
const winStatus = document.querySelector('.winStatus');
const scores = document.querySelector('.scores');
const selections = document.querySelector('.selections');


let computer = {
    score: 0,
    choices: ['rock', 'paper', 'scissors'],
    computerChoice: function() {
        return this.choices[Math.floor(Math.random()*3)]
    }
}

let player = {
    score: 0,
    
    //Game Start State
    startGame: function() {
        pScore.innerText = `Player Score: ${this.score}`;
        cScore.innerText = `Computer Score: ${computer.score}`;
        document.querySelector('.startGame').style.display = 'none';
        document.querySelector('.resetGame').style.display = 'flex';
        selections.style.display = 'flex';
        scores.style.visibility = 'visible';
        winStatus.style.visibility = 'visible';
    },

    // Reset the game to the original states prior to game start
    resetGame: function() {
        computer.score = 0;
        this.score = 0;
        document.querySelector('.startGame').style.display = 'flex';
        document.querySelector('.resetGame').style.display = 'none';
        scores.style.visibility = 'hidden';
        winStatus.innerText = '';
        winStatus.style.visibility = 'hidden';
    },
    
    //Takes in the value of the input from the DOM and returns that value
    playerArray: function(choice) {
        return choice.value
    }
    
}


startGame.addEventListener('click', function () {
    player.startGame()
})

resetGame.addEventListener('click', function() {
    player.resetGame()
})

//selecting the player choices and checking the win
rock.addEventListener('click', function() {
    let p = player.playerArray(rock)
    let c = computer.computerChoice()
    compareWin(c,p)
})

paper.addEventListener('click', function() {
    let p = player.playerArray(paper)
    let c = computer.computerChoice()
    compareWin(c,p)
})

scissors.addEventListener('click', function() {
    let p = player.playerArray(scissors)
    let c = computer.computerChoice()
    compareWin(c,p)
})




// Function that takes in the two parameters (the player choice from the DOM element and the computer random choice) and updating score 
function compareWin(c,p) {
    if(c == p) {
        document.querySelector('.winStatus').innerText = `Both players picked ${c} and it is a tie`
     } else if (p == 'rock' && c == 'scissors') {
        winStatus.innerText = `Player won!`
        player.score++
     } else if (p == 'paper' && c == 'rock') {
        winStatus.innerText = `Player won!`
        player.score++
     } else if (p == 'scissors' && c == 'paper') {
        winStatus.innerText = `Player won!`
        player.score++
     } else {
        winStatus.innerText = `Computer won!`
        computer.score++
     }
     pScore.innerText = `Player Score: ${player.score}`
     cScore.innerText = `Computer Score: ${computer.score}`
}


/* 
Things to accomplish


1. Add buttons for the player to select the amount of games to reach the win condition 
2. Hide the button choices until the player starts the game
3. Compare the win condions and add to the score, then update the DOM // COMPLETED 
4. Add a simulation feature and print the results to the console
5. Improve the code legibility using const variables
6. Fix the score status from moving elements downwards
7. Add media queries 
*/