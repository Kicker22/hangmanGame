let possibleWords = ["cleric","paladin", "dungeon", "sword", "rouge","dice","critical", "dragon", "elf", "dwarf", "halfling", "gnome", "human", "bard" ,
"druid", "fighter", "ranger"];
var random = Math.floor(Math.random() * possibleWords.length);
let currentWord ='neon';
let wins = 0;
let correctLetters = [];
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

//initial code I made up that sorta worked. but staticaly placed _ for every letter.... so not really
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
            initGame()
        }
        
        shouldGuessesGoDown(e.key)
        // ifUserWins()
        console.log(correctLetters,currentWord, lettersGuessed, guessesRemaining)
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

// function ifUserWins(){
//     for(i = 0; i < currentWord.length; i++)
//     if(lettersGuessed[i] === currentWord.length){

//         alert("critial win!!")
//     }
        
    
// }

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
                
                



    