// Type Narrowing is the process of refining a variable's type
//  from something "broad" (like string | number) to 
// something "specific" (like just string) within a certain block of code
function getChiya(kind: string | number){
    if(typeof kind === 'string'){
        return `making of ${kind} chiya....`;
    }
    return `chiyaOrder:${kind}`
}

function serveChiya(msg ?:string){
    if(msg){
        return `serving ${msg}`;
    }
    return `serving default chiya`;
}

function orderChiya(size: "small"| "medium" | "large" | number){
    if (size ==="small"){
        return `small chiya..........`
    }
    if (size ==="medium"|| size ==="large"){
        return `extra chiya`
    }
    return `chai order #${size}`
}

class MilkTea {
    serve() {
        return `serving Milk tea`
    }
}
class lemonTea {
    serve() {
        return `serving lemonm tea`
    }
}

function serve(tea: MilkTea | lemonTea){
 if(tea instanceof MilkTea){
    return tea.serve();
 }
}

/// Object type definition
// In TypeScript, an Object is any value that isn't
//  a primitive (string, number, boolean, symbol, null, undefined).

type TeaOrder = {
    type: string
    sugar : number
}

function isTeaOrder(obj:any):obj is TeaOrder{
    return(
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === "string"&&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:TeaOrder | string){
    if(isTeaOrder(item)){
        return `serving ${item.type} tea with ${item.sugar}`
    }
    return `serving custom tea : ${item}`
}

type MasalaChiya = {
    type: "masala";
    spicelevel:number
};
type GingerChiya = {
    type: "ginger";
    amount:number
};
type KaloChiya = {
    type: "kalo";
    aroma:number
};

type chiya = MasalaChiya | GingerChiya | KaloChiya

function makeChiya(order:chiya){
    switch (order.type) {
        case "masala":
            return `Masala Chiya`
            break;
        case "ginger":
            return `Ginger Chiya`
            break;
        case "kalo":
            return `Kalo Chiya`
            break;
        default:
            break;
    }
}

function isStringArray(arr: unknown): arr is string[] {
    if (!Array.isArray(arr)) return false;

    return arr.every((item) => typeof item === "string");
}