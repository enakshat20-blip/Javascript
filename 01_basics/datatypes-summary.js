// Primitive

// 7 types : String, Boolean, Numbers, Bigint, Null, Undifined, Symbol

const score = 100;
const scoreValue = 100.3;

const isLoggedIn =  false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherid = Symbol('123');
 

console.log(id === anotherid)

//id and anotherid is not same although data in both are same because after using symbol thismake it unique that is why symbol is used 

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

// static memory(primitive data types) heap memory(non primitive array,obj,fun)


let myYoutubename = "Akshat@gmaildotcom"
anothername = myYoutubename;
anothername = "akshat"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Akshat@gmail.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 