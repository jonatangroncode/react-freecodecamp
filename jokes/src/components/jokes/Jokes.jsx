import React from "react";

const Jokes = (props) => {
  console.log(props);
  return (
    <>
      {props.setup && <p>{props.setup}</p>}
      <p>{props.punchline}</p>
      <hr />
    </>
  );
};

export default Jokes;
