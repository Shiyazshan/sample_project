import axios from "axios";
import React from "react";

function Request() {
    let getData = ()=> {
       
        axios.get("https://jsonplaceholder.typicode.com/posts/2")
        .then((data) => {
            console.log(data);
        })
    }
    let postData = ()=> {
        const data = {
            userId: 1212,
            id: 1212,
            title: "get data",
            body: "quia et suscipit suscipit recusandae consequuntur expedita et cum  reprehenderit molestiae ut ut quas tota"
        }
        axios.post("https://jsonplaceholder.typicode.com/posts",data)
        .then((data) => {
            console.log(data);
        })
    }
   let updateData = ()=> {
        const data = {
            userId: 1212,
            id: 1212,
            title: "updated data",
            body: "quia et suscipit suscipit recusandae consequuntur expedita et cum  reprehenderit molestiae ut ut quas tota"
        }
        axios.put("https://jsonplaceholder.typicode.com/posts/2",data)
        .then((data) => {
            console.log(data);
        })
    }

    let deleteData = ()=> {
        const data = {
            userId: 1212,
            id: 1212,
            title: "updated data",
            body: "quia et suscipit suscipit recusandae consequuntur expedita et cum  reprehenderit molestiae ut ut quas tota"
        }
        axios.delete("https://jsonplaceholder.typicode.com/posts/2",data)
        .then((data) => {
            console.log(data);
        })
        .catch((err) =>{
            console.log(err);
        })
    }
  return (
    <div className="main">
      <div className="box">
        <h4>Axios</h4>
        <button onClick={getData}> Get </button>
        <button onClick={postData}> Post </button>
        <button onClick={updateData}> Update </button>
        <button onClick={deleteData}> Delete </button>
      </div>
    </div>
  );
}

export default Request;
