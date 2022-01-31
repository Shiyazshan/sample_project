import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Single({ data }) {
  const { id } = useParams();
  const [selectedID, setSelectedID] = useState({});

  useEffect(() => {
    data.map((item) => {
      if (item.id == id) {
        setSelectedID(item);
      }
    });
  }, []);

  return (
    <>
      <div className="main">
        <div className="box">
          <h4>{selectedID.title}</h4>
        </div>
      </div>
    </>
  );
}

export default Single;
