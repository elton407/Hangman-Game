
//array of movies 

var WORDS = [
	"mortage",
	"fees",
	"loans",
	"interest",
	"crooks"
];

//stored word we want player to guess

var word = "";

//answer bored that gets filled
var answerArray = [];

var guessesLeft = 8;

var wrongGuesses = [];

var gamesOne = 0;



function init(){
	//picks random word out of WORDS array with random math function
	word=WORDS[Math.floor(Math.random()* WORDS.length)];

	answerArray = [];
	for (i =0; i < word.length; i++) {
		answerArray[i] = "__";
	}

	//removes comma between __ (underscore) and prints to htm
	document.getElementById("answer").innerHTML = answerArray.join(" ");
	document.getElementById("message").innerHTML = "Type a letter then press guess, quit if your a loser!"
}
init();

function guessOne (){
	//Takes players input
	var guess = document.getElementById("guess").value;
	var showThisMessage = "";
	var correctLetter = false;
	//if more then one letter message will pop up
	if (guess.length !== 1){ 
		showThisMessage = "Please only enter one letter";
	} else {
			var i = 0;
			for (i = 0; i < word.length; i++){
				if (word[i] === guess) {
					answerArray[i] = guess;
					correctLetter = true;
					showThisMessage = "Getting Closer! "+guess+" is correct!"

				}
			}
		

		//Updates unknown still left
		var remaining_letters = answerArray.length;

		for (i = 0; i < answerArray.length; i++){
			if (answerArray[i] !== "__") {
				remaining_letters -=1;
			}
		}
	
	//no more letters you win
	if (remaining_letters == 0) {
		showThisMessage = "congratulations you win!"
	}

	if (remaining_letters == 0) {
		gamesOne ++;
	}

	if (showThisMessage === "") {
		showThisMessage = "sorry, no "+guess;
	}

	//update game
	document.getElementById("gamesWon").innerHTML = gamesOne;
	document.getElementById("answer").innerHTML = answerArray.join(" ");

	//clear last letter guessed

	document.getElementById("guess").value = "";
}
	if (correctLetter == false) {
	wrongGuesses.push(guess);
	}

if (correctLetter == false) {
	guessesLeft--;

}



if (guessesLeft == 6) {
	document.getElementById("hangman").src="assets/images/noose.jpg"
}
if (guessesLeft == 5) {
	document.getElementById("hangman").src="assets/images/hangmanhead.jpg"
}
if (guessesLeft == 4) {
	document.getElementById("hangman").src="assets/images/hangmanarm2.jpg"
}
if (guessesLeft == 3) {
	document.getElementById("hangman").src="assets/images/hangmanarm1.jpg"
}
if (guessesLeft == 2) {
	document.getElementById("hangman").src="assets/images/hangmanleg2.jpg"
}
if (guessesLeft == 1) {
	document.getElementById("hangman").src="assets/images/hangmanleg1.jpg"
}
if (guessesLeft == 0) {
	document.getElementById("hangman").src="assets/images/hangmanmain.jpg"
}


document.getElementById("guessWrong").innerHTML = wrongGuesses;
document.getElementById("wordsGuessed").innerHTML = guessesLeft;
document.getElementById("message").innerHTML = showThisMessage;
}
guessOne();








