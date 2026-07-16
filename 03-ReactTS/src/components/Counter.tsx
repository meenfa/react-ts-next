import { useState } from "react";

export function Counter() {
    // generics-value of count will be
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>plate ordered : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Order 1 more</button>
    </div>
  );
}
