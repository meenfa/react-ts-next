import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form is submitted");
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
        <input type="text" placeholder="enter your name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
