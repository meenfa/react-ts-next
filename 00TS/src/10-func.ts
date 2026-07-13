function makeChiya(type: string, cups:number){
    console.log(`making ${cups} cups of ${type}`);
}

makeChiya("masala",2)

function getChiyaPrice(): number{
    return 25
}

function makeOder(order:string){
    if(!order) return null
    return order
}

// logging function

function logChai():void{
    console.log("Chioya is ready");
    // void doesnot give any data out
}

// type? or string("jkcnaljkc") to make optional
// type?:string("masala chiya")
function orderChiyanew(type?:string){
    
}
function orderChiyanew2(type:string='masala chiya'){

}

function createOrder(order:{
    type:string, sugar:number,
    size:"small" | "large"
    // passing parameter
}):number{
    return 10
}

// if anydata is coming out from function, 
// define their types like string,number,boolean 
// and if not void is to be written