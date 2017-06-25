export default {

	capitalizeFirstLetter: (sentence) => {

		return sentence.charAt(0).toUpperCase() + sentence.slice(1);
	},

	capitalizeFirstLetterOfEachWord: (sentence) => {

		var newSentence = "";
		var wordsArray = sentence.split(" ");
		
		for(var i = 0; i < wordsArray.length; i++) {

			newSentence += wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
			newSentence += " ";
		}

		return newSentence;
	}
}