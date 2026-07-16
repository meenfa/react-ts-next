import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({ name: "ankit", age: 24 });

  const [num, setNum] = useState([2, 4, 6, 8]);

  const btnClicked = () => {
    // creating newUser object n copying all  properties from
    const newUser = { ...user };
    newUser.name = "Raj";
    newUser.age = 20;
    setUser(newUser);

    const newNum = [...num];
    newNum.push(10);
    setNum(newNum);

    // setNum([...num, 10]);
  };

  return (
    <div>
      <h1>
        {user.name},{user.age},{num}
      </h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default App;
