import "./App.css";
import "./components/jokes/Jokes";
import Jokes from "./components/jokes/Jokes";

function App() {
  return (
    <>
      <Jokes setup="What do you call a pony with a cough? A little horse. " />
      <Jokes
        setup="What did one hat say to the other? "
        punchline="You wait here. I’ll go on a head."
      />
      <Jokes
        setup="What do you call a magic dog? "
        punchline="A labracadabrador."
      />
      <Jokes
        setup="What did the shark say when he ate the clownfish? "
        punchline="This tastes a little funny."
      />
      <Jokes
        setup="What’s orange and sounds like a carrot? "
        punchline="A parrot. "
      />
    </>
  );
}

export default App;
