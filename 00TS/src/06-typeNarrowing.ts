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

//writing type

type TeaOrder = {
    type: string
    sugar : number

}

function isTeaOrder(obj:any):obj is TeaOrder{
    return(
        typeof obj === 'object' &&
        obj !  == null &&
        typeof obj.type === "string"&&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:TeaOrder | string){
    
}