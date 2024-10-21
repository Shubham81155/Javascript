let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);


let myCreatedDate = new Date(2024, 8, 24)
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("2024-08-24")
console.log(myCreatedDate2.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth()+1);


newDate.toLocaleString('default',{
    weekday:"long",
    
})