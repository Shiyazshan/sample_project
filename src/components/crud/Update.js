import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Update() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [ID, setID] = useState(null);

  
  const sendDataToApi = (e) => {
    e.preventDefault();
    axios
      .put(`https://61fa36d731f9c200175966be.mockapi.io/demo/${ID}`, {
        firstname,
        lastname,
      })
      .then(() => {
        Navigate('/read')
      });
  };

  useEffect(() => {
      setFirstName(localStorage.getItem('firstname'))
      setLastName(localStorage.getItem('lastname'))
      setID(localStorage.getItem('ID'))
  }, []);
  return (
    <div className="main">
      <div className="box">
        <form onSubmit={sendDataToApi}>
          <input
            type="text"
            value={firstname}
            name="fname"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your firstname"
          />
          <input
            type="text"
            value={lastname}
            name="lname"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your lastname"
          />
          <input type="submit" onClick={sendDataToApi} />
        </form>
      </div>
    </div>
  );
}

export default Update;
