import React from "react";
import "./Pad.css";

const Pad = (props) => {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.on ? undefined : "on"}
      onClick={() => props.toggle(props.id)}
    ></button>
  );
};

export default Pad;
