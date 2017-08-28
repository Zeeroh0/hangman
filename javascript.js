
var usableWords = ['Arizona', 'California', 'Colorado', 'Washington', 'Arkansas', 'Mississippi', 'Pennsylvania', 'Maine', 'Kentucky', 'Georgia'];
var wins = 0;
var losses = 0;
var errors = 8;
var replaceChoice;
var userInputs = [];
function checkInput (a) {
	for (var i=0; i < userInputs.length; i++) {
		if (a===userInputs[i]) {
			alert("You've already guessed this letter!");
			return;
		} 
	}
	userInputs.push(a);
	document.getElementById("userGuesses").innerHTML = " " + userInputs;

	console.log(userInputs);
}

String.prototype.replaceAt=function(index, replacement) {
	return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

var compChoice;
compChoice = chooseWord(usableWords).toLowerCase();
console.log(compChoice);


//Each itteration obtains an index, looping over each letter in the comp's choice.  Then we test if the letter 
//is equal to our 'l'.  If it IS, than we replace that value on the line with the user's pressed letter. 
function checkLetters(l) {
	var check = compChoice.indexOf(l);
	console.log(check);
	if (check === -1) {
		errors--;
		document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + errors;
	} else {
		for (var i=0; i < compChoice.length; i++) {
			if (compChoice.charAt(i) === l) {
				replaceChoice = replaceChoice.replaceAt(i, l);
				console.log(replaceChoice);
			}
		} 
		document.getElementById("blanks").innerHTML = replaceChoice;
	}
}

function chooseWord (r) {
	return r[Math.floor(Math.random()*r.length)];
}

function resetGame () {
	userInputs = [];
	document.getElementById("userGuesses").innerHTML = " " + userInputs;
	errors = 8;
	compChoice = chooseWord(usableWords).toLowerCase();
	console.log(compChoice);
	replaceChoice = compChoice.replace(/./g, "_");
	document.getElementById("blanks").innerHTML = replaceChoice;
}
resetGame();

document.onkeyup = function(event) {
	var userInput = event.key;
	if (errors > 0 && event.which >= 65 && event.which <= 90) {
		checkInput(userInput);
		checkLetters(userInput);
		if (errors === 0 && event.which >= 65 && event.which <= 90) {
			alert("Try again! The word was " + compChoice);
			losses++;
			document.getElementById("losses").innerHTML = "Losses: " + losses;
			resetGame();
		} 
	} if (replaceChoice.indexOf("_") === -1) {
		alert("A winner is YOU! Now go visit " + compChoice);
		wins++;
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		resetGame();
	}
}


// for (i = 0; i < compChoice.length; i++) {

//}

//Define global variables 
	//Array of computer words to choose from 
	//User's guesses 
	//wins
	//losses

//Computer chooses random word from array w a function 

//Manipulate DOM to have spacing in conjection w the chosen word to have the right amount of spaces 

//Track the users inputs/key strokes 
	//Have they used this letter already? 
	//Is it a matching letter?
	//Manipulate DOM to display the user's letters 
	//Tally user's wrong guesses 

//Check for a win (if all letters of the computer's word are filled)

//Check for a loss (if the remaining guesses are > 1)

//Once they win/lose, tally that. 

//Reset the board 



//User Entries
//onkeyup specific letters 
//.which
//RegX

