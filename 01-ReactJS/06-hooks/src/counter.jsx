import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }
  function decreaseNum() {
    setNum(num - 1);
  }

  const increaseFive = () => {
    setNum(num + 5);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={increaseFive}>increaseFive</button>
    </div>
  );
};

export default App;
