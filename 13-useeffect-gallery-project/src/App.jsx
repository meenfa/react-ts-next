import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getData();

    // return () => {
    //   second;
    // };
  }, []);
  // [] is empty array,it means "run only once when component mounts"

  // axios.post - to create new data
  // axios.patch-to update data
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://picsum.photos/v2/list?page=3&limit=40",
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
            <a href={elem.url}>
              <div
                key={idx}
                className="flex flex-col items-center p-4 rounded-lg justify-center"
              >
                <img
                  src={elem.download_url}
                  alt={`image ${idx + 1}`}
                  className="w-full h-48 rounded-lg object-cover"
                />
                <h2 className="text-black mt-4 text-xl text-center">
                  {elem.author}
                </h2>
              </div>
            </a>
          ))
        ) : (
          <p className="text-2xl">No Data Available</p>
        )}
      </div>
    </div>
  );
};

export default App;
