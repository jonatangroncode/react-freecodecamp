import React from "react";
import "./Pads.css";
import { useState } from "react";
import padsData from "../../data/pads.js";

const Pads = () => {
  const [pads, setPads] = useState(padsData);

  const buttonElements = pads.map((pad) => <button key={pad.id}></button>);

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
};

export default Pads;
