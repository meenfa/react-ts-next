//  we can destructure objec and array

const arr = [1,2,3,4,5];
console.log(arr[2]);
console.log(arr[0]);

const [a,b,c,d,e] = arr;
console.log(e);

// object destructuring
// object : curly bracesko bhitra lekhiney key or value, here key is name and value is ram
const person = {
    name:"ram",
    age:20,
    place:"Jhapa"   
};

// accessing value types
// 1.dot notation
console.log(person.name);
// 2.bracket notation
console.log(person["place"])
console.log(person["name"])
// 3.destructuring
// Used to extract multiple properties from an object easily.
const {name, age, place}=person;
console.log(name, age, place);
console.log(name);
console.log(place); 




