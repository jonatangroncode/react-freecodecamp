import React from "react";

function State() {
  let [isImportant, setIsImportant] = React.useState("Yes");

  const handleClick = () => {
    setIsImportant("Heck yes");
  };

  return (
    <>
      <h1>Is state important to know</h1>
      <button onClick={handleClick} className="value">
        {isImportant}
      </button>
    </>
  );
}

export default State;
