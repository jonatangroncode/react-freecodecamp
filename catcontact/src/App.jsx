import "./App.css";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <section className="grid">
        <Card
          img="./src/assets/orangecat.jpg"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Card
          img="./src/assets/browncat.jpeg"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Card
          img="./src/assets/babycat.jpeg"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Card
          img="./src/assets/whitecat.jpeg"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Card
          img="./src/assets/orangecat.jpg"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Card
          img="./src/assets/browncat.jpeg"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Card
          img="./src/assets/babycat.jpeg"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Card
          img="./src/assets/whitecat.jpeg"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
      </section>
    </>
  );
}

export default App;
