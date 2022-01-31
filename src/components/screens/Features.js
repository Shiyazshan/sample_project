import React from "react";

export default function Features() {
  const data = [
    {
      title: "html",
    },
    {
      title: "CSS",
    },
    {
      title: "Bootstrap",
    },
    {
      title: "JavaScript",
    },
    {
      title: "React",
    },
    {
      title: "Django",
    },
  ];

  let renderItems = () => {
    return data.map((item) => {
      console.log(item);
      <div className="cardcontainer">
        <div className="card">
          <h2>{item.title}</h2>
          <button className="button-33">view more</button>
        </div>
      </div>;
    });
  };
  return (
    <>
      <div className="main">
        <div className="box">
          <h4>Features</h4>
        </div>
        {renderItems()}

      </div>
    </>
  );
}
