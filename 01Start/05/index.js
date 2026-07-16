// function declaration

// function sum(a,b){
//  return a+b;
// }

// console.log(sum(30,20));

// function expressions
// defining function directly to a constant or variable or object.
// const sumof2numbesr=function sum(a,b){
//  console.log(a+b);
// };
// sumof2number(20,20);

// call back function

// const doSomething = function (callback) {
//     console.log("food is getting ready");
//     setTimeout(() => {
//         callback();

//     }, 1000);
// }

// const callback = function () {
//     console.log("food is ready");
// }

// doSomething(callback);

// Q.call back func qsn:
// hi ankit,
// welcome to js leartning

// const greetmessge = function (name,callbackmessage) {
//     console.log(`hi ${name}`);
//     setTimeout(() => {
//         callbackmessage();
//     }, 2000);
// }
// const callbackmessage = function () {
//     console.log("welcome to js learning");
// }

// greetmessge("Ankit", callbackmessage);


// HIGHER ORDER FUNCTION
// for general solving

const radius = [1, 2, 3, 4];

const area = function (radiusArray) {
    const result = [];
    for (let i = 0; i < radiusArray.length; i++) {
        const a = Math.PI * radiusArray[i] * radiusArray[i];
        result.push(a);
    }
    return result;
}
const ans = area(radius);
console.log(ans);

const circumference = function (r) {
    const result = [];
    for (let i = 0; i < r.length; i++) {
        const a =2* Math.PI * r[i];
        result.push(a);
    }
    return result;
}

const ans2 = circumference(radius);
console.log(ans2);

const area2 = function (array) {
    result=[];
    for (let i = 0; i < array.length; i++) {
        const a = Math.PI* array[i] *array[i];
        result.push(a);
    }
    return result;
    
}
const answer = area2(radius);
console.log(answer);
// for higher ordfer function

const radius2 = [7,14];
const calculate = function(radiusArray, formula){
    const result=[];
    for (let index = 0; index < radiusArray.length; index++) {
        const a = formula(radiusArray[index]);
        result.push(a);
        
    }
    return result;
}

const a = function (r) {
    return Math.PI * r * r;
    
}
const circumf = function (r) {
    return 2* Math.PI * r; 
}

console.log(`Area is ${calculate(radius2,a)}`);
console.log(`Circumference is ${calculate(radius2,circumf)}`);


// arrow function
const multiply = (a,b)=> a*b 

console.log(multiply(2,4));

const divide = (c,d) =>{
    return c/d;
}
console.log(divide(8,2));