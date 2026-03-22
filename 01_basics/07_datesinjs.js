// Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toJSON());
// console.log(typeof myDate); // object


// let myCreateddate = new Date(2026, 0, 20)
// let myCreateddate = new Date(2026, 0, 20, 10, 25, 15)
// console.log(myCreateddate.toLocaleString());

let myCreateddate = new Date("01-14-2026")
// console.log(myCreateddate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateddate.getTime());
// console.log(Date.now()/1000) // to convert it into seconds from milliseconds but will give decimal value 
// console.log(Math.floor(Date.now()/1000)) // to convert it into seconds from millisecond and remove decimal by using math.floor

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getYear());
// console.log(newDate.getDate());
// console.log(newDate.getTime());


// to use in industry
//`${newDate.getDay} and the time is ${newDate.getTime}`

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    month: "long",
})
);
