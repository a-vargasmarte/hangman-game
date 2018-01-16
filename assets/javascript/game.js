//global scope

/*Rules:
1 the goal is to guess a random word pulled from an array of words 
(aka a word bank) with a limited number of attempts.
	* 10 guesses for easy
	* 8 guesses for medium
	* 6 guesses for hard
2 As you guess letters of each word, they appear in their written order.
3 If you run out of attempts, you lose and a new word is picked.
4 If you guess before running out of attempts then you win, your score goes up by one, and you get a new word.*/
	
//let's pretend these variables just exist


$(document).ready(function() {
let wins = 0;
let losses = 0;
let guessesLeft = 10; //start with easy difficulty but this will change later
let wordBank = ['grenadine','pomegranate','hefty','gladiolus','pelter',
			'concretize','manikin','canvass','lubberly','cordial','jocular',
			'Utopian','tamp','subnormality','obbligato','woodsy','ha-ha',
			'stevedore','effervescence','bromidic','canoodle','satrap',
			'congeries','twain','kittiwake','polysemy','madrigal','bollard',
			'parvenu','bowdlerize','mountebank','hauteur','asphodel',
			'annulment','quasi','Yugoslavia','paleobotany','cephalopodan',
			'Serbian','tribunal','ague','Netherlands','Bosnian','Albanian',
			'Kosovo','Chile','humiliating','Suharto','contemplate','Peruvian',
			'oust','Saddam Hussein','subsequently','massacre','civilian',
			'revolt','fascist','revered','regime','Mandela','triumphantly',
			'Pretoria','culminate','assassinated','Ferdinand I','Suharto',
			'Burmese','Beijing','Kyrgyzstan','Venezuela','charismatic','daw',
			'upsurge','suffrage','minimal','insurgency','Sri Lanka','torture',
			'Guatemala','Bangladesh','manipulate','Bolivia','stringent',
			'vulnerable','prod','famine','eradicate'];

let pickedWord = "";
let emptyWord = "";
let tempWord = "";
// we declare a function where we pick a random word from the wordBank array

function pickWord() {
	// we store a random word from wordBank in the randomWord argument
	pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	emptyWord = pickedWord.replace(/./g, "_ ");
	tempWord = emptyWord;	
}

// we then invoke this function
pickWord();

console.log(pickedWord);
// and we show the user this string

// declare a function that will generate html span elements
let spanList = $("<span>");
spanList.attr("id", "spanList");

function generateSpan(span) {
	// for each character of pickedWord...
	for (let i = 0; i < pickedWord.length; i++) {
		// dynamically generate a span html element
		span = $("<span>");
		// set attributes to uniquely identify it
		span.attr("id", "span-number " + i);
		span.attr("class", "gameSpan");
		span.attr("data-letter", pickedWord[i]);
		
		// add a "_" as text
		span.text("_");
		
		// append a space
		span.append(" ");

		// append the spans to spanList
		spanList = spanList.append(span)
	}
	$("#wordDiv").append(spanList);
}

generateSpan();

let userInput = "";
let gameSpan = document.getElementsByClassName("gameSpan");
console.log(gameSpan[0].dataset.letter);


// we declare an onkeyup() event handler indicating what happens as users guess letters

let newGuess = guessesLeft--;
function decreaseGuess() {
	newGuess = guessesLeft--;
}

let newLoss = losses++;

function lose() {
	newLoss = losses++;
}

function win() {
	newWin = wins++;
}

let rightGuesses = [];

document.onkeyup = function(event) {
	// determine which key was pressed, make it to lowercase, and set it to the userInput variable
	userInput = String.fromCharCode(event.keyCode).toLowerCase();
	
	// check if userInput is included in pickedWord
	let isIncluded = pickedWord.includes(userInput);
	console.log(isIncluded);

	if (isIncluded === false) {
		// guesses left go down by one.
		decreaseGuess();
		// append newGuess on the "losses" div 
		$("#guessRemain").text("Guesses Left: " + newGuess);
		console.log(newGuess);
		if (newGuess === 0) {
			lose();
			$("#losses").text("Losses: " + newLoss);
			guessesLeft = 10;
			console.log(guessesLeft);
			pickWord();
			console.log(pickedWord);
			$("#spanList").empty();
			generateSpan();
		}
	}


	// for each letter in pickedWord...
	for (let i = 0; i < pickedWord.length; i++) {
		// if the userInput equates the letter data attribute in gameSpan[i]... 
		if (userInput === gameSpan[i].dataset.letter) {
		console.log('they actually are equal');
		gameSpan[i].innerHTML = userInput;
		rightGuesses.push(pickedWord[i]);
		console.log(rightGuesses);	 
		}
	}
	
	// if the length of rightGuesses equates the length of pickedWord...
	if (rightGuesses.length === pickedWord.length) {
		// the game is won!
		win();
		$("#wins").text("Wins: " + newWin);
		guessesLeft = 10;
		rightGuesses = [];
		// we pick a new word
		pickWord();
		console.log(pickedWord);
		$("#spanList").empty();
		generateSpan();
	}

}	
});