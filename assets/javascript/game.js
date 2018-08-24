//DOM elements

var doubleWord = ['a','b','c',
'd','e','f',
'g','h','i',
'j','k','l',
'm','n','o',
'p','q','r',
's','t','u',
'v','w','x',
'y','z'];
var wordBank = ["green", "geller", "bing", "buffay","tribbiani"];
//Choose word randomly
var selectWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // i_ _ _
var wrongLetters = [];

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;
var rightGuessCounter = 0;

///Functions that I will call upon when needed

function startGame () {
    selectWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

//Reset
letterGuessed = 0;
rightGuessCounter = 0;
guessesLeft = 10;
wrongLetters = [];
blanksAndSuccesses = [];
doubleWord = ['a','b','c',
'd','e','f',
'g','h','i',
'j','k','l',
'm','n','o',
'p','q','r',
's','t','u',
'v','w','x',
'y','z'];

test=false;
startGame();
}
function startGame()
{
    //Chooses word randomy from wordBank
    selectWord = wordBank [Math.floor(Math.random()*wordBank.length)];
    //Splits chosen word into letters
    lettersInWord = selectWord.split("");
    //Get number of blanks
    numBlanks = lettersInWord.length;

    //Reset
    rightGuessCounter = 0;
    guessesLeft = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];
    doubleWord = ['a','b','c',
    'd','e','f',
    'g','h','i',
    'j','k','l',
    'm','n','o',
    'p','q','r',
    's','t','u',
    'v','w','x',
    'y','z'];

    //populate blanks
    for(var i = 0; i<numBlanks; i++)
    {
        blanksAndSuccesses.push("_");
        document.getElementById("wordToGuess").innerHTML=blanksAndSuccesses;
    }
//changes HTML
document.getElementById ("wordToGuess").innerHTML = blanksAndSuccesses.join (" ");
document.getElementById ("numGuesses").innerHTML = guessesLeft; 
document.getElementById ("winCounter").innerHTML = winCount;
document.getElementById ("lossCounter").innerHTML = lossCount;
document.getElementById ("wrongGuesses").innerHTML=wrongLetters;

//Testing
console.log(selectWord);
console.log (lettersInWord);
console.log (numBlanks);
console.log (blanksAndSuccesses);

}

function compareLetters (userKey)
{
    console.log ("Working!");
    //if user key exist in selected word then perform this function
    if (selectWord.indexOf(userKey) > -1)
    {
        //Loops 
        for (var i=0; i<numBlanks; i++)
        {
            //fills in right index with user key
            if (lettersInWord[i] === userKey)
            {
                rightGuessCounter++;
                blanksAndSuccesses[i] = userKey;
                document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join ("");
            }
        }
        //test
        console.log(blanksAndSuccesses);
    }
    //incorrect keys
    else
    {   
        wrongLetters.push(userKey);
        guessesLeft--;
        
        document.getElementById("numGuesses").innerHTML = guessesLeft;
        document.getElementById("wrongGuesses").innerHTML = wrongLetters;
        //test
        console.log("Wrong Letters = " + wrongLetters);
        console.log("Guesses Left are " + guessesLeft);

    }
}

function winLose()

{
    // When user wins
	if(rightGuessCounter === numBlanks)
	{
		//Counts Wins 
		winCount++;
		//Changes HTML
		document.getElementById("winCounter").innerHTML = winCount;
		alert("You Win!");
		reset();
	}
	// When user loses
	else if(guessesLeft === 0)
	{
		//Counts losses
		loseCount++;
		//Changes HTML
		document.getElementById("lossCounter").innerHTML = loseCount;
		alert("You Lose!");
		reset();
	}
}

//main	
//Initiates the Code
startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < doubleWord.length; i++);
	{	
		if(letterGuessed === doubleWord[i] && test === true)
		{
			var spliceDword = doubleWord.splice(i,1);
			//Test / Debug
			console.log('Double word is = ' + doubleWord[i])
			console.log('Spliced Word is = ' + spliceDword);

			compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}




