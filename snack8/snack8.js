console.log("ok");
const products = [
    { title: 'Mela', price: 2.30},
    { title: 'Banana', price: 1.50 },
    { title: 'Mango', price: 2},
    { title: 'Pesca', price: 1.80},
    { title: 'Pera', price: 1.50},
    { title: 'Arancia', price: 2.20}
];
let finalPrice = 0;
let user = parseInt(prompt("con quanti elementi vuoi la macedonia? "))
const isertedFtruit = [];

for(let i = 0; isertedFtruit.length < user ; i++){
    
    let indexFruit = Math.floor(Math.random()* 6);
    isertedFtruit.push(products[indexFruit]);
    finalPrice += products[indexFruit].price
}

console.table(isertedFtruit);
console.log( finalPrice);
