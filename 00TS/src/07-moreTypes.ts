// let numericLength: number = (response as string).length;

type Book= {
    name: string;
}

let bookString= '{"name":"The God Father"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value:any
value = "chiya"
value = [1,2,3]
value =2.5
value.toUppercase()


let newvalue: unknown
newvalue = "chiya"
newvalue = [1,2,3]
newvalue =2.5

if(typeof newvalue === "string"){
    newvalue.toUpperCase();
}

// try catch block

