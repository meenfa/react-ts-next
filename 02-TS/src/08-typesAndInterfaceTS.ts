// types n interface in TS

// with classes we do more prefer interfaces than types
// type is also called literals types
type chiyaOrder={
    type:string;
    sugar:number;
    strong: boolean;
}

// type:string; sugar:number; strong:boolean
// every data have signature as above
function makeChiya2(order:chiyaOrder) {
    console.log(order);
    
}
function serveChiya(order:chiyaOrder) {
    console.log(order);
}

type TeaReceipe ={
    water:number;
    milk:number;
    
}

// class
class MasalaTea implements TeaReceipe{
    water=100;
    milk=50;
}

interface CupSize {
    size:"small" | "large"
}
 // to convert in interface for cupsize give value
class chai implements CupSize{
    size :"small" | "large" ="large"
}

// | -> union
// type Response2 = {ok:true}|{ok:false}
// class myRes2 implements Response2{
//     ok: boolean = true;
// } 

// UNION
type TeaType = "masala"|"ginger" | " dudh" |"kalo"

// t has teatype
function orderChai(t:TeaType){
    console.log(t);
    
}

// Intersection =&
type BaseChiya = {tealeaves:number}
type Extra = {masala:number}

type DudhChiya= BaseChiya & Extra

const Onecup : DudhChiya = {
    tealeaves:4,
    masala:1
}

type User ={
    username:string,
    bio?:string
}

const u1:User = {username:"Ankit"}
const u2:User = {username:"Ankit", bio:"meenfa.tech"}

type Config ={
    readonly appName:String,
    version: number
}

const cfg:Config ={
    appName : "TeamUp",
    version : 1
}

// cfg.appName = "TeamUp  by ANkit"
