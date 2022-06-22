const player1NameEl = document.getElementById('player1Name');
const player2NameEl = document.getElementById('player2Name');
const player1ScoreEl = document.getElementById('player1-score');
const player2ScoreEl = document.getElementById('player2-score');
const diceBtnEl = document.getElementById('dice-btn');
const resetBtn = document.getElementById('reset-btn');
const diceTitleEl = document.getElementById('dice-title');
const modalEl = document.getElementById('modal');
const oddBtnEl = document.getElementById('odd-btn');
const evenBtnEl = document.getElementById('even-btn');
const modalPLayerTurnText = document.getElementById('player-pick-text');
const modalAnswerText = document.getElementById('player-pick-answer');
const modalAnswerMessage = document.getElementById('player-pick-answer-messsage')
const mainGameEl = document.getElementById('main-game');

let modalOdd = '';
let oddOrEven = '';

let player1turn = '';
let isGameActive = false;
let player1Score = 0;
let player2Score = 0;

//one page load hide main game and show modal
modalEl.style.marginTop = '10%';
mainGameEl.style.display = 'none';
modalEl.style.display = 'block';

// modal odd or even buttons to decide who goes first
oddBtnEl.addEventListener('click', function(){
    oddOrEvenFunction();
    if (oddOrEven === 'odd'){
        player1turn = true;
        isGameActive = true;
        modalAnswerMessage.innerHTML = 'Player 1 goes first!';
        turnBackgroundColor();
    }else{
        player1turn = false;
        isGameActive = true;
        modalAnswerMessage.innerHTML = ' Player 2 goes first!';
        turnBackgroundColor();
    }
    evenBtnEl.style.display = 'none';
    //wait 3 seconds then reset the modal and close the modal
    setTimeout(function(){
        modalEl.style.display = 'none';
        mainGameEl.style.display = 'block';
        modalOdd = '';
    }, 3000);
});

evenBtnEl.addEventListener('click', function(){
    oddOrEvenFunction();
    if (oddOrEven === 'even'){
        player1turn = false;
        isGameActive = true;
        modalAnswerMessage.innerHTML = 'Player 2 goes first!';
        turnBackgroundColor();
    }
    else{
        player1turn = true;
        isGameActive = true;
        modalAnswerMessage.innerHTML = 'Player 1 goes first!';
        turnBackgroundColor();
    }

    oddBtnEl.style.display = 'none';
    //wait 3 seconds then reset the modal and close the modal
    setTimeout(function(){
        modalEl.style.display = 'none';
        mainGameEl.style.display = 'block';
        modalOdd = '';
        modalPlayer1 = true;
    }, 3000);

});


//when dice button is clicked, roll the dice
diceBtnEl.addEventListener('click', function(){
    isGameActive = true;
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    diceTitleEl.innerHTML =  `you rolled a: ${randomNumber}`;
    if(player1turn){
        player1Score += randomNumber;
        player1ScoreEl.innerHTML = player1Score;
        player1turn = false;
        turnBackgroundColor();
        checkForWinner();
        if (isGameActive === false){
            document.body.style.background = 'red';
        }
    }
    else{
        player2Score += randomNumber;
        player2ScoreEl.innerHTML = player2Score;
        player1turn = true;
        turnBackgroundColor();
        checkForWinner();
        if (isGameActive === false){
            document.body.style.background = 'blue';
        }
    }
});



//reset the game with rest buttons
resetBtn.addEventListener('click', function(){
    player1Score = 0;
    player2Score = 0;
    player1ScoreEl.innerHTML = player1Score;
    player2ScoreEl.innerHTML = player2Score;
    isGameActive = false;
    player1turn = '';
    modalOdd = '';
    oddOrEven = '';
    document.body.style.background = 'linear-gradient(to right, red, blue)';
    diceBtnEl.style.display = 'block';
    diceTitleEl.innerHTML = 'Roll the dice!';
    diceTitleEl.style.fontSize = '2em';
    player1ScoreEl.style.color = 'white';
    player1ScoreEl.style.fontSize = '3rem';
    player1ScoreEl.style.fontWeight = 'normal';
    player1ScoreEl.style.textShadow = '5px 5px 4px black';
    player2ScoreEl.style.color = 'white';
    player2ScoreEl.style.fontSize = '3rem';
    player2ScoreEl.style.fontWeight = 'normal';
    player2ScoreEl.style.textShadow = '5px 5px 4px black';
    resetBtn.style.display = 'none';
    mainGameEl.style.display = 'none';
    modalEl.style.display = 'block';
    modalAnswerMessage.innerHTML = 'Who goes first?';
    modalAnswerText.innerHTML = 'You got:';
    oddBtnEl.style.display = 'block';
    evenBtnEl.style.display = 'block';
});


// when name is entered chage the player name box
player1NameEl.addEventListener('keyup', player1BoxNameChange);
player2NameEl.addEventListener('keyup', player2BoxNameChange);

//on doubleclick reset the player name
player1NameEl.addEventListener('dblclick', player1NameReset);
player2NameEl.addEventListener('dblclick', player2NameReset);



