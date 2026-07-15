// 1.class obj and constructor

// construcotr: special method inside the class that runs automally when we create a new obj
//job is to inii the objects properties with the initial value
//A class can only have 1 constructor
// we never call consructor directly, the new keyword triggers it(public,private,protected)
class momo {
  name: string;
  price: number;

  // constructor-> ebntry door of the class
  constructor(n: string, p: number) {
    this.name = n; //-> sets up the initial data
    this.price = p;
  }

  serve() {
    console.log(`serving ${this.name}`);
  }
}
// Creating objects
const plate1 = new momo("panir", 100); //-> constructor runs here
plate1.serve();
// output->serving paneer

// 2. ACCESS MODIFIER(who can see it)
// -> keywords that controls who can touch the data inside your class

// keyword: private, public, protected
// keyword-> meaning                     -> analogy
// public-> everyone can see it          -> shops menu Clipboard
// private-> only class itself can see it -> your secret momo receipe
// protected-> the class n its children can see it -> only famiy secrets

class SecretMomo {
  public name: string;
  private recipe: string;

  constructor(n: string, r: string) {
    this.name = n;
    this.recipe = r;
  }
}
const myplate = new SecretMomo("Special", "Paneer");
console.log(myplate.name); //->ot->special and-> it works cause name is public
// console.log(myplate.receipe); //-> errors cause name is private

// 3.Inheritance(extends)
// new class inherits properties from the parent class

//Parent class
class Food {
  constructor(public name: string) {}
}

// child class
class Momo extends Food {
  isSpicy: boolean;

  constructor(n: string, s: boolean) {
    super(n); //->call the parents constructor first
    this.isSpicy = s;
  }
}

// multi level ingeritance
class vegMomo extends Momo {
  isVeg: boolean;

  constructor(n: string, s: boolean, veg: boolean) {
    super(n, s);
    this.isVeg = veg;
  }
}
const plate = new Momo("Paneer Momo", true);
const vegplate = new vegMomo("Veg Momo", true, true);
console.log(plate.name);
console.log(vegplate.name);
console.log(plate.isSpicy);

//nheritance is like a family tree.
// A child class gets ALL the properties from its parent,
// AND all the properties from its grandparent.

// 4.Interface(Contract)
// it is like a rule book or check list, contains no logic,no func, no constructors
// it defines its shape(what this class looks like) not its properties(how it works)
interface Servable {
  // serve is trhe method here and v
  // void will perfoems the function but wont return any value (like str, num, obj)
  serve(): void;
}

//the class must fo;llow the rules

class MomoPlate implements Servable {
  serve() {
    console.log("serving hpot momo");
  }
}

// Use void when a function's only job is to perform
//  a side effect (like logging, saving data, or changing UI)
// rather than calculating and returning a result.

//5 GETTERS N SETTERS
// ->special methods to control how properties are accessed or updated.

class Order {
  private _price: number = 0;
  get price() {
    return this._price;
  }

  set price(value: number) {
    if (value > 0) this._price = value;
  }
}

// use get to read value
// use set to update a value woth rules(preventing -ve num)