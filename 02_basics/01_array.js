// Array denotes with []

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Ironman", "Thor", "Hulk"]

let myarr2 = new Array(1, 2, 3, 4)

// console.log(myarr2[0]);
// console.log(myHeros[0]);


// Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); 


// slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("c", myArr);

console.log(myn2);

