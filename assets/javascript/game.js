let possibleWords = ["retro", "delorean", "neon", "dystopia"];
var random = Math.floor(Math.random() * possibleWords.length);
let currentWord ='neon';
let wins = 0;
console.log(currentWord)
var lettersGuessed = [];
console.log(lettersGuessed)


function initGame(){
   assignCurrentWord()
   eventListener()
   updateDOM()
}

initGame()
function wordHasBeenGuessed(){
    for(let i=0; i < currentWord.length; i++){
        if(lettersGuessed.includes(currentWord[i])){
    
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

function eventListener(){
    document.onkeyup = function(event){
        lettersGuessed.push(event.key)
        if(wordHasBeenGuessed()){
            wins++
            document.getElementById('current-wins').text = wins
            initGame()
        }
        updateDOM()
        console.log(wins)
    }
}

//update DOM
function updateDOM(){;
    showLetterOrDash()
    document.getElementById("current-letters")
}

// display letters or dashes also checks for condition
function showLetterOrDash(){
    let displayWord = ' '
    for(let i = 0; i< currentWord.length; i++){
        if(lettersGuessed.includes(currentWord[i])){
            displayWord = displayWord + currentWord[i] + ' '
        } else {
            console.log(displayWord)
            displayWord = displayWord + '_' + ' '
        }
    }
    document.getElementById('current-word').textContent = displayWord
}
                
                



    