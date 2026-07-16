let score=27
let isloggedIn=0;
// console.log(typeof score);  //gives the data type of score 10.

let valueinnumber= Number(score)
console.log(typeof valueinnumber);
console.log(valueinnumber);

let booleanisloggedIn = Boolean(isloggedIn)
console.log(booleanisloggedIn);

let number2=1527
let stringNumber=String(number2)
console.log(stringNumber);
console.log(typeof stringNumber);


// 27 -> converted to 27
//27ankit =>NaN
//true ->1 ;false ->1


//OPERATIONS

let value= 27
let negvalue=-value

console.log(negvalue)


// console.log(2+2); 
// console.log(2-2); 
// console.log(2*2); 
// console.log(2/2); 

let str1="Ankit"
let str2="Karki"

// let myname=str1+" "+str2
// console.log(myname);

// console.log (1+2); 
// console.log("1"+2);
// console.log(1+"2");

// console.log("1"+2 +3);

// console.log(1+2+"3");

// console.log("1"+"2");

// console.log(+true);
// console.log(+"");

// let n1,n2,n3=2

// n1=n2=n3

// let num1 = 100;
// const num2=++num1
console.log(num1); //101
// console.log(num2); //101

let num1 = 100;
const num3=num1++
console.log(num1); //101    num is increased after its original value 100 is used
console.log(num3); //101 num3 gets original value of num1,after which num1 is incremented


function sum(a, b) {
    return a+b;
  }

  console.log(sum(1, 3));
  console.log(sum(2, 5));