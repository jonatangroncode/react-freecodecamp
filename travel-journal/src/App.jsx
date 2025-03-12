import "./App.css";
import Header from "./components/header/Header.jsx";
import InfoTicket from "./components/infoticket/InfoTicket.jsx";
import data from "./data/data.js";

function App() {
  const EntryComponents = data.map((entry) => {
    return <InfoTicket key={entry.id} {...entry} />;
  });

  return (
    <>
      <Header />

      {EntryComponents}
    </>
  );
}

export default App;
