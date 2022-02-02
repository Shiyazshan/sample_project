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
    <form onSubmit={sendDataToApi}>
      <input
        type="text"
        name="fname"
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter your firstname"
      />
      <input
        type="text"
        name="lname"
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter your lastname"
      />
      <input type="submit" onClick={sendDataToApi} />
    </form>
  );
}

export default Create;
