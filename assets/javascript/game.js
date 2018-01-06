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


	//I need to pick a random word from the wordBank 
	let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	function pick(randomWord) {		
		//a random word from wordBank is stored in randomWord 
		
		const hide = () => {
			
			
		};	
			/*console.log(randomWord[i]+=randomWord[i+1]);*/
	};

	

	//for each character of the chosen randomWord, I want to replace its value
	//with a "_ " so that the user knows how many letters the word he/she 
	//has to guess has. for `Alberto` it will look `_ _ _ _ _ _ _`.


	
	
	



	 
	//this randomWord is placed in a new div, which is appended in its parent
	//div


	//so far the word shows, but for the game, the word should show as `_ _ _`	
			

	//for this I would need to extract each character of the chosen random
	//word, appending each character next to each other, ensuring that they
	//have hidden visibility. These must also have underlines to show the
	//player the length of the random word.





	//the user now has to guess his/hers first letter


//};



