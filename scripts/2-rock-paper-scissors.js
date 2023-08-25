let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

updateScoreElement();

// document.querySelector('.js-result').innerHTML = `${result}`;

/*
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0,
    }
}
*/

function playGame(PlayerMove) {
    computerMove = pickComputerMove();
    
    let result = '';
    
    if (PlayerMove === 'rock' ) {
        
        // computerMove = pickComputerMove();
        // let result = '';
        
        if(computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You loose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    } else if (PlayerMove === 'paper') {
        
        // computerMove = pickComputerMove();
        
        // let result = '';
        
        if(computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You loose.';
        }
    } else if (PlayerMove === 'scissors') {
        
        // computerMove = pickComputerMove();
        
        // let result = '';
        
        if(computerMove === 'rock') {
            result = 'You loose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    }
    
    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You loose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }
    
    updateScoreElement();
    
    document.querySelector('.js-result').innerHTML = result;
    
    document.querySelector('.js-moves').innerHTML = `You 
    <img src="images/${PlayerMove}-emoji.png" class="move-icon"> 
    <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
    
    localStorage.setItem('score', JSON.stringify(score));
    
    /*  alert(`You picked ${PlayerMove}. Computer picked ${computerMove}. ${result}
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`);
    */
}



function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}



function pickComputerMove() {
    const randomNumber = Math.random();
    
    let computerMove = '';
    
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}
