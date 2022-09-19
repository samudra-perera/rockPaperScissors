# Rock Paper Scissors
This was my first foray into the world of software development and I chose to make a simple rock paper scissors game. In this application the player can select a preset number of games to play up till or enter their own value.

**Link to project:** https://darling-macaron-fb687d.netlify.app/

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, and Vanilla JavaScript

**Client**

This is a fairly simple application. With all the functionality being controlled by Javascript. On-load, the game start and game win condition appear and disappear from Javascript toggling the display property of the elements to none. The selected win condition is stored in the player object property and compared with the current score to determine the winner. The player selection is taken via a helper method from the player object. When a player selection is made the the computer selection method is called along with the compare win function(comparing who won the match), and the check win function (checking if the player of computer has acheived the selected score). If the check win condition is true, the game is over and the restart button will reload the page.

## Further Optimizations

Unfortunately, looking back at this project I did not follow DRY principles. Outlined below are the following things I would do differently if I were to rewrite this application again. 

1. Better function and variable names that are easier to understand.
2. Using the QuerySelectorAll function to create an array from the win state buttons and player selection buttons (~removes 10 lines of code) --> See Below

```JavaScript
const wS3 = document.querySelector('.three')
const wS5 = document.querySelector('.five')
const wS7 = document.querySelector('.seven')
```
to

```JavaScript
const wS = document.querySelectorAll('.wS')
```

3. From the array above I could addEventListeners to those arrays nodes and run my comparison functions (removes ~12 lines of code)

```JavaScript
wS.forEach(button => {
    button.AddEventListener('click', () => {
        player.winningScore = player.scoreFetch(wS)
    })
})
```

4. I would change the media queries from strict 'only' to a staggered more progressive screen size offering

## Future Consideration

In the future, I would like to add a simulation mode that would simulate X amount of games and return the results of each game as an object.

## Lessons Learned:

This being my first real solo project, I learned a lot. I learned about manipulating the DOM, flex-box, styling CSS via the chrome dev tools, writing good comments, media queries and, the principles of responsive web design.

## Recent Projects:
Take a look at these couple examples that I have in my own portfolio:

**Just Journal:** https://github.com/alecortega/palettable

**The Recipe Book** https://github.com/alecortega/twitter-battle

**Portfolio Site** https://github.com/alecortega/patch-panel


