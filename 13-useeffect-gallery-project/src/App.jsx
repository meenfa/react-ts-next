import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  useEffect(() => {
    getData();

    // return () => {
    //   second;
    // };
  }, [index]);
  // [] is empty array,it means "run only once when component mounts"

  // axios.post - to create new data
  // axios.patch-to update data
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=8`,
      );
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("error fetching data:", error);
    }
  };

  // let printUserData = "No User Available";
  // if (userData.length > 0) {
  //   printUserData = userData.map(function (elem, idx) {
  //     return (
  //       <div>
  //         <img src={elem.download_url} />
  //       </div>
  //     );
  //   });
  // }
  return (
    <div className="px-4 py-2 min-h-screen items-center justify-center">
      <h1 className="fixed">{index}</h1>
      {/* <button
        onClick={getData}
        className="bg-[#F5F5F5] active:scale-95 text-black mb-4 px-4 py-2 rounded cursor-pointer"
      >
        Get Data
      </button> */}

      <div className=" grid grid-cols-4 gap-2 w-full max-w-6xl">
        {userData.length > 0 ? (
          // userData.map(function (elem, idx) {
          //   return (
          //     <div key={idx}>
          //       <img src={elem.download_url} alt={`Image ${idx + 1}`} />
          //       <h3 className="text-black">{elem.author}</h3>
          //     </div>
          //   );
          // }

          userData.map((elem, idx) => (
            <ImageCard key={idx} elem={elem} idx={idx} />
          ))
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
