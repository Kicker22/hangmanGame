
// database of random words
var wordDataBase = ["retro", "delorean", "kungfurry", "neon" ]


// chooses a random word from data base
function currentWord(){
    // loop my database 
    for(i = 0; i < wordDataBase.length; i++){
        console.log(wordDataBase[i]);
        //changes DOM for specified id
        var newWord = wordDataBase[Math.floor(Math.random() * wordDataBase.length)];
        document.getElementById("word").innerHTML = newWord;
    }
}

// function that shows letters instread of dashes
function showDashes(){
    let displayWord = '';
    for(d = 0; d < wordDataBase.length; i++){
        displayWord = displayWord + '_' +' '
        document.getElementById("word").textContent = displayWord;
    }
}

//calls function

currentWord()
showDashes()
// listens for user keyup 

// compares user input to chosen word and checks if correct

// keeps track of user hits and misses

// displays image based on word guessed 