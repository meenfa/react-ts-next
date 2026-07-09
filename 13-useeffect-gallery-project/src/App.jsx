import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getData();
  }, [index]);
  // [] is empty array,it means "run only once when component mounts"

  // axios.post - to create new data
  // axios.patch-to update data
  const getData = async () => {
    setloading(true);
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=8`,
      );
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("error fetching data:", error);
    } finally {
      //stop loading whether success or fail
      setloading(false);
    }
  };

  return (
    <div className="px-4 py-2 min-h-screen items-center justify-center">
      <h1 className="fixed">{index}</h1>

      <div className=" grid grid-cols-4 gap-2 w-full max-w-6xl">
        {loading ? (
          <p className="col-span-4 text-center text-xl">Loading images...</p>
        ) : userData.length > 0 ? (
          userData.map((elem) => <ImageCard key={elem.id} elem={elem} />)
        ) : (
          <p className="text-2xl">No Data Available</p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => {
            console.log("prev btn is clicked");
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
          className="bg-yellow-300 px-4 py-2 rounded cursor-pointer"
        >
          Prev
        </button>
        <h2>Page {index}</h2>
        <button
          onClick={() => {
            console.log("next btn is clicked");
            setIndex(index + 1);
          }}
          className="bg-yellow-300 px-4 py-2 rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
