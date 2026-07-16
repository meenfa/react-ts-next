import { useState } from "react";
import "./App.css";
import { MomoCard } from "./components/MomoCard.tsx";
import { Counter } from "./components/Counter.tsx";
import type { Momo } from "./types/types.ts";
import { MomoList } from "./components/MomoList.tsx";
import { OrderForm } from "./components/OrderForm.tsx";
import { Card } from "./components/Card.tsx";


const menu: Momo[] = [
  { id: 1, name: "veg momo 2", price: 100 },
  { id: 2, name: "veg momo 3", price: 100 },
  { id: 3, name: "veg momo 4", price: 100 },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>MOMO HERE</h1>
        <MomoCard name="Veg Momo" price={100} />
        <MomoCard name="Non Veg Momo" price={150} />
      </div>

      <div>
        <Counter />
      </div>
      <div>
        <MomoList items={menu} />
      </div>

      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed", order.name, order.plates);
          }}
        />
      </div>
      <div>
        <Card title="momohere" footer={<button>Order Now</button>} >
        <p>Paneer filling with spicy sauce.</p></Card>
      </div>
    </>
  );
}

export default App;
