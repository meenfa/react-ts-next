/**
 * not to use Var beacause of the issue on block scope and functional scope.
 * use only let and const
 */
const accountId = 111; 
// const cannot be changed

let accountEmail="hello@email.com";
var accountPass="12345";
let accountCity="Jhapa";

// accountId= 2; => not allowed
accountEmail="second@email.com";
accountCity="Ktm";
accountPass="11111111"
// console.log(accountEmail);
// console.log(accountCity);

let accountState;

console.table([accountCity,accountEmail,accountId,accountPass,accountState])


