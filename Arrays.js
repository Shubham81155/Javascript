const myarr = [1,2,3,4,5,6,true]
console.log(myarr[0]);
console.log(myarr[4]);
console.log(myarr[2]);

// Array methods

myarr.push(7)
myarr.push(9)
console.log(myarr);

myarr.unshift(10)
console.log(myarr);

myarr.shift(10) 
console.log(myarr);


console.log(myarr.includes(9));
console.log(myarr.indexOf(4));

const newarr = myarr.join()
console.log(myarr);
console.log(typeof newarr);

//slice  ,splice
console.log("A", myarr);
const myn1 = myarr.slice(1,3)
console.log(myn1);
console.log("B", myarr);

const myn2 = myarr.splice(1,3)
console.log(myn2);

console.log(myn2.concat(myn1));


