const possibleWords = ["retro", "delorean", "neon", "dystopia"];
var random = Math.floor(Math.random() * possibleWords.length);
let chosenWord = possibleWords[random];
var underScore = [];


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




function keyUpListener(){
var currentWord = document.getElementById('word')
console.log(currentWord)
    document.onkeyup = function(){
        var userGuesses = event.key;
        console.log(userGuesses)

        

    }
}
    