import React from "react";

const TernaryOperator = () => {
  const [option, setOption] = React.useState(true);

  function changeMind() {
    setOption((prev) => !prev);
  }

  return (
    <>
      <h1>Do I feel like going out tonight?</h1>
      <button
        onClick={changeMind}
        aria-label={`Current label is ${
          option ? "I'm going out!" : "I'm not going out!"
        }. Click to change it`}
      >
        {option ? "I'm going out!" : "I'm not going out!"}
      </button>
    </>
  );
};

export default TernaryOperator;
