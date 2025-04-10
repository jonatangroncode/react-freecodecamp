import React from "react";
import "./Pads.css";
import { useState } from "react";
import padsData from "../../data/pads.js";
import Pad from "../Pad/Pad.jsx";

const Pads = () => {
  const [pads, setPads] = useState(padsData);

  const buttonElements = pads.map((pad) => (
    <Pad key={pad.id} color={pad.color} on={pad.on} />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
};

export default Pads;
