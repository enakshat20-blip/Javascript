// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2">1);
// console.log("02">1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/* the reason is equality == check and the comapriosn <,>,>= works differently.
comparison treat null as 0 thats why null==0 is false and null>=0 is true*/


// === strict check this will check datatypes too

console.log("2" == 2); // True because is convert "2" to no and then comapre it 
console.log("2" === 2); //false because it dont convert "2" to no. and check its datatype too
