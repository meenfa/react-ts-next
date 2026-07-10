// strict null checks
// let title: string = "intro";
// title = undefined

let subtitle: string | undefined = "ankit";

// use void :function doesnt return a useful value

function log(msg: string): void {
  console.log(msg);
}

function fail(msg: string): never {
  throw new Error("msg");
}

// Donot use any-> try to ignore as much as possible

const valueAny: any = JSON.parse('{"x":1}');

valueAny.notThere.toFixed(2); //thiscompiles butcan break/explode at runtime
