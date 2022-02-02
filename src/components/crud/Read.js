import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import "../../App";

function Read() {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    axios
      .get("https://61fa36d731f9c200175966be.mockapi.io/demo")
      .then((res) => {
        console.log(res.data);
        setGetData(res.data);
      });
  }, []);

  const getID = (id,firstname,lastname) => {
      console.log(id)
      localStorage.setItem('ID', id)
      localStorage.setItem('firstname', firstname)
      localStorage.setItem('lastname', lastname)
  }
  let renderItems = () => {
    return getData.map((item) => (
      <div className="gt-dt" key={item.id}>
        <h3>id: {item.id}</h3>
        <h4>Firstname : {item.firstname}</h4>
        <h4>Lastname : {item.lastname}</h4>
        <div className="span">
          <NavLink to="/update" onClick={()=> getID(item.id,item.firstname,item.lastname)} className="btn-updte">
            Update
          </NavLink>
          <NavLink to="/delete" className="btn-delete">
            Delete
          </NavLink>
        </div >
      </div>
    ));
  };
  return (
    <>
      <div className="main">
        <div className="box">
          <div className="read-flex">{renderItems()}</div>
        </div>
      </div>
    </>
  );
}
export default Read;
