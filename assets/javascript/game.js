const possibleWords = ["retro", "delorean", "neon", "dystopia"];
var random = Math.floor(Math.random() * possibleWords.length);
let chosenWord = possibleWords[random];
var underScore = [];
var lettersGuessed = [];


function initGame(){
    setUnderScore()
    keyUpListener()
}

initGame()

//create underscores based on word length
function setUnderScore(){
    for(let i = 0; i < chosenWord.length; i++){
        underScore.push(' _ ' +' ' + ' ')
        document.getElementById("word").innerText = underScore;
    }
}



//create a key listener event that listens for keyup 
function keyUpListener(){
    var guessedWord = document.getElementById('word')
    document.onkeyup = function(event){
        lettersGuessed.push(event.key)
        for(i = 0; i < guessedWord.lentgh; i++){
            if(lettersGuessed.includes(chosenWord[i])){
                chosenWord = chosenWord + guessedWord[i] + ' '
            }
        }
        document.getElementById('word').textContent = lettersGuessed[i] + underScore;
        console.log(lettersGuessed)
    }
}
    