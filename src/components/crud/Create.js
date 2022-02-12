import axios from "axios";
import React, { useState } from "react";

function Create() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const sendDataToApi = (e) => {
    e.preventDefault();
    axios
      .post("https://61fa36d731f9c200175966be.mockapi.io/demo", {
        firstname,
        lastname,
      })
      .then((response) => {
        console.log(response.data);
        window.location.reload()
      });
    

  };
  return (
    <form className="form-crt" onSubmit={sendDataToApi}>
      <h3>Add data</h3>
      <input
        type="text"
        name="fname"
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter your first name"
      />
      <input
        type="text"
        name="lname"
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter your last name"
      />
      <input type="submit" onClick={sendDataToApi} />
    </form>
  );
}

export default Create;
