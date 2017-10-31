// JavaScript level 0
// Create variables, assign number, log

var numberA = 10
let numberB = 099
const numberC = 0.02

console.log(numberA);
console.log(numberB);
console.log(numberC);

// JavaScript level 1

console.log(numberC + numberB);
console.log(numberC - numberB);
console.log(numberC * numberB);
console.log(numberC / numberB);
console.log(numberC % numberB);

// JavaScript level 2
// operators on other types

console.log(true + false);
console.log(true - false);
console.log(false - true);
console.log((5 < 2 < 1) - (5 < 2 > 1));
console.log(false - true);

// JavaScript level 3
// Combine, push, or pop

//Concatination
var AbahAhmad = ["Cecilie", "Lone"];
var PapaJoni = ["Emil", "Tobias", "Linus"];
var children = AbahAhmad.concat(PapaJoni);

console.log(children);

//join
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();
console.log(energy);

//push

fruits.push("Durian");
console.log(fruits);

//pop

fruits.pop(0);
console.log(fruits);

// splice

var index = fruits.indexOf(1);
if (index > -1) {
  fruits.splice(index, 1);
}
console.log(fruits);

// shift

fruits.shift();
console.log(fruits);

// unshift

fruits.unshift("Jackfruit", "Lemon");
console.log(fruits);

// Loop
// for Loop

for (i = 0; i < fruits.length; i++) {
  console.log("organic" + ' ' + fruits[i]);;
}

// while Loop

console.log("--------------------------");

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;

do {
  car = cars[i]
  console.log("Diesel" + ' ' + car);
  i++;
}
while (i < cars.length);
