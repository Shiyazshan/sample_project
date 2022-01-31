import React, { useState } from "react";
import axios from "axios";

const Post = () => {
  const [state, setState] = useState({
    userid: "",
    title: "",
    body: "",
  });
  const [datas, setdata] = useState([]);

  let changeHandler = (e) => {
    const newstate = { ...state };
    newstate[e.target.name] = e.target.value;
    setState(newstate);
    console.log(newstate);
  };
  
  let submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userid: state.userid,
        title: state.title,
        body: state.body,
      })
      .then((response) => {
        setdata([...datas, response.data]);
        console.log(response.data, "response");
      });
  };
  let rederItem = () => {
    return datas.map((item) => <p>{item.body}</p>);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler}>
          <input
            type="number"
            name="userid"
            onChange={changeHandler}
            placeholder="User id"
          />
          <input
            type="text"
            name="title"
            onChange={changeHandler}
            placeholder="title"
          />
          <textarea
            placeholder="Body"
            name="body"
            onChange={changeHandler}
          ></textarea>
          <input type="submit" />
        </form>
      </div>

      <p>{rederItem()}</p>
    </>
  );
};

export default Post;
