const accountId = 144553
let accountEmail = "akshat@gmail.com"
var accountPassword = "12345"
acccountCity = "Indore"
let accountState;

// accountId = 2 not allowed 

accountEmail = "akah@gmail.com"
accountPassword = "54321"
acccountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
beacause of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,acccountCity,accountState])
