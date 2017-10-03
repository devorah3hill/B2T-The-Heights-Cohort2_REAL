//Begins the game by getting word input from user
var word = prompt("Give me a word, so we can play!!");

if (word == ""){
    //Not letting the user enter an empty string
    alert("Come on, write something! It will be fun!");
    location.reload();

}else if (word.charAt(0) == ("a") || word.charAt(0) == ("e") || word.charAt(0) == ("i") || word.charAt(0) == ("o") || word.charAt(0) == ("u")){
   var first = word.charAt(0);
    var rest = word.substr(1,(word.length +1));
    //Turning all letters to lower case that way the text is not going to look unkFay
    var latin = rest.toLowerCase() + first.toLowerCase() + "way";
    

} else if (word.charAt(0) == ("A") || word.charAt(0) == ("E") || word.charAt(0) == ("I") || word.charAt(0) == ("O") || word.charAt(0) == ("U")){
    
    

} else {
    var first = word.charAt(0);
    var rest = word.substr(1,(word.length - 1));
    //Turning all letters to lower case that way the text is not going to look unkFay
    var latin = rest.toLowerCase() + first.toLowerCase() + "ay";

    //console.log(rest.toLowerCase() + first.toLowerCase() + "ay"); //for testing purposes
    //console.log(latin); //for testing purposes
    document.getElementById("pig").innerHTML = latin;
}


