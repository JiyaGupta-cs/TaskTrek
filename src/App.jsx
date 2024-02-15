import "./App.css";
import { useState } from "react";

export default function App() {
  const name = useState("Rohit");

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };
  const printClick = () => {
    console.log(count);
  };

  return (
    <main>
      <h1>Hello {name}</h1>
      <button onClick={handleClick}>Update+1</button>
      <button onClick={printClick}>Print in Console</button>
    </main>
  );
}
