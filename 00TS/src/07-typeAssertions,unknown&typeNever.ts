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
try {
    
} catch (error) {
    if(error instanceof Error){
        
        console.log(error.message);
    }
    console.log("error is",error);
       
}


const data:unknown = "Chai aur code"
const strData:string= data as string

// never data type
type Role = "admin"| "user"

function redirectBasedOnRole(role:Role):void {
    // data type is role and returns Void cause not know what will retutn or Idc abt the value iam returning
    if(role === "admin"){
        console.log("Admin dashboard");
        return   
    }
    if(role === "user"){
        console.log("User dashboard");
        return   
    }
    role;
}

function neverReturn():never {
    while (true) {
        
    }
    
}
