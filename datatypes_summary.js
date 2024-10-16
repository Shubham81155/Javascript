// primitive
// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 325432364545634564n



//Reference(Non primitive)

//Array, Objects, Functions

const heros = ["Spiderman","Salman","Ajay"]
let myobj={
    name:"Shubham",
    Age: 21,
}

const myFunction = function()
{
console.log("Hello World");

}
console.log(typeof outsideTempr);


// ***************************************************
//Stack(primitive) And Heap(Non-primitive)

let myname="Shubham"

let anothername = myname
anothername = "subu"
console.log(myname);
console.log(anothername);

let user ={
    email:"user2gmail.com",
    UPi: "user@ybl"
}
let user2 = user

user2.email= "user2@gmail.com"
console.log(user.email);
console.log(user2.email);


