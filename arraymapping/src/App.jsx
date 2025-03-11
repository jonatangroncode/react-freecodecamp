import "./App.css";

function App() {
  let numbers = [1, 2, 3, 4, 5];
  let squaredNumbers = numbers.map((num) => num ** 2);
  console.log(squaredNumbers);

  const names = ["alice", "fred", "jonatan", "james"];
  let capitalizedNames = names.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  );
  console.log(capitalizedNames);

  return (
    <>
      <h1>Squared Numbers</h1>
      <ul>
        {squaredNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <h1>Names</h1>
      <ul>
        {capitalizedNames.map((uname, index) => (
          <li key={index}>{uname}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
