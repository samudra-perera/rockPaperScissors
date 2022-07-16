let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')

let computer = {
    score: 0,
    choices: ['rock', 'paper', 'scissors'],
    computerChoice: function() {
        return this.choices[Math.floor(Math.random()*3)]
    }
}

let player = {
    score: 0,
    startGame: function() {
        document.querySelector('.pScore').innerText = `Player Score: ${this.score}`
        document.querySelector('.cScore').innerText = `Computer Score: ${computer.score}`
        document.querySelector('.startGame').style.display = 'none'
        document.querySelector('.resetGame').style.display = 'flex'
    }
}



