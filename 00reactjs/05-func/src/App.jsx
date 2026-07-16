import { useState } from "react";

import "./App.css";

function App() {
  function btnClicked() {
    console.log("btn is clicked");
  }

  function onMouseEntered() {
    console.log("mouse is clicked");
  }

  function onChanged(elem) {
    // console.log("User is typing");
    console.log(elem.target.value);
  }

  function onMouseMoved(elem) {
    console.log(elem.clientX);
  }

  const PageScrolling = (elem) => {
    if (elem > 0) {
      console.log("tala scrolling at speed", elem);
    } else {
      console.log("mathi scrolling at speed", elem);
    }
    console.log("Page scrolling at speed", elem);
  };
  return (
    <>
      <div>
        {/* <div onWheel={() => {}}> */}
        <div
          onWheel={(elem) => {
            // console.log(elem.deltaY);
            PageScrolling(elem.deltaY);
          }}
        >
          <div className="h-100 w-100 bg-amber-300">Page 1</div>
          <div className="h-100 w-100 bg-amber-400">Page 2</div>
          <div className="h-100 w-100 bg-amber-500">Page 3</div>
        </div>
        {/* <button onClick={btnClicked}> Button Here</button>
        <br /> <br />
        <button onMouseEnter={onMouseEntered}>mouse clicked Here</button>
        <br /> <br />
        <input onChange={onChanged} placeholder="Enter your name here" />
        <div
          onMouseMove={onMouseMoved}
          className="h-50 w-50 bg-amber-500"
        ></div> */}
      </div>
    </>
  );
}

export default App;
