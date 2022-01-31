import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    const onSubmitHandler = () => {
        navigate ('/Contact');
    }
  return (
    <>
      <div className="main">
        <div className="box">
          <h4>About us</h4>
          <div className="details">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button className="btn-grad" onClick={onSubmitHandler}>More details</button>
          </div>
        </div>
      </div>
    </>
  );
}
