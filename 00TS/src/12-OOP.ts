// // class in ts
// class mithoChiya{
//     flavour:string;
//     price:number

// // constructor 

// // constructor(flavour: string, price: number){
// //     this.flavour = flavour,
// //     this.price = price
// // }
// constructor(flavour: string, price: number){
//     this.flavour = flavour,
//     // this.price = price
//     console.log(this)
// }
// }

// const masalaChiya = new mithoChiya("ginger",20)
// masalaChiya.flavour="masala"

// // excess modifier

// class MithoTea{
//     public flavour:string = "masala"

//     private secretIng = "illaichi"
//     reveal(){
//         return this.secretIng //ok
//     }
//         // excess nwill be get wihin the class or the class which is inheritiing this
//     // protected shopName = "Chiya Ghar"

// }
// class Shop{
//     // excess will be get wihin the class or the class which is inheritiing this
//     protected shopName = "Chiya Ghar"
// }

// class Branch extends Shop{
//     getName(){
//         return this.shopName //Ok
//     }
// }
// // new Branch().getName`

// // Private
// class Wallet{
//     #balance = 100

//     getBalance(){
//         return this.#balance
//     }
// }

// const w = new Wallet()

// class Glass {
//     readonly capacity: number = 250
//     constructor(capacity:number){
//         this.capacity = capacity
//     }
// }

// class ModernChai22{
//     private _sugar= 2
//     // getters
//     get sugar(){
//         return this. _sugar
//     }
//     // setters
//     set sugar(value:number){
//         if(value>5) throw new Error("too sweet");
//         this ._sugar= value
//     }
// }

// const c = ModernChai22()
// c.sugar = 3
// // Static members



// // cant excess direct
// // const c = new MithoTea()
// // c.reveal()
