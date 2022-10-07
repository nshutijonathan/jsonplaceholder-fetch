import React, { useState, useEffect } from "react";
import axios from "axios";
const Fetch = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data: comments } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/1/comments`
    );
    console.log("comments", comments);
    setData(comments);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {data.map((value) => {
          return (
            <>
              <li>{value.id}</li>
              <li>{value.name}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Fetch;
