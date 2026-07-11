// types n interface in TS

type chiyaOrder={
    type:string;
    sugar:number;
    strong: boolean;
}

// type:string; sugar:number; strong:boolean
// every data have signature as above
function makeChiya(order:chiyaOrder) {
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