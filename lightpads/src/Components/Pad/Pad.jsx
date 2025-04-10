import React from "react";
import "./Pad.css";

const Pad = (props) => {
  console.log(props);
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.on ? undefined : "on"}
    ></button>
  );
};

export default Pad;
