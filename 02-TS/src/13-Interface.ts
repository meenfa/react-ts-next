//1. Extended interfaces
// ->creating a new instances based obn tge one existing
// one to add more properties without rewriting code

interface BaseUser {
  id: number;
  name: string;
  email?: boolean;
}

interface Adminuser extends BaseUser {
  role: string;
}

// type annotations

const Admin: Adminuser = {
  id: 1,
  name: "New Admin",
  role: "Admin",
};

interface Shop {
  readonly id: number;
  name: string;
}

// const s: Shop = { id: 1, name: "guff gaff" };
// s.id;

interface DiscountCalculator{
  (price:number):number,
}

const apply50: DiscountCalculator=(p) => p*0.5

interface TeaMachine{
  start():void;
  stop():void
}

const machine: TeaMachine={
  start() {
    console.log("start");
    
  },
  stop() {
    console.log("stop");
    
  },
}

interface A  {a:string}
interface B  {b:string}

interface C extends A, B{}
