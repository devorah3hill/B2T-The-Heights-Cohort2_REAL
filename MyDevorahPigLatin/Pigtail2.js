function makePigLatin()
{
    // Begins the game by getting word input from user
    var word = prompt("Give me a word, so we can play!!");

    // If a blank entry, let the user know
    if (word=="")
    {
        alert("Come on, write something! It will be fun!");
        location.reload();
        // Because of the location.reload(), then script will exit here
        // But I want to be a good programmer, so I will put the rest in an ELSE statement
    }
    else
    {    
        // Get the first character of the word, change it to lowercase to simplify comparisions
        var first=word.charAt(0).toLowerCase();
        var rest="";
        var ending="";

        // If word starts with a vowel, make word <word>way ; ex: apple->ppleaway
        if (first=="a" || first=="e" || first=="i" || first=="o" || first=="u")
        {
            rest=word.substr(1,(word.length+1));
            ending="way";
        }
        // Else (word starts with a consonant,) make the word <restofword><consonantpart>ay  ; ex: dog->ogday
        else 
        {
            rest=word.substr(1,(word.length-1));
            ending="ay";
        }

        // Make the pig latin word; Turn all letters to lower case that way the text is not going to look unkFay
        var latin = rest.toLowerCase() + first + ending;

        // Display the pig latin
        document.getElementById("pig").innerHTML=latin;
    }
} // makePigLatin