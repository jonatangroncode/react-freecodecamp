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
import Header from "./components/Header";
import OrderdList from "./components/OrderdList";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById("root"));

root.render(
  <main>
    <Header />
    <OrderdList />
    <Footer />
  </main>
);
