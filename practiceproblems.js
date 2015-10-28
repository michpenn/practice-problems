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
var myArray = ['hello', 45, 'Bob', 'what', '23'];

function arrayReverse(anArrayToReverse) {
    var reversedArray = [];
    var wordHolder;
    for (i = (anArrayToReverse.length - 1); i >= 0;) {
        wordHolder = anArrayToReverse[i];
        reversedArray.push(wordHolder);
        i--;
    }
    console.log(reversedArray);
}

arrayReverse(myArray);

/**
 * Practice Problem 3
 * @param futureMultidimensionalArray
 */
var multiTypeArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function oneToMulti(futureMultidimensionalArray) {
    var multiarray = [];
    var arrayString = [];
    var arrayNumber = [];
    var arrayBoolean = [];
    var checkTheType;
    for (i = 0; i < futureMultidimensionalArray.length; i++) {
        checkTheType = futureMultidimensionalArray[i];
        switch (typeof checkTheType) {
            case 'string':
                arrayString.push(checkTheType);
                break;
            case 'number':
                arrayNumber.push(checkTheType);
                break;
            case 'boolean':
                arrayBoolean.push(checkTheType);
                break;
        }

    }
    multiarray.push(arrayString);
    multiarray.push(arrayNumber);
    multiarray.push(arrayBoolean);
    console.log(multiarray);
}

oneToMulti(multiTypeArray);

/**
 * Practice Problem 4
 * @type {string[]}
 */
var arrayToAlphabetize = ['mouse', 'cat', 'dog', 'human'];

function alphabetize(soonToBeAtoZ) {
    var temp;
    do {
        temp = false;
        for (var i = 0; i < soonToBeAtoZ.length - 1; i++) {
            if (soonToBeAtoZ[i] > soonToBeAtoZ[i + 1]) {
                var temp2 = soonToBeAtoZ[i];
                soonToBeAtoZ[i] = soonToBeAtoZ[i + 1];
                soonToBeAtoZ[i + 1] = temp2;
                temp = true;
            }
        }
    } while (temp);
    console.log(soonToBeAtoZ)
}

alphabetize(arrayToAlphabetize);

/**
 * Practice Problem 5
 */
function fizzBuzz() {
    for (i = 0; i <= 100; i++) {
        if ((i % 15) == 0) {
            console.log('FizzBuzz');
        }
        else if ((i % 3) == 0) {
            console.log('Fizz');
        }
        else if ((i % 5) == 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz();

/**
 * Practice Problem 6
 * @type {Array}
 */
var fib = [];
var fib2;

function fibSequence(number) {
    var newValue;
    var counter = number;
    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i < counter; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        newValue = fib[i];
        fib.push(newValue);
    }
    fib2 = fib.join();
    console.log(fib2);
}

fibSequence(12);


var split;
var splitTwo;
var firstLetter = '';
var ay;
var piggy = [];
function translatePig(string) {
    split = string.split(" ");
    console.log(split);
    for (var i = 0; i < split.length; i++) {
        firstLetter = '';
        splitTwo = split[i].split("");
        firstLetter += splitTwo[0];
        splitTwo.shift();
        splitTwo.push(firstLetter);
        splitTwo = splitTwo.join("").toLowerCase();
        ay = splitTwo + 'ay ';
        piggy.push(ay);
    }
    console.log(piggy);
    string = piggy.join("");
    console.log(string);
}

translatePig('What a beautiful morning');
