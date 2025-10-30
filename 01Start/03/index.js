// spread operator
// object/array
// too much used in function
// ...

// 1 duplicate
// lets make a duplicate array
const arr = [1, 2, 3, 4]
const duplicatearr = [...arr, 5, 6, "Ram", "KC"]
console.log(duplicatearr);

// q. merging of two array
const a = [1, 2, 3]
const b = [4, 5, 6]
const result = [...a, ...b];
console.log(result);

//2  merging or copying objects
const person = {
    name: "harry",
    age: 20,

}
const person2 = {
    place: "KTM",
    uni: "tu"
}

const res = { ...person, ...person2 };
console.log(res);

const ram = {
    age: 20,
    school: "CGA",
}

const updated = {
    ...ram,
    palce: "jhapa"
}

console.log(updated);

//3 for function


function sum2(a,b,c){

    return a+b+c;

}

const nums=[1,2,3];
console.log(sum2(...nums));

function sum(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
const numbers=[1,2,3,4,5,6,7,8,9,10];
console.log(sum(...numbers)); //55
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //55