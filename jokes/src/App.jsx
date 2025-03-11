import "./App.css";
import "./components/jokes/Jokes";
import Jokes from "./components/jokes/Jokes";
import "./data/jokesData";
import jokesData from "./data/jokesData";

function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />;
  });
  return (
    <>
      <h1>Display jokes with map</h1>
      {jokeElements}

      <hr />
      <hr />

      <h1>Displaye jokes by calling component</h1>
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
