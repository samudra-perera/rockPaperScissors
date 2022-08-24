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
const wS3 = document.querySelector('.three')
const wS5 = document.querySelector('.five')
const wS7 = document.querySelector('.seven')
const inputScore = document.querySelector('.inputScore')

//Computer Object
let computer = {
    score: 0,
    choices: ['rock', 'paper', 'scissors'],
    computerChoice: function() {
        return this.choices[Math.floor(Math.random()*3)]
    }
}

//Player Object
let player = {
    score: 0,
    winningScore: 0,

    //Game Start State
    startGame: function() {
        pScore.innerText = `Player Score: ${this.score}`;
        cScore.innerText = `Computer Score: ${computer.score}`;
        document.querySelector('h1').innerText = 'Select the number of games to win'
        document.querySelector('.startGame').style.display = 'none';
        document.querySelector('.winningScore').style.display = 'flex';
    },

    // Reset the game to the original states prior to game start
    resetGame: function() {
        location.reload()
    },
    
    //Takes in the value of the input from the DOM and returns that value
    playerArray: function(choice) {
        return choice.value
    }, 

    //
    scoreFetch: function(choice) {
        selections.style.display = 'flex';
        scores.style.visibility = 'visible';
        winStatus.style.visibility = 'visible';
        document.querySelector('.winningScore').style.display = 'none'
        resetGame.style.display = 'flex';
        document.querySelector('h1').innerText = 'Rock, Paper, Scissors Go!'
        return Number(choice.value)
    },
    
}

//Starting The Rock Paper Scissors Game
startGame.addEventListener('click', function () {
    player.startGame()
})

//Reseting the game aka refreshing the page to the initial state
resetGame.addEventListener('click', function() {
    player.resetGame()
})

//taking the player choices and checking if the player won using the compareWin func then checking if the player won the best of series
rock.addEventListener('click', function() {
    let p = player.playerArray(rock)
    let c = computer.computerChoice()
    compareWin(c,p)
    checkWin()
})

paper.addEventListener('click', function() {
    let p = player.playerArray(paper)
    let c = computer.computerChoice()
    compareWin(c,p)
    checkWin()
})

scissors.addEventListener('click', function() {
    let p = player.playerArray(scissors)
    let c = computer.computerChoice()
    compareWin(c,p)
    checkWin()
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


// Function to check the win state of the overall game 
function checkWin(check){
    if(player.score == player.winningScore) {
        document.querySelector('h1').innerText = 'Player Won the game. Press restart to play again'
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else if (computer.score == player.winningScore) {
        document.querySelector('h1').innerText = 'Computer Won the game. Press restart to play again'
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}


// Getting the user input on the final winning score (best of series)
wS3.addEventListener('click', function() {
    player.winningScore = player.scoreFetch(wS3)
})

wS5.addEventListener('click', function() {
    player.winningScore = player.scoreFetch(wS5)
})

wS7.addEventListener('click', function() {
    player.winningScore = player.scoreFetch(wS7)
})

inputScore.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        player.winningScore = player.scoreFetch(inputScore)
    }
})







/* 
Things to accomplish


1. Add buttons for the player to select the amount of games to reach the win condition // COMPLETED
2. Hide the button choices until the player starts the game // COMPLETED
3. Compare the win condions and add to the score, then update the DOM // COMPLETED 
4. Add a simulation feature and print the results to the console
5. Improve the code legibility using const variables // COMPLETED
6. Fix the score status from moving elements downwards
7. Add media queries - Last thing to do 
8. Fix the styling
*/