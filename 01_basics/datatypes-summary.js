// Primitive

// 7 types : String, Boolean, Numbers, Bigint, Null, Undifined, Symbol

const score = 100;
const scoreValue = 100.3;

const isLoggedIn =  false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherid = Symbol('123');

console.log(id == anotherid)

const Bignumber = 123654786548n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"];
let myobj = {
    name: "Akshat",
    age: 22,
}

let Myfunction = function(){
    console.log("Hello world")
}

console.log(typeof Myfunction);