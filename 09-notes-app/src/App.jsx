import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <div className="h-screen lg:flex  bg-gray-900 text-white p-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="p-10 flex flex-col items-start gap-4 w-1/3 lg:w-1/2"
      >
        {/* <div className="flex flex-col gap-4 w-1/3 items-start "> */}
        <input
          className="px-5 w-full font-medium border border-white rounded"
          type="text"
          placeholder="Title"
        />

        <textarea
          className="w-full h-40 p-2 font-medium border border-white rounded resize-none"
          placeholder="Write details"
        />

        <button
          type="submit"
          className="w-full px-5 py-2 font-medium bg-white text-black cursor-pointer rounded"
        >
          Add Note
        </button>
        {/* </div> */}
      </form>
      {/* form display part */}
      <div className="p-4 flex flex-wrap">
        <div className="h-40 w-40 bg-white rounded-2xl"></div>
      </div>
    </div>
  );
};

export default App;
