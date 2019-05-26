const possibleWords = ["cat", "dog", "lizard", "bear"];
var random = Math.floor(Math.random() * possibleWords.length);
let chosenWord = possibleWords[random];
var underScore = [];
console.log(chosenWord)


function initGame(){
    setUnderScore()
}

initGame()

//create underscores based on word length
function setUnderScore(){
    for(let i = 0; i < chosenWord.length; i++){
        underScore.push(' _ ' +' ' + ' ')
        console.log(chosenWord)
        document.getElementById("word").innerText = underScore;
        console.log(underScore)
    }
}