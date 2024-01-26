const vocali = ["a","o","i","e","u"];

let str = prompt("scrivi qlc")
let nrVocali = 0;

for (var i = 0; i < str.length; i++) {
    if (vocali.includes(str[i])) nrVocali++;
};
console.log(nrVocali);