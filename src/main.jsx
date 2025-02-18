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

function Page() {
  return (
    <main>
      <ul>
        <li>LKSFB</li>
        <li>sdugv</li>
        <li>sdvsdf</li>
        <li>dsffvsd</li>
        <li>fdvsfvfvvfsvf</li>
      </ul>
    </main>
  );
}

root.render(<Page />);
