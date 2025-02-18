//import { StrictMode } from 'react'
//import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <>
      <header>
        <h1>My App</h1>
      </header>
    </>
  );
}

function UndordedList() {
  return (
    <>
      <ul>
        <li>hejhej</li>
        <li>nummer 2</li>
        <li>fdvs</li>
        <li>srfwr</li>
        <li>erwvrt</li>
      </ul>
    </>
  );
}

function Footer() {
  return <h2>copyright --- 2025</h2>;
}

root.render(
  <main>
    <Header />
    <UndordedList />
    <Footer />
  </main>
);
