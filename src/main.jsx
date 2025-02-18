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
import "./index.css";

const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <>
      <header className="header">
        <img className="logo" src="./src/assets/react.svg" alt="logo" />
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

function UndordedList() {
  return (
    <>
      <ol>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis
          enim hic itaque corrupti, sed cum iste rem et optio a dolore nobis,
          dicta explicabo deleniti provident architecto culpa accusamus.
        </li>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nemo
          dolorum sunt, ullam necessitatibus nam quisquam obcaecati provident
          libero nobis voluptates? Facilis eum in consectetur expedita maxime
          velit cupiditate tempora?
        </li>
        <li>fdvs</li>
        <li>srfwr</li>
        <li>erwvrt</li>
      </ol>
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
