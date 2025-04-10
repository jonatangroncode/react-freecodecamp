import React from "react";
import "./Pads.css";
import { useState } from "react";
import padsData from "../../data/pads.js";
import Pad from "../Pad/Pad.jsx";

const Pads = () => {
  const [pads, setPads] = useState(padsData);

  function toggle(id) {
    setPads((prevPads) =>
      prevPads.map((pad) => (pad.id === id ? { ...pad, on: !pad.on } : pad))
    );
  }

  const buttonElements = pads.map((pad) => (
    <Pad
      key={pad.id}
      toggle={toggle}
      id={pad.id}
      color={pad.color}
      on={pad.on}
    />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
};

export default Pads;
