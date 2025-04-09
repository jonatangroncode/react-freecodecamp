import React from "react";
import CountComp from "../CountComp/CountComp";

const ChangeState = () => {
  const [counter, setCounter] = React.useState(0);

  function add() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function subtract() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <div>
      <h1>This is changing a state</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <CountComp />
    </div>
  );
};

export default ChangeState;
