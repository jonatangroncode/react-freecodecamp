import { useState } from "react";

const Jokes = (props) => {
  const [isShown, setIsShown] = useState(false);

  function togglePunchline() {
    setIsShown((prev) => !prev);
  }

  console.log(isShown);
  console.log(props);
  return (
    <>
      {props.setup && <p>{props.setup}</p>}
      {isShown === true && <p>{props.punchline}</p>}
      <button onClick={togglePunchline}>
        {isShown ? "Hide punchline" : "Show punchline"}
      </button>
      <hr />
    </>
  );
};

export default Jokes;
