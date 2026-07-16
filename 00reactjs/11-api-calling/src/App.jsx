import React from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
const App = () => {
  {
    /* to get data 2 ways:
      fetch n axios */
  }
  // 1.fetch
  // async function getData() {
  //   const response = fetch("https://jsonplaceholder.typicode.com/todos/1");

  //   console.log(response);
  // }

  // 2.fetch
  // const getData = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/albums/10",
  //   );

  //   const data = await response.json();
  //   console.log(data);
  // };

  // 3.axios
  // const getData = async () => {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/todos/",
  //   );

  //   console.log(response.data);
  // };

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default App;
