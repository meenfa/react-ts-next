import { useState } from "react";

interface OrderFormProps {
  // onsubmit method
  onSubmit(order: { name: string; plates: number }): void;
  // their only purpose is to trigger an action, 
  // not to calculate and return a result.
}

export function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("Veg");
  const [plates, setPlates] = useState<number>(1);

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    onSubmit({name, plates})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Momo Name</label>
      <input
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      ></input>

      <label>Plates</label>
      <input
        type="number"
        value={plates}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPlates(Number(e.target.value)||0)
        }
      ></input>
      <button type="submit">
        Place Order
      </button>
    </form>
  );
}