// below are the functions
function player2NameReset(){
    player2NameEl.value = '';
    player2NameEl.style.border = '1rem rgb(0, 0, 255) groove';
    player2NameEl.style.height = '2rem';
    player2NameEl.style.color = 'black';
    player2NameEl.style.fontSize = '1.5em';
    player2NameEl.style.fontWeight = 'bold';
    player2NameEl.style.textShadow = 'none';
    player2NameEl.style.backgroundColor = 'white';
    player2NameEl.style.padding = '5px';
    player2NameEl.style.width = "13rem";
    
}
function player1NameReset(){
    player1NameEl.value = '';
    player1NameEl.style.border = '1rem red groove';
    player1NameEl.style.height = '2rem';
    player1NameEl.style.color = 'black';
    player1NameEl.style.fontSize = '1.5em';
    player1NameEl.style.fontWeight = 'bold';
    player1NameEl.style.textShadow = 'none';
    player1NameEl.style.backgroundColor = 'white';
    player1NameEl.style.padding = '5px';
    player1NameEl.style.width = "13rem";
}
function player1BoxNameChange(){
    player1NameEl.style.border = 'none';
    player1NameEl.style.borderBottom = '5px groove red';
    player1NameEl.style.color = 'white';
    player1NameEl.style.fontSize = '1.5em';
    player1NameEl.style.fontWeight = 'bold';
    player1NameEl.style.textShadow = '2px 2px 2px black';
    player1NameEl.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    player1NameEl.style.padding = '5px';
    player1NameEl.style.width = `${player1NameEl.value.length * 1}rem`;
}
function player2BoxNameChange(){
    player2NameEl.style.border = 'none';
    player2NameEl.style.borderBottom = '5px groove blue';
    player2NameEl.style.color = 'white';
    player2NameEl.style.fontSize = '1.5em';
    player2NameEl.style.fontWeight = 'bold';
    player2NameEl.style.textShadow = '2px 2px 2px black';
    player2NameEl.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    player2NameEl.style.padding = '5px';
    player2NameEl.style.width = `${player2NameEl.value.length * 1}rem`;
}
//if player1turn is true, turn bacground color to red, else turn background color to blue
function turnBackgroundColor(){
    if(player1turn && isGameActive){
        document.body.style.background = 'linear-gradient(to right, red, red, red, red, red, red, white, blue)';
        diceBtnEl.style.background = 'linear-gradient(to right, red, red, red, red, red, red, white, blue)';
        diceBtnEl.style.boxShadow = '-6px -6px 4px #000';
    }
    else if(player1turn === false && isGameActive){
        document.body.style.background = 'linear-gradient( to left, blue, blue, blue, blue, blue, blue, blue, white, red)';
        diceBtnEl.style.background = 'linear-gradient( to left, blue, blue, blue, blue, blue, blue, blue, blue, white, red)';
        diceBtnEl.style.boxShadow = '6px -6px 4px #000';
    }else{
        document.body.style.background = 'linear-gradient(to right, red, blue)';
    }
}
//randomaly pick player 1 or player 2 for modal start
function oddOrEvenFunction(){
    let random = Math.floor(Math.random() * 2) + 1;
    if( random === 1){
        modalOdd = true;
        modalAnswerText.innerHTML = 'You got: Odd';
        oddOrEven = 'odd';
    }
    else if( random === 2){
        modalOdd = false;
        modalAnswerText.innerHTML = 'You got: Even';
        oddOrEven = 'even';
    }
};

//if either player reaches 21 points. They win the game.
function checkForWinner(){
    if(player1Score >= 21){
        isGameActive = false;
        player1ScoreEl.style.color = 'white';
        player1ScoreEl.style.fontSize = '4em';
        player1ScoreEl.style.fontWeight = 'bold';
        player1ScoreEl.style.textShadow = '5px 5px 4px green';
        player2ScoreEl.style.color = 'white';
        player2ScoreEl.style.fontSize = '2em';
        player2ScoreEl.style.fontWeight = 'bold';
        player2ScoreEl.style.textShadow = '5px 5px 4px red';
        diceBtnEl.style.display = 'none';
        diceTitleEl.innerHTML = 'Player 1 wins!';
        diceTitleEl.style.fontSize = '4em';
        resetBtn.style.display = 'block';
    }
    else if(player2Score >= 21){
        isGameActive = false;
        player2ScoreEl.style.color = 'white';
        player2ScoreEl.style.fontSize = '4em';
        player2ScoreEl.style.fontWeight = 'bold';
        player2ScoreEl.style.textShadow = '5px 5px 4px green';
        player1ScoreEl.style.color = 'white';
        player1ScoreEl.style.fontSize = '2em';
        player1ScoreEl.style.fontWeight = 'bold';
        player1ScoreEl.style.textShadow = '5px 5px 4px red';
        diceBtnEl.style.display = 'none';
        diceTitleEl.innerHTML = 'Player 2 wins!';
        diceTitleEl.style.fontSize = '4em';
        resetBtn.style.display = 'block';
    }
}