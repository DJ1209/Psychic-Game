var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

// to generate random letetr

var randomLetters = Math.floor(Math.random() * alphabets.length);
var computerChoice = alphabets[randomLetters];
console.log("The computer choose " + computerChoice);

// to generate resent key

function reset() {
    document.getElementById("guessesLeft").innerText =  guessesLeft = 9;
    
    guessedLetters = [];
    document.getElementById("guessedLetters").innerText = '';
}

document.onkeyup = function (event) {
    //user makes choice
    var userChoice = event.key;
    //double check userChoice is viable
    var viableChoice = /[a-z]/gi;
    if (!viableChoice.test(userChoice)) {
        alert("please enter a letter");
    }
    else {
        console.log(userChoice);
    }
    //if user guesses the right letter
    if (userChoice !== computerChoice) {
        guessesLeft--;
        document.getElementById("guessesLeft").innerText = guessesLeft;
        document.getElementById("main-text").innerText = "Try again!";
        guessedLetters.push(userChoice);
        document.getElementById("guessedLetters").innerText = guessedLetters;
    } else if (userChoice === computerChoice) {
        wins++;
        alert("You won!");
        document.getElementById("wins").innerText = wins;
        reset();
    }
    if (guessesLeft === 0) {
        losses++;
        document.getElementById("losses").innerText = losses;
        document.getElementById("main-text").innerText = "You lose! Try again";        
        reset();
    }
}