import React, { useState } from "react";

const App = () => {
  // 2 way binding in input handling
  const [title, settitle] = useState(" ");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form is submitted by", title);
    settitle("");
  };

  return (
    <div>
      <h2>Form handling in react</h2>
      {/* <form onSubmit={submitHandler}> */}
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="enter your name"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
