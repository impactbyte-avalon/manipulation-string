//assignment for level 0 and level 1
const name ="Adrian Pradana"
const age  ="19 Tahun"
console.log("Halo nama saya "+name+"Usia saya "+age)


//this is assignment for level 2
function capitalize(str) {
    var tempArray = str; //membuat string berspasi
    var newArray = [];//memasukkan array kapital

    for (var i= 0; i < tempArray.length; i++) {
      newArray.push(tempArray[i].charAt(0).toUpperCase() + tempArray[i].slice(1));
    }
  return newArray.join('');
 }

console.log(capitalize("lord megatron"));



//this is assignment for level 3
function title(str1) {
    var tempArray = str1.split(' '); //membuat string berspasi
    var newArray = [];//memasukkan array kapital

    for (var i= 0; i < tempArray.length; i++) {
      newArray.push(tempArray[i].charAt(0).toUpperCase() + tempArray[i].slice(1));
    }
  return newArray.join(' ');
 }

console.log(title("i am megatron"));
