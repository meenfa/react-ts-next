//ARRAy basic syntax
const ChiyakoFlavour:string[]=["masala","adrak"]
const ChiyakoPrice: number[]=[10,20,30]

const rating: Array<number>=[4.5,5,4]

// array of obj
type Chiya={
    name:string;
    price:number
}

const menu:Chiya[]=[
    {name:"masala", price:25},
    {name:"lemon", price:25},
]
// menu.push can be done inside here

// readonly array
const cities:readonly string[]=["ktm","btm","pkr"]
// cities.push("brt");

// multi dimension array

const table: number[][]=[
    [1,2,3],
    [4,5,6],
]

// TUPLES
let chiyaTuple:[string,number];
chiyaTuple=["masala",20];
// chiyaTuple=[20,"masala"]-> this format is not okay in tuple

let userInfo:[string,number,boolean?];
userInfo = ["ankit",10,true]
userInfo = ["karki",10]

const location2: readonly [number,number]=[28.66, 23.44]

const chiyaItems:[name:string, price:number]=["Masala",35];


let t:[string,number]= ["chiya",10]
t.push("extra value",2)
//can push extra value in tuples,end of the day tuples are arrays themseklves


// ENUMS
// value of enums are CAPITALIZED

enum sizeoCups{
    Small, medium, large
}
const size = sizeoCups.Small

// /auto increment value on enum
enum Status{
    pending=100,
    served,//101
    canceled //102
}

enum CHiyaType{
    MASALA= "masala",
    LEMON = "lemon"
}
function toMakeChiya(type:CHiyaType){
    console.log(`making &{type}`);
}

toMakeChiya(CHiyaType.LEMON);
// toMakeChiya("masala")

// heterogenous value-random enums

// in most enums standard practise, they have similar datatypes.

//random data typoes in enum
enum RandomEnum {
    ID=1,
    NAME='chiya'
}

const enum Sugars{
    LOW=1,MEDIUM=2,HIGH=3}

    const s = Sugars.HIGH

