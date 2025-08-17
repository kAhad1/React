import React, { useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/id/0/info");
    setData(response.data);
    console.log(data)
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-6">
      <button
        onClick={getData}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:scale-90"
      >
        Get Data
      </button>

      <Card data={data}/>
    </div>
  );
};

export default App;
