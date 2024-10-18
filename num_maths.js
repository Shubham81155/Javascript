const score=10009
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));


const otherNumber = 1123.3423
console.log(otherNumber.toPrecision(4));


const human =100000
console.log(human.toLocaleString('en-IN'));
//************************************** */

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(5.5));

console.log(Math.ceil(7.5));
console.log(Math.floor(7.5));
console.log(Math.min(-5,4,6,8,6));

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min +1))+ min)