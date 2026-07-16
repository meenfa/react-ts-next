import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(10);

  const [username, setusername] = useState("Ram");
  function changeNum() {
    setNum(30);
    setusername("Ankit");
  }
  return (
    <div>
      <h1>the value of a is {num}</h1>
      <h1>the name of a is {username}</h1>
      <button onClick={changeNum}> Click to change the value</button>
    </div>
  );
};

export default App;
