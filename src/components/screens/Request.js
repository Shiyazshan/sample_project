import React from "react";
import Create from "../crud/Create";
import Read from "../crud/Read";
import Update from "../crud/Update";

function Request() {
  return (
    <div className="main">
      <div className="box">
        <div className="cmpnt-flx">
          <div className="cnt-flx">
            <Create />
          </div>
          <div className="cnt-flx">
            <Read />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;
