let possibleWords = ["retro", "delorean", "neon", "dystopia"];
var random = Math.floor(Math.random() * possibleWords.length);
let currentWord ='neon';
let wins = 0;
let correctLetters = 0;
let guessesRemaining = 10;
var lettersGuessed = [];


function initGame(){
   assignCurrentWord()
   eventListener()
   updateDOM()
}

// 
initGame()
function wordHasBeenGuessed(){
    for(let i=0; i < currentWord.length; i++){
        if(lettersGuessed.includes(currentWord[i])){
            eventListener()
        } else {
            return false;
        }
        return true;
    }
}
        //initial code i made up thats sorta worked. but staticaly placed _ for every letter 
// //create underscores based on word length
// function setUnderScore(){
//     for(let i = 0; i < chosenWord.length; i++){
//         underScore.push(' _' + '  ' + ' ')
//         document.getElementById("word").innerText = underScore;
//     }
// }


// function that pulls random word from the array
function assignCurrentWord() {
    const index = random;
    currentWord = possibleWords[index]
}

//listens for key up.. then updates the DOM based on user input
function eventListener(){
    document.onkeyup = function(e){
        lettersGuessed.push(e.key)
        if(wordHasBeenGuessed()){
            correctLetters++
            console.log(correctLetters)
            ifUserWins()
            console.log(wins)
            initGame()
        }
        shouldGuessesGoDown(e.key)
        console.log(currentWord, lettersGuessed, guessesRemaining)
        updateDOM()
        checkIfUserLost()
    }
}

//basic if statement to check if remainig guesses is <= zero
function checkIfUserLost(){
    if(guessesRemaining <=0){
        alert("You Lost...");
    }
}

function ifUserWins(){
    if (correctLetters == currentWord.length){
        alert('you Win!')
        wins++
        document.getElementById('current-wins').textContent = wins
    }
}

// this function determins if current word containes keypress letter and if not -1 from remianing guesses
function shouldGuessesGoDown(lettersGuessed){
    if(!currentWord.includes(lettersGuessed)){
        guessesRemaining = guessesRemaining -1;
    }
}



//update DOM
function updateDOM(){
    document.getElementById('remaining-guesses').textContent = guessesRemaining
    document.getElementById("current-letters").textContent = lettersGuessed
    showLetterOrDash()
}

// display letters or dashes also checks for condition
function showLetterOrDash(){
    let displayWord = ' '
    for(let i = 0; i< currentWord.length; i++){
        if(lettersGuessed.includes(currentWord[i])){
            displayWord = displayWord + currentWord[i] + ' '
        } else {
            displayWord = displayWord + '_' + ' '
        }
    }
    document.getElementById('current-word').textContent = displayWord
}
                
                



    