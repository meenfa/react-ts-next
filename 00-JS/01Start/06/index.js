//Array(map,filter)
// const arr = [2, 3, 4, 5];

// arr.unshift("start") //unshift->at first
// arr.push("orange") //push->to last

// console.log(arr);
// console.log(arr.length);
// console.log(arr[1]);

// list all elements of an array
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     console.log(element);
// }

// map
// const mappedArray = arr.map(function(element){
//     return element*2;
// })

// console.log(mappedArray);

const product = [
    {
        name: "laptop",
        price: 80000
    },
    {
        name: "keyboard",
        price: 4500
    }
    ,
    {
        name: "mouse",
        price: 1000
    }
]
// product.map(product => console.log(product.name));

product.map((product) => {
    // console.log(product.name);
    // console.log(`${product.name}: Rs ${product.price}`);
})

// filter
// by price
// const expensive = product.filter(product => product.price > 100000);
// console.log(expensive);

// const lowprice = product.filter((product) => {
//     return product.price < 100000
// })
// console.log(lowprice);

// filter by same product name
// const filterbyname = product.filter((product) => {
//     return product.name === "Mac Book";
// })
// console.log(filterbyname);

// product
//   .filter(product => product.price > 50000)
//   .map(product => console.log(`${product.name}: Rs. ${product.price}`));

//   reduce

const totalPrice = product.reduce((accumulator, currentProduct) => {
    const newTotal = accumulator + currentProduct.price;
    return newTotal;
}, 0);
console.log(totalPrice);

// reduce to create a list of product names

const productNames = product.reduce((names, currentProduct) => {
    names.push(currentProduct.name);
    return names;
}, []); 
console.log(productNames);

