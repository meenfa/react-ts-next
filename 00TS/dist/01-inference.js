// TYPE INFERENCING: TS already knows these types
let count = 0; //ts sees num
const site = "meenfa.tech"; //ts sees the eact literals as "meenfa.tech"
const score = [10, 20, 30];
export function add(a, b) {
    return a + b;
}
// ANNOTATION - need to tell TS the type
//over innoataion is not bad-> i is just noisy
let chiyaFlavour = "masala chiya";
chiyaFlavour = "Lemon Tea";
let chiyaOrder;
//you shud also annotate when the typ e is not obvuious
console.log(add(4, 2));
let maybe;
maybe = Math.random() > 0.5 ? "test" : 10;
