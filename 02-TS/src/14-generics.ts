
// GENERICS<T>
//T is the placeholder. I t can be anything.
// it mnakes code reusable,flexible without losing type safety
function identity<T>(arg: T): T {
  return arg;
  //arg could be anyuthing like item, tea,numb,....
}

let output1 = identity<string>("hello");
let output2 = identity<number>(20);
let output3 = identity<string>("true");
let output4 = identity("hello");

// 3.generics vs ANY

// while both allows flexibiliy, any disables type checking entirewly
// where generics maintain a strict link betn the input n output types

// /any way->unsafe

function badIdentity(arg: any): any {
  return arg;
}
let res1 = badIdentity("hello");
//ts has no idea waht res1 is

// Generics way
function goodIdentity<T>(arg: T): T {
  return arg;
}

let res2 = goodIdentity("Hello");
//ts knows res2 is  a string

// 4. Intermediate: Generic Interfaces
//-> Using generics to define flexible object shapes. Very common in API responses.
// Instead of creating a new interface for every data type,
// you create one "template" interface.

interface ApiResponse<T> {
  status: number;
  data: T; //-> T is the placeholder for the actual data
}

// usage 1: for user data
const userRes: ApiResponse<{ name: string }> = {
  status: 200,
  data: { name: "Ankit" },
};

// usage2
const countRes: ApiResponse<number> = {
  status: 200,
  data: 42,
};

// eg2:imagie having generic momo plate

interface ekMomoPlate<T> {
  id: number;
  filling: T; //-> the filling can be anything like string, number, object etc.
}

// usage 1:Veg Momo(String filling)
const vegPlate: ekMomoPlate<string> = {
  id: 1,
  filling: "paneer",
};

// usage 2 -> special mopmo (obj filling with details)
type fillingDetails = {
  meat: string;
  spiceLevel: number;
};
const specialPlate: ekMomoPlate<fillingDetails> = {
  // here Replace every T in this interface with fillingDetails.
  id: 2,
  // so  filling: fillingDetails; // T is now 'fillingDetails'
  // Since filling must be of type fillingDetails, TypeScript checks your object:
  filling: {
    meat: "chicken",
    spiceLevel: 2,
  },
};
//  Generic Function (The Chef)
function perepareMomo<T>(filling: T): ekMomoPlate<T> {
  return {
    id: Math.random(),
    filling: filling,
  };
}

// TS automatically knows 'filling' is a string here
const order1 = perepareMomo("Non veg");
// TS automatically knows 'filling' is a obj here
const order2 = perepareMomo({
  meat: "chicken",
  spiceLevel: 3,
});

// 5.CONSTRAINTS (extends)
// ->A rule that limits what types can be used as T

// the rule(name tag)
interface hasName {
  name: string;
}

// 2.generics func with constraint
// T must ve something that has a 'name' property

function labelMomo<T extends hasName>(filling: T): string {
  return `label :${filling.name}`;
  // TS allows this because of extends
}

//3.usage
const vegFilling = {
  name: "panner",
  spice: 2,
};

labelMomo(vegFilling);
// works it has because a 'name'

const badFilling = {
  spice: 5,
};

// labelMomo( badFiling); ->error property name is missing
