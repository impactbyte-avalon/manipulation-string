const sentenceA = "Hello World!"
const sentenceB = "Good Bye!"
const sentenceC = sentenceA + " " + sentenceB
const sentenceD = `${sentenceA} ${sentenceB}`

console.log(sentenceA)
console.log(sentenceB)

/*
 * Also a comment
 * with multiple lines
 */


console.log(sentenceC)
console.log(sentenceD)

var string1 = "Hello World!";
var result1 = string1.toUpperCase();

var string2 = "Good Bye!";
var result2 = string2.toUpperCase();

console.log(result1)
console.log(result2)

function titleCase(str) {
     str = str.toLowerCase().split(' ');                // will split the string delimited by space into an array of words

     for(var i = 0; i < str.length; i++){               // str.length holds the number of occurrences of the array...
          str[i] = str[i].split('');                    // splits the array occurrence into an array of letters
          str[i][0] = str[i][0].toUpperCase();          // converts the first occurrence of the array to uppercase
          str[i] = str[i].join('');                     // converts the array of letters back into a word.
     }
     return str.join(' ');                              //  converts the array of words back to a sentence.
}

console.log(titleCase("hello goodness"))
