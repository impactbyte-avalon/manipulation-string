// JavaScript level 0

const something1 = "this is something"

const sentenceA = "Hello World!";

const sentenceB = "Good Bye!";

console.log(sentenceA);

console.log(sentenceB);

// JavaScript lv 1
// Concatination

const sentenceC = sentenceA + " " + sentenceB
const sentenceD = `${sentenceA} ${sentenceB}`

console.log(sentenceC);

console.log(sentenceD);


// JavaScript Level 2
// Transform string to uppercase and lowercase

console.log(sentenceC.toUpperCase());

console.log(sentenceD.toUpperCase());

// JavaScript Level 3
// Transform string to title case


const sentenceEE = "hello again"

function titleCase(sentenceEE) {
  return sentenceEE.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
console.log(titleCase(sentenceEE));
