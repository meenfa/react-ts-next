import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    // axios.post - to create new data
    // axios.patch-to update data
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30",
    );
    setUserData(response.data);
    console.log(response.data);
  };

  let printUserData = "No User Available";
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div>
          <img src={elem.download_url} />
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-screen text-white items-center justofy-center">
      <button
        onClick={getData}
        className="bg-gray-300 active:scale-95 text-black mb-4 px-4 py-2 rounded cursor-pointer"
      >
        Get Data
      </button>
      <div>{printUserData}</div>
    </div>
  );
};

export default App;
