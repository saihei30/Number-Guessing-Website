'use strict';

/*
console.log(document.querySelector('.message').
textContent);
document.querySelector('.message').textContent = '🎉  Correct Number!'; // Already a DOM application

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value) // reading the value
*/











let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;0
let highScore = 0;

// the reset button (again)
document.querySelector('.again').addEventListener
('click', function(){
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.message').textContent = 'Start guessing...'

    score = 20;
    document.querySelector('.score').textContent = score;

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';
    
})

// playing the game
document.querySelector('.check').addEventListener
('click', function (){                                      //after input the value, click and then log the 
    const guess = Number(document.querySelector('.guess').value);    //value to the console
    console.log(guess, typeof guess)

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

    // When there is no input 
    if(!guess){

        // document.querySelector('.message').textContent = '⛔  No Number';
        displayMessage('⛔  No Number');
      //when player wins  
    } else if (guess === secretNumber){

        // document.querySelector('.message').textContent = '🎉  Correct Number!';
        displayMessage('🎉  Correct Number!');

        document.querySelector('.number').textContent =  secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore =score;
            document.querySelector('.highscore').textContent = highScore;
        }

       // when guess is wrong
    } else if(guess !== secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ?'❌  Too high!': '❌  Too low!';
            displayMessage(guess > secretNumber ?'❌  Too high!': '❌  Too low!')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '😥  You lose the game!';
            displayMessage('😥  You lose the game!')
            
            document.querySelector('.score').textContent = 0;
        }
    }
})



    // // when guess is too high 
    // else if (guess > secretNumber){

    //     if(score > 1){
    //         document.querySelector('.message').textContent = '❌  Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😥  You lose the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    //   // when guess is too low  
    // } else if (guess < secretNumber){

    //     if(score > 1){
    //         document.querySelector('.message').textContent = '❌  Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😥  You lose the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

// }});
