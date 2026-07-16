import { useState } from "react";
import "./App.css";

function App() {
  // localStorage.setItem("user", "Ankit");

  // const user = localStorage.getItem("user");
  // console.log("value is", user);

  // localStorage.removeItem("user");
  // localStorage.clear();

  const user = {
    username: "ankit",
    age: 20,
    city: "kathmandu",
  };

  localStorage.setItem("user", JSON.stringify(user));

  console.log(user);

  return <div>Open the Console to See the Output</div>;
}

export default App;
