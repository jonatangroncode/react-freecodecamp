import "./App.css";
import Entry from "./components/entry/Entry.jsx";
import Header from "./components/header/Header.jsx";
import InfoTicket from "./components/infoticket/InfoTicket.jsx";

function App() {
  return (
    <>
      <Header />
      <Entry />
      <InfoTicket
        mainimg="../src/assets/japan.png"
        country="Japan"
        googlelink="https://www.google.com/maps/place/Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
        traveldate="12 Jan, 2021 - 24 Jan, 2021"
        place="Mount Fuji"
        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists."
      />
    </>
  );
}

export default App;
