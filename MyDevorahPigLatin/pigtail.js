//Begins the game by getting word input from user
var word = prompt("Give me a word, so we can play!!");

functon translatePiglatin(str){

	var vowels = ['A', 'E', 'I', 'U'],
	var pig = str.split('');

	if(vowel.includes([0])){
		return str = 'way';
	}
	else{

		for (var i = 0; i<str.length; i++){

			if (!vowel.includes(str[i])){
				pig.push(pig.shif());
			}
			else{
				pig.push('ay');
				return pig.join('')
			}

		}
	}


