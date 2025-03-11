import "./App.css";
import Entry from "./components/entry/Entry.jsx";
import Header from "./components/header/Header.jsx";
import InfoTicket from "./components/infoticket/InfoTicket.jsx";
import data from "./data/data.js";

function App() {
  const EntryComponents = data.map((entry, index) => {
    return (
      <InfoTicket
        key={index} // React behöver en unik key för varje komponent i en lista
        mainimg={entry.img}
        country={entry.country}
        googlelink={entry.googleMapsLink}
        traveldate={entry.dates}
        place={entry.title}
        description={entry.text}
      />
    );
  });

  return (
    <>
      <Header />

      {EntryComponents}

      <InfoTicket
        mainimg={{ src: "../src/assets/japan.png", alt: "japan image" }}
        country="JAPAN"
        googlelink="https://www.google.com/maps/place/Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
        traveldate="12 Jan, 2021 - 24 Jan, 2021"
        place="Mount Fuji"
        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists."
      />

      <InfoTicket
        mainimg={{ src: "../src/assets/austalien.png", alt: "Sidney image " }}
        country="AUSTRALIA"
        googlelink="https://www.google.com/maps/place/Sydneys+operahus/@-33.8567799,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
        traveldate="27 May, 2021 - 8 Jun, 2021"
        place="Sydney Opera House"
        description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
      />

      <InfoTicket
        mainimg={{ src: "../src/assets/norway.png", alt: "Norway image" }}
        country="Norway"
        googlelink="https://www.google.com/maps/place/Geirangerfjorden/@60.8034604,2.877231,5.97z/data=!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
        traveldate="01 Oct, 2021 - 18 Nov, 2021"
        place="Geirangerfjord"
        description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      />

      <Entry />
    </>
  );
}

export default App;
