import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const Get = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setData(response.data);
    });
  }, []);
  let renderItems = () => {
    return data.map((item) => (
      <>
        <ul>
          <li>
            <div>{item.id}</div>
            <h3> {item.body} </h3>
            <h1> {item.title} </h1>
          </li>
        </ul>
      </>
    ));
  };
  return (
    <>
      {console.log(data)}
      <h1>hello</h1>
      {renderItems()}
      <ul></ul>
    </>
  );
};

export default Get;
