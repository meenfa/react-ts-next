// JavaScript is a DYNAMICALLY typed language
// - Variable types are determined at runtime.
// - No need to declare the type explicitly.
// - Variables can change types during execution.

// //Primitive :  uses stack memory
// a basic, immutable data type in JavaScript, directly representing a single value. 

//7 types: 
// String,Number,Boolean,Null(null means empty,null zero haina),
//undefined,Symbol,BigInt

const score=100
const score2=100.5
const isloggedIn=true
const outsideTemp=null

let userEmail;  //value will br undefined .i.e let userEmail=undefined

// symbol
const id1 = Symbol('123')
const id2 =Symbol('123')

console.log(id1==id2);

// const bigNumber = 1234567812345678n  //putting n will be bigint


 
//Reference(Non Primitive): uses heap memory
// store references (memory addresses) to the values, rather than the original values themselves.
//Array,Objects,Functions

const hero = ["apple","banana","mango","kiwi"];

let myObj = {
    name: "ankit",
    age: 20,

}

//defining function as variable

const Myfunction=function(){
    console.log("Hello World");
    return Myfunction;
};  

Myfunction(); // Calling the function

//return type of function is object

// datatype returning

console.log(typeof score); //dataype=number
console.log(typeof isloggedIn);   // boolean
console.log(typeof outsideTemp);  // object
console.log(typeof hero);         // object
console.log(typeof id1);          // symbol
console.log(typeof myObj);        // object
console.log(typeof Myfunction);   // function


// js document
// https://262.ecma-international.org/5.1/#sec-11.4.3


// ---------------------------------------------------------------------------------------

//stack memory and heap memory
// Primitive values (like strings) are copied and stored in stack memory.
// Non-primitive values (like objects) are stored in heap memory by reference.

// For Primitive Values (stack Memory):
let myYtname="ankitkarkiyt" // string in stack

let myanotherYtname= myYtname // copy of the string, separate in stack

myanotherYtname="anotheryt"  //changing

console.log(myYtname);
console.log(myanotherYtname);

// outcome explanation: Stack stores separate copies of primitive values.
// --------------------------------------------------------

//  For Non-Primitive Values (Heap Memory):
// object in heap
let user1={  
    email:"example.gmail.com",
    esewa:"esewa@ankitkarki"
}

let user2=user1 // user2 references the same object as user1
user2.email="ankit@gmail.com"  // changes on both user1 and user2 in email
// user2.esewa="esewa@123"

console.log(user1.email);
console.log(user2.email); 
console.log(user1.esewa);

// outcome explanation: Heap stores references to objects, so changes affect all references.