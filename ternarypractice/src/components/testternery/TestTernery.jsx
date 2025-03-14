import { useState } from "react";

const TestTernery = () => {
  const [option, setOption] = useState(true);

  return (
    <div>
      <h1>Are you going out today?</h1>
      <button
        onClick={() => {
          setOption((prevOption) => !prevOption);
        }}
      >
        {option ? "Yes" : "No"}
      </button>
    </div>
  );
};

export default TestTernery;
