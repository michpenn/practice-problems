/**
 * Created by michpenn on 10/27/15.
 */
/**
 * Practice Problem 1
 * @type {string[]}
 */
var arrayOfStrings = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];


function biggerWords(theString, theArray) {
    var longWord = '';
    var longArray = [];
    for (i = 0; i < theArray.length; i++) {
        if (theString.length < theArray[i].length) {
            longWord = theArray[i];
            longArray.push(longWord);
        }
    }
    console.log(longArray);
}

biggerWords('hello', arrayOfStrings);

/**
 * Practice Problem 2
 * @param anArrayToReverse
 */
function arrayReverse(anArrayToReverse) {
    var reversedArray=[];
    var wordHolder;
    for (i=(anArrayToReverse.length-1); i>=0;) {
        wordHolder=anArrayToReverse[i];
        reversedArray.push(wordHolder);
        i--;
    }
    console.log(reversedArray);
}

arrayReverse(arrayOfStrings);