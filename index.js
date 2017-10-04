// Level 0 Sentences

const Kevin = "Hello"
const Angel = "Hey.."
const Kevin1 = "What's your name?"
const Angel1 = "I'm Angel, And You?"
const Kevin2 = "Hey Angel.. I'm Kevin"
const Kevin3 = "Nice To Meet You!"

console.log("Kevin:", Kevin)
console.log("Angel:",Angel)
console.log("Kevin:",Kevin1)
console.log("Angel:",Angel1)
console.log("Kevin:",Kevin2)
console.log("Kevin:",Kevin3)

// Level 1 UpperCase

const A = "jomblo itu"
const B = "malam"
const C = "mingGu"
const D = "tiDur aja!"

const E = `${A} ${B} ${C} ${D}`

//Level 2 LowerCase
E.toUpperCase();
console.log(E.toUpperCase());
E.toLowerCase();
console.log(E.toLowerCase());

//Level 3 TitleCase

function toTitleCase(E)
{
    return E.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

}
console.log (toTitleCase(E));