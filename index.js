//declare some sentences
const sentenceA = "Hello World!"
const sentenceB = "Good Bye!"

//declare some new sentences
const sentenceC = sentenceA + " " + sentenceB

const sentenceD = `${sentenceA} ${sentenceB}`

//uppercase
sentenceA.toUpperCase();
sentenceB.toUpperCase();

//lowercase
sentenceA.toLowerCase();
sentenceB.toLowerCase();

//titleCase
function toTitleCase(sentenceA) {
  return sentenceA.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(toTitleCase(sentenceA))

//output
console.log(sentenceA)
console.log(sentenceB)
console.log(sentenceC)
