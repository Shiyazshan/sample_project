import React from "react";
import Create from "../crud/Create";
import Read from "../crud/Read";
import Update from "../crud/Update";

function Request() {
  return (
    <div className="main">
      <div className="box">
        <Create />
        <Read />
        {/* <Update /> */}
      </div>
    </div>
  );
}

export default Request;
