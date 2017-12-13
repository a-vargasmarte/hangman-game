//global scope

//general rules
/*Rules:
* the goal is to guess a random word pulled from an array of words 
(aka a word bank) with a limited number of attempts.
	* 10 guesses for easy
	* 8 guesses for medium
	* 6 guesses for hard
* As you guess letters of each word, they appear in their written order.
* If you run out of attempts, you lose and a new word is picked.
* If you guess before running out of attempts then you win, your score goes up by one, and you get a new word.*/

//Press any key to begin! This is how the game starts

/*document.onkeyup = function(event) {
	
	//the user presses any key
	
	let anyKey = event.key;*/

	//And the game starts, prompting content to appear

	//variables are declared
	let wins = 0;
	let guesses = 10; //start with easy difficulty but this will change later
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


	//prompting a new random word from the wordBank array
	let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	console.log(randomWord);



	 
	//this randomWord is placed in a new div, which is appended in its parent
	//div

	/*let firstDiv = $("<div>");
	firstDiv.text("this is the first random word: " + randomWord);
	

	$("#global-div").append(firstDiv);*/

	//so far the word shows, but for the game, the word should show as `_ _ _`

		for (i=0; i<randomWord.length;i++) {
			randomWord[i] = "_ ";
		};
	

			

	//for this I would need to extract each character of the chosen random
	//word, appending each character next to each other, ensuring that they
	//have hidden visibility. These must also have underlines to show the
	//player the length of the random word.





	//the user now has to guess his/hers first letter

	/*document.onkeyup = function(event) {

		//the user makes his/hers  first guess
		let userGuess = event.key;

		//if the pressed key matches any character of the randomWord
		//then it appears on a div

		//else, this letter gets attached below 'guessed letters'


	};*/

//};



