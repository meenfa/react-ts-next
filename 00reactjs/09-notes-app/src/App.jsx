import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    // console.log(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
    // console.log(copyTask[idx]);
  };

  return (
    <div className="min-h-screen lg:flex bg-black text-white p-6 lg:p-2">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="w-full lg:w-1/2 p-4 lg:p-10 flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        {/* <div className="flex flex-col gap-4 w-1/3 items-start "> */}
        {/* fitst input */}
        <input
          className="px-4 py-2 w-full font-medium border border-white rounded"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="w-full h-40 p-2 font-medium border border-white rounded resize-none"
          placeholder="Write details"
          value={details}
          onChange={(e) => {
            // console.log(e.target.value);
            setDetails(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-full px-5 py-2 font-medium bg-gray-200 text-black cursor-pointer rounded"
        >
          Add Note
        </button>
        {/* </div> */}
      </form>
      {/* ?output */}
      {/* form display part */}
      <div className="w-full p-2 lg:p-4 lg:border-l-2 border-gray-600 lg:w-1/2">
        <h2 className="text-3xl font-bold">Recent notes</h2>
        <div className="flex flex-wrap items-startn justify-start gap-4 mt-5 h-[90%]">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between items-start flex-col py-4 px-4 pt-3 pb-2 h-64 w-full md:w-40 rounded-lg text-black
               bg-cover bg-[url('https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg')]"
              >
                <div>
                  <h3 className="font-semibold break-words uppercase">
                    {elem.title}
                  </h3>

                  <p className="mt-2 text-sm break-words max-h-32 overflow-y-auto pr-2 scrollbar-none">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="py-2 rounded-xl w-full bg-red-600 text-white text-xs font-bold cursor-pointer"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
