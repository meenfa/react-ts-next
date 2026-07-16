import React, { useState } from "react";
// batch updating

// React doesn't re-render after every setState.

// <Instead:></Instead:>
// setNum(...)
// setNum(...)
// setNum(...)

// React collects them and performs a single re-render.

// This is called batching.

const App = () => {
  const [num, setNum] = useState(10);

  const btnClicked = () => {
    setNum(num + 10);
    setNum((prev) => prev + 2);
    // setNum((prev) => prev + 1);
    // setNum((prev) => prev + 1);
  };
  return (
    <div>
      <h3>{num}</h3>
      <button onClick={btnClicked}>change num</button>
    </div>
  );
};

export default App;
