// Data types are generally divided into two types:

// Primitive:
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "Hirdesh";
const num = 123;

const value = Symbol('123')
const value2 = Symbol('123')

const bigNum = 1234578912345678n;

// Non-Primitive (Reference type):
// Array, Objects, Functions

const heroes = ["Shaktimaan", "Naagraz", "Doga"];

let myObj = {
    name: "Hirdesh",
    age: 20
}

const myFunc = function(){
    console.log("Hello World!");
}

// console.log(typeof heroes);
// console.log(typeof myObj);
// console.log(typeof myFunc);

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Memory that used in JS are of two types:
// Stack(Primitive) and Heap(Non Primitive)

let name1 = "Hirdesh";
let name2 = name1;

name2 = "Hello"
console.log(name1);
console.log(name2);

let userOne = {
    name: "Hirdesh",
    email: "hirdesh@google.com"
}

let userTwo = userOne;
userTwo.email = "itshideshk@gmail.com"

console.log(userOne);
console.log(userTwo);