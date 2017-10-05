// helloworld
// lv 0
let sentenceA = 'Hello World'
let sentenceB = "Good Bye"

console.log(sentenceA);
console.log (sentenceB);

//lv 1
const sentenceC = sentenceA + " " + sentenceB
const sentenceD = `${sentenceA} ${sentenceB}`

console.log (sentenceC);
console.log (sentenceD);

//lv 2
sentenceA = sentenceA.toUpperCase();
sentenceB = sentenceB.toUpperCase(); 

//lv 3
let a ="hello world"
let b =a.split(" ")

let c = ""

for(i=0;i<b.length;i++){
    c += b[i].charAt(0).toUpperCase() + b[i].slice(1) + " "
    console.log (b[i].slice(1))
}

console.log(c)