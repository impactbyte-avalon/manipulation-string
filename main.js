const sentenceA = "Be kind to your brother";
const sentenceB = "-foted ";

var noun = "Rope";
var pluralNoun = "dresses";

var completeSentence = sentenceA + noun + sentenceB + pluralNoun;

/**************LEVEL 0***************/
console.log(sentenceA); 



/**************LEVEL 1***************/
console.log(completeSentence);



/**************LEVEL 2***************/
console.log(completeSentence.toUpperCase());
console.log(completeSentence.toLowerCase());



/**************LEVEL 3***************/
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}

console.log(titleCase("hAfIdZ ilHam aJi peRmAna"));