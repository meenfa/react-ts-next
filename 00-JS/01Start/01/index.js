// Template literals:

const age=20;
const name ="Ram";

console.log('my name is ' +name+ ' and my age is ' + age); //old way of string concatenation

console.log(`my name is ${name} and my age is ${age}`); //template literals or modern way of string concatenation

// String methods:

// const game= new String('Ram FC');
// console.log(game[0]);
// console.log(game.__proto__);

// console.log(game.length);
// console.log(game.toLowerCase());
// console.log(game.charAt(3));
// console.log(game.indexOf('m'));

// adding 2 integers in string form
const a=5;
const b=10;

console.log(`sum is : ${a + b}`); //string concatenation

console.log(`sum is : ${parseInt(a) + parseInt(b)}`); //integer addition

const c=4;
const d= 5;
console.log(`sum of ${c} and ${d} is : ${c+d}`);

const fn="Ram";
const ln="Sharma";

console.log(`Full Name should be ${fn} ${ln}`);

console.log(`random number is : ${Math.random(11)}`);

