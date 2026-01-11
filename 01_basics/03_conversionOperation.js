let score = true

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN (Not a Number)// type is number
// null => 0
// undefiend => NaN
// boolean true,false => 1,0

let isLoggedIn = "Akshat"
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "Akshat" => true

let SomeNumber = 33
let StringNumber = String(SomeNumber)
console.log(StringNumber);
console.log(typeof StringNumber);

// ************************* Operations ************************* 

let value = 3
let negValue = -value
// console.log(negValue)
//console.log negative value

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2 = " Akshat"

let str3 = str1 + str2;
// console.log(str3);

// console.log("1"+ 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true)
// console.log(+"")


let num1, num2, num3;
num1 = num2 = num3 = 2+2; // not ideal way code should be readable

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
