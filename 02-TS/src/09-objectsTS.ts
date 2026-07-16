const chiya = {
    name:"Dudh chiya",
    price:25,
    isHot:true
}
// Declaring obj types

let tea:{
    name:string,
    price:number,
    isHot:boolean
}

tea={
    name:"kalo chiya",
    price:25,
    isHot:true
}

// alias obj of class

type TEA = {
    name:string,
    price:number,
    ingrediants:string[]   //ingre*** is the array of the astring
}

const matkaChiya: TEA = {
    name:"matka Chiya",
    price:25,
    ingrediants:["teaLeaves","milk","sugar"]
}

// DuckTyping

// this type cup is data type
type Cup= {
    size:string
}

let smallCup:Cup = {size:"200ml"}
let bigCup = {size:"500ml", material:"steel"}


// smalll cup to take data from big cup
// Assign the value of bigCup to smallCup.
smallCup = bigCup

type Brew= {
    brewTime:number
}

const Coffee = {brewTime:5, beans:"Arabica"}
const chiyaBrew:Brew=Coffee

type Customer = {
    username:string,
    password:string
}

const C:Customer ={
    username:"ankit",
    password:"12345"
}

// Spliting data types ->interesting property which comes in work

type Item={
    name:string,
    quantity:number
}
type Address={
    string:string,
    pin:number
}

type order={
    id:string,
    // Item data type is already defined and array is added
    items:Item[],
    address:Address
}

type Chai ={
    name:string,
    price:number,
    isHot:boolean
}

const updateChai=(updates: Partial<Chai>) =>{
    console.log("updating chiya with", updates);
    
}

updateChai({price: 25})
updateChai({isHot: false})
updateChai({})

type chiyaOrder2 = {
    name?:string,
    quantity?:number
}
// order is a data type here
const placeOrder = (order:Required<chiyaOrder2>)=>{
    console.log(order);
    
}
placeOrder({
    name: "dudh chiya",
    quantity:5
})

// pick ( which is less used)
// pick a set of properties whose keys are in the union K
type Chiya2 ={
    name: string,
    price:number,
    quantity:number,
    isHot:boolean,
    ingrediants:string[]
}

type basicChiyaInfo = Pick<Chiya2,"name" |"price">;

const chiyaInfo: basicChiyaInfo={
    name:"Lemon Tea",
    price:20
}

// omit-less used

type chiyaNew= {
    name:string, 
    price:number , 
    sercetingrediants: string
}

type PublicChai = Omit <Chiya2, "sercetingrediants">


