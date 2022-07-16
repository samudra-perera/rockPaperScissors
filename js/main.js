let player = {
    score: 0,
}

let computer = {
    score: 0,
    choices: ['rock', 'paper', 'scissors'],
    computerChoice: function() {
        return this.choices[Math.floor(Math.random()*3)]
    }
}

let rock = document.querySelector('.rock').value