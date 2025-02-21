import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  const hours = new Date().getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Good Morning";
  } else if (hours >= 12 && hours <= 17) {
    timeOfDay = "Good Afternoon";
  } else if (hours < 21) {
    timeOfDay = "Good Evening";
  } else {
    timeOfDay = "Good Night";
  }

  return <h1>Hello, World! {timeOfDay}</h1>;
}

const root = createRoot(document.getElementById("root"));

root.render(
  <main>
    <App />
  </main>
);
