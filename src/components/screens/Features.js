import React from "react";
import { Link } from "react-router-dom";

export default function Features({data}) {

  let renderItems = () => {
    return data.map((item) => (
        console.log(data),
      <div className="cardcontainer">
        <div className="card">
          <h2>{item.title}</h2>
          <Link to={`/Single/${item.id}`}>view more</Link>
        </div>
      </div>
    ));
  };
  return (
    <>
      <div className="main">
        <div className="box">
          <h4>Features</h4>
        </div>
        <div className="flex">{renderItems()}</div>
      </div>
    </>
  );
}
