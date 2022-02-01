import axios from "axios";
import React, { useState } from "react";

function Request() {
  const [getdata, setGetdata] = useState([]);
  const [postdata, setPostdata] = useState({});
  const [putdata, setPutdata] = useState({});
  const [deldata, setDeldata] = useState([]);
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        setGetdata(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postData = () => {
    const data = {
      userId: 1212,
      id: 1212,
      title: "get data",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum  reprehenderit molestiae ut ut quas tota",
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => {
        setPostdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(postdata);

  const updateData = () => {
    const data = {
      userId: 1212,
      id: 1212,
      title: "updated data",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum  reprehenderit molestiae ut ut quas tota",
    };
    axios
      .put("https://jsonplaceholder.typicode.com/posts/2", data)
      .then((res) => {
        setPutdata(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteData = () => {
    const data = {
      userId: 1212,
      id: 1212,
      title: "updated data",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum  reprehenderit molestiae ut ut quas tota",
    };
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/2", data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let renderGetItems = () => {
    return getdata.map((item) => <p>{item.title}</p>);
  };
  let renderPostItems = () => {
    return (
      <p>
        {postdata.title}
        {postdata.body}
      </p>
    );
  };
  let renderPutItems = () => {
    return (
      <>
        <p>{putdata.title}</p>
        <div>{putdata.id} </div>
        <div>{putdata.body} </div>
      </>
    );
  };
  return (
    <div className="main">
      <div className="box">
        <h4>Axios</h4>
        <div className="btn-container">
          <div className="btn-box">
            <button className="button-55" onClick={getData}>
              Get
            </button>
            <div className="scroll-view">{renderGetItems()}</div>
          </div>
          <div className="btn-box">
            <button className="button-55" onClick={postData}>
              Post
            </button>
            <div>{renderPostItems()}</div>
          </div>
          <div className="btn-box">
            <button className="button-55" onClick={updateData}>
              Update
            </button>
            <div>{renderPutItems()}</div>
          </div>
          <div className="btn-box">
            <button className="button-55" onClick={deleteData}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;
