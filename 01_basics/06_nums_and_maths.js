const score = 400
//console.log(score)
const balance = new Number(1000)
// console.log(balance);

// console.log(balance.toString()) // to change no. to string  
// console.log(balance.toString().length) // to also get length
// console.log(balance.toFixed(5)) // to get precise value 

const otherNumber = 122.8933

//console.log(otherNumber.toPrecision(3)); // to get precision roundoff the output will be 123

const hundreds = 1000000
// console.log(hundreds.toLocaleString())//by default it is set to U.S 
// console.log(hundreds.toLocaleString('en-IN')); // to change it to india's 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++



// console.log(Math);// object that hold so many math property ITS A LIBRARY
// console.log(Math.abs(-4));// change negative value to positive 
// console.log(Math.round(4.6)); // give round-off value
// console.log(Math.ceil(4.2)); // only choose top value
// console.log(Math.floor(4.2)); // only choose floor/lowest value
// console.log(Math.min(4,3,7,4,6));// give minimum value
// console.log(Math.max(4,3,7,4,6));// give maximum value  

console.log(Math.random()); //always give value between 0 and 1
console.log(Math.random() *10 + 1); //TO get value o and 10 by multiplying with 10 and to make sure didnt get value 0 add 1 (used in game where we need random values)
console.log(Math.floor(Math.random() *10 + 1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + max);
