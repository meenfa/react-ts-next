"use strict";

// var var-name : type = "value";

// The 7 Primitive Types in TypeScript
// 1string
let username = "ankit";

// 2num
let age = 20;
// 3.boolean
let isCreator = true;
// 4.bigint
const big = 2n ** 63n - 1n;
// Operator+ cannot be applied totypes 'bigint' and 'number'
// const mixed = big + age;
//5symbol
const TOKEN = Symbol("TOKEN");
// 6.null
let empty = null;
//undefinde
let notSet = undefined;

function yearsToDay(years: number): number {
  return 365 * years;
}
console.log(username.toUpperCase());
console.log(yearsToDay(2));
