const name = "Akshat"
const repoCount = 50
// console.log(name +  repoCount  + " Value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName =  new String('akshat-ac-acr')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.trimStart());
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));// to find which charcter at 2 postion 

console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4) //ignore negactive value output is aksh
console.log(newString);
const anotherString = gameName.slice(-8,4) // dont ignore negative value output is ksh start from reverse
console.log(anotherString)

const anotherStringone = "  Akshat  "
console.log(anotherStringone);
console.log(anotherStringone.trim()); // to remove blank space
console.log(anotherStringone.trimEnd());
console.log(anotherStringone.trimStart());


const url = "hhtps://akshatacharya@%20gmail.com"
console.log(url.replace('%20','-')); // to replace any blank space or word from the givern user url
console.log(url.includes('akshat')) // to find anything from the user input

console.log(gameName.split('-')); //to change string to array