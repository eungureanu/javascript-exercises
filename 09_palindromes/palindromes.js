const palindromes = function (originalString) {
    originalString=originalString.toLowerCase();
    const regexpLettersOnly=/[a-z]/;
    let lettersOnlyString="";
    for (i=0; i<originalString.length; i++){
        if (originalString[i].match(regexpLettersOnly)){
            lettersOnlyString+=(originalString[i]);
        }
    }
    let newString = "";
    for (i=originalString.length-1; i>=0; i--){
        if (originalString[i].match(regexpLettersOnly)){
            newString+=(originalString[i]);
        }
    }
    return (newString==lettersOnlyString);
};

palindromes ("racecar");

// Do not edit below this line
module.exports = palindromes;
